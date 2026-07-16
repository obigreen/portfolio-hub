<?php
/**
 * Plugin Name: Transmission Leads
 * Description: Приём и обработка заявок с сайта автошколы «Трансмиссия».
 * Version: 1.0.0
 * Author: Sergey Budyakin
 * Text Domain: transmission-leads
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Объявляем нашу функцию, которая зарегистрирует отдельный тип записей для заявок.
function transmission_leads_register_post_type(): void

{

// Создаём ассоциативный массив с подписями, которые увидит администратор WordPress.
$labels = [
    // Множественное название типа записей.
    'name' => __('Заявки', 'transmission-leads'),
    // Единственное число: «Открыть одну заявку».
    'singular_name' => __('Заявка', 'transmission-leads'),
    // Название пункта в левом меню админки.
    'menu_name' => __('Заявки', 'transmission-leads'),
    // Текст заголовка списка всех заявок.
    'all_items' => __('Заявки', 'transmission-leads'),
    // Текст для действия добавления новой записи вручную.
    'add_new_item' => __('Добавить заявку', 'transmission-leads'),
    // Текст на странице редактирования одной заявки.
    'edit_item' => __('Редактировать заявку', 'transmission-leads'),
    // Текст, когда список заявок пуст.
    'not_found' => __('Заявки не найдены', 'transmission-leads'),
];

// Вызываем встроенную функцию WordPress и регистрируем тип записей.
register_post_type(
    // Техническое имя типа. Его придумали мы - аргумент номер 1.
    // Оно не показывается посетителям и должно быть уникальным.
    'transmission-lead',
    // Второй аргумент — настройки этого типа записей.
    [
        // Передаём ранее созданный массив подписей.
        'labels' => $labels,
        // Заявки не являются публичным контентом сайта.
        'public' => false,
        // Но в админке ими можно управлять.
        'show_ui' => true,
        // WordPress создаст отдельный пункт «Заявки» в левом меню админки.
        'show_in_menu' => true,
        // Не добавлять заявки в верхнюю админ-панель «Добавить».
        'show_in_admin_bar' => false,
        // Не предлагать заявки как пункты обычного меню сайта.
        'show_in_nav_menus' => false,
         // Не создавать стандартный REST-маршрут для этого типа.
        'show_in_rest' => false,
        // Не показывать заявки в поиске по сайту.
        'exclude_from_search' => true,
        // Запретить открывать заявку по публичному URL.
        'publicly_queryable' => false,
        // Не создавать страницу-архив вроде /leads/.
        'has_archive' => false,
        // Не создавать постоянные ссылки для заявок.
        'rewrite' => false,
        // Не разрешать технический запрос вида ?transmission_lead=...
        'query_var' => false,
        // Оставляем только внутренний заголовок записи.
        'supports' => ['title'],
        // Встроенная иконка WordPress для пункта меню.
        'menu_icon' => 'dashicons-email-alt',
    ]
  );
}

// Просим WordPress вызвать нашу функцию на системном событии init.
add_action('init', 'transmission_leads_register_post_type');


// Безопасно получаем один текстовый параметр из REST-запроса.
function transmission_leads_get_text_param( WP_REST_Request $request, string $key ): string
{
    // Получаем значение по имени поля.
    $value = $request->get_param( $key );

    // Не принимаем массивы и объекты вместо ожидаемой строки.
    if ( ! is_scalar( $value ) ) {
        return '';
    }

    // Приводим к строке и очищаем от HTML и лишних символов.
    return sanitize_text_field( (string) $value );
}

// Создаём ключ для ограничения частоты заявок с одного IP.
function transmission_leads_get_rate_limit_key(): string
{
    // REMOTE_ADDR передаёт IP посетителя серверу.
    $ip_address = sanitize_text_field( wp_unslash( $_SERVER['REMOTE_ADDR'] ?? '' ) );

    // Хеш не раскрывает IP в названии записи transient.
    return 'transmission_leads_rate_' . md5( $ip_address );
}

// Принимаем, проверяем и сохраняем одну заявку.
function transmission_leads_submit( WP_REST_Request $request ): WP_REST_Response|WP_Error
{
    // Honeypot: обычный посетитель оставляет скрытое поле пустым.
    $website = transmission_leads_get_text_param( $request, 'website' );

    // Боту показываем успешный ответ, но запись не создаём.
    if ( '' !== $website ) {
        return new WP_REST_Response(
            [
                'message' => 'Заявка отправлена.',
            ],
            201
        );
    }

    // Не принимаем больше одной успешной заявки в минуту с одного IP.
    $rate_limit_key = transmission_leads_get_rate_limit_key();

    if ( get_transient( $rate_limit_key ) ) {
        return new WP_Error(
            'transmission_leads_rate_limited',
            'Подождите минуту перед повторной отправкой.',
            [
                'status' => 429,
            ]
        );
    }

    // Получаем и очищаем каждое ожидаемое поле.
    $first_name = transmission_leads_get_text_param( $request, 'first_name' );
    $last_name  = transmission_leads_get_text_param( $request, 'last_name' );
    $phone      = transmission_leads_get_text_param( $request, 'phone' );
    $email      = sanitize_email(
        transmission_leads_get_text_param( $request, 'email' )
    );
    $telegram   = transmission_leads_get_text_param( $request, 'telegram' );
    $source     = transmission_leads_get_text_param( $request, 'source' );
    $consent    = transmission_leads_get_text_param( $request, 'privacy_consent' );

    // Создаём массив ошибок по полям.
    $errors = [];

    // Имя и фамилия обязательны: минимум два символа.
    if ( mb_strlen( $first_name ) < 2 || mb_strlen( $first_name ) > 50 ) {
        $errors['first_name'] = 'Введите имя длиной от 2 до 50 символов.';
    }

    if ( mb_strlen( $last_name ) < 2 || mb_strlen( $last_name ) > 50 ) {
        $errors['last_name'] = 'Введите фамилию длиной от 2 до 50 символов.';
    }

    // У телефона разрешаем цифры и символы форматирования.
    $phone_digits = preg_replace( '/\D+/', '', $phone );

    if (
        ! preg_match( '/^\+?[\d\s()-]+$/', $phone )
        || strlen( $phone_digits ) < 10
        || strlen( $phone_digits ) > 15
    ) {
        $errors['phone'] = 'Введите корректный номер телефона.';
    }

    // Email сначала очищаем, затем проверяем встроенной WordPress-функцией.
    if ( ! is_email( $email ) ) {
        $errors['email'] = 'Введите корректный адрес электронной почты.';
    }

    // Telegram необязателен, но при наличии должен быть похож на username.
    if (
        '' !== $telegram
        && ! preg_match( '/^@?[A-Za-z][A-Za-z0-9_]{4,31}$/', $telegram )
    ) {
        $errors['telegram'] = 'Введите корректный username Telegram.';
    }

    // Сервер принимает заявки только от нашей формы.
    if ( 'landing-popup' !== $source ) {
        $errors['source'] = 'Неизвестный источник заявки.';
    }

    // Согласие обязательно.
    if ( '1' !== $consent ) {
        $errors['privacy_consent'] = 'Необходимо согласие на обработку данных.';
    }

    // Если есть ошибки, не создаём заявку и возвращаем JSON с кодом 422.
    if ( [] !== $errors ) {
        return new WP_Error(
            'transmission_leads_invalid_data',
            'Проверьте поля формы.',
            [
                'status' => 422,
                'fields' => $errors,
            ]
        );
    }

    // Формируем технический заголовок, видимый только в админке.
    $lead_title = sprintf(
        'Заявка: %s %s — %s',
        $first_name,
        $last_name,
        wp_date( 'd.m.Y H:i' )
    );

    // Создаём приватную запись WordPress.
    $lead_id = wp_insert_post(
        [
            // Используем уже созданный тобой тип записей.
            'post_type'   => 'transmission-lead',

            // Запись не станет публичной страницей сайта.
            'post_status' => 'private',

            // На всякий случай удаляем любые HTML-теги из заголовка.
            'post_title'  => wp_strip_all_tags( $lead_title ),
        ],
        true
    );

    // Если WordPress не смог сохранить запись, возвращаем серверную ошибку.
    if ( is_wp_error( $lead_id ) ) {
        return new WP_Error(
            'transmission_leads_save_failed',
            'Не удалось сохранить заявку. Попробуйте ещё раз позже.',
            [
                'status' => 500,
            ]
        );
    }

    // Храним данные в скрытых meta-полях созданной заявки.
    update_post_meta( $lead_id, '_transmission_lead_first_name', $first_name );
    update_post_meta( $lead_id, '_transmission_lead_last_name', $last_name );
    update_post_meta( $lead_id, '_transmission_lead_phone', $phone );
    update_post_meta( $lead_id, '_transmission_lead_email', $email );
    update_post_meta( $lead_id, '_transmission_lead_telegram', $telegram );
    update_post_meta( $lead_id, '_transmission_lead_source', $source );
    update_post_meta( $lead_id, '_transmission_lead_consent_at', current_time( 'mysql' ) );

    // После успешного сохранения включаем ограничение на одну минуту.
    set_transient( $rate_limit_key, true, MINUTE_IN_SECONDS );

    // Возвращаем успешный JSON-ответ для будущего fetch().
    return new WP_REST_Response(
        [
            'message' => 'Заявка успешно отправлена.',
        ],
        201
    );
}

// Регистрируем URL, который будет принимать POST-запрос формы.
function transmission_leads_register_rest_routes(): void
{
    register_rest_route(
        // Наш namespace: имя плагина + версия API.
        'transmission-leads/v1',

        // Путь после namespace.
        '/submit',

        [
            // Разрешаем только создание заявки через POST.
            'methods' => 'POST',

            // Функция, которая обработает запрос.
            'callback' => 'transmission_leads_submit',

            // Посетитель не авторизован, поэтому маршрут публичный.
            // Безопасность обеспечивают проверка, honeypot и rate limit выше.
            'permission_callback' => '__return_true',
        ]
    );
}

// WordPress создаёт REST-маршруты на этом системном событии.
add_action( 'rest_api_init', 'transmission_leads_register_rest_routes' );

// Передаём JavaScript-форме адрес REST endpoint.
function transmission_leads_expose_endpoint(): void
{
    // Настройка нужна только на главной, где есть форма заявки.
    if ( ! is_front_page() ) {
        return;
    }

    // Добавляем данные перед уже подключённым form.js.
    wp_add_inline_script(
        // Это handle form.js из functions.php темы.
        'transmission-form',

        // Создаём глобальный объект JavaScript с актуальным URL.
        'window.transmissionLeadsData = ' . wp_json_encode(
            [
                'endpointUrl' => rest_url( 'transmission-leads/v1/submit' ),
            ]
        ) . ';',

        // Код должен появиться раньше form.js.
        'before'
    );
}

// 20: выполняем после темы, которая зарегистрировала transmission-form на приоритете 10.
add_action( 'wp_enqueue_scripts', 'transmission_leads_expose_endpoint', 20 );

// Рисуем блок с данными заявки на странице её редактирования.
function transmission_leads_render_details_meta_box( WP_Post $post ): void
{
    // Собираем подписи и сохранённые значения в один массив.
    $fields = [
        __( 'Имя', 'transmission-leads' ) => get_post_meta(
            $post->ID,
            '_transmission_lead_first_name',
            true
        ),
        __( 'Фамилия', 'transmission-leads' ) => get_post_meta(
            $post->ID,
            '_transmission_lead_last_name',
            true
        ),
        __( 'Телефон', 'transmission-leads' ) => get_post_meta(
            $post->ID,
            '_transmission_lead_phone',
            true
        ),
        __( 'Email', 'transmission-leads' ) => get_post_meta(
            $post->ID,
            '_transmission_lead_email',
            true
        ),
        __( 'Telegram', 'transmission-leads' ) => get_post_meta(
            $post->ID,
            '_transmission_lead_telegram',
            true
        ),
        __( 'Источник', 'transmission-leads' ) => get_post_meta(
            $post->ID,
            '_transmission_lead_source',
            true
        ),
        __( 'Согласие получено', 'transmission-leads' ) => get_post_meta(
            $post->ID,
            '_transmission_lead_consent_at',
            true
        ),
    ];

    // Используем готовые классы таблицы админки WordPress.
    echo '<table class="widefat striped"><tbody>';

    // Для каждой пары «подпись → значение» создаём строку таблицы.
    foreach ( $fields as $label => $value ) {
        printf(
            '<tr><th scope="row">%s</th><td>%s</td></tr>',
            esc_html( $label ),
            esc_html( $value ?: '—' )
        );
    }

    echo '</tbody></table>';
}

// Регистрируем место блока на экране редактирования заявки.
function transmission_leads_add_details_meta_box(): void
{
    add_meta_box(
        // Технический ID блока.
        'transmission-lead-details',

        // Заголовок, который увидит администратор.
        __( 'Данные заявки', 'transmission-leads' ),

        // Наша функция, которая выведет таблицу.
        'transmission_leads_render_details_meta_box',

        // Экран только для нашего типа заявок.
        'transmission-lead',

        // Место под основным заголовком.
        'normal',

        // Высокий приоритет отображения.
        'high'
    );
}

// WordPress запускает этот код, когда строит экран редактирования заявки.
add_action(
    'add_meta_boxes_transmission-lead',
    'transmission_leads_add_details_meta_box'
);


// Добавляем свои колонки в таблицу списка заявок.
function transmission_leads_add_list_columns( array $columns ): array
{
    // Добавляем название колонки телефона.
    $columns['phone'] = __( 'Телефон', 'transmission-leads' );

    // Добавляем название колонки email.
    $columns['email'] = __( 'Email', 'transmission-leads' );

    // Фильтр обязан вернуть изменённый массив колонок обратно WordPress.
    return $columns;
}

// Фильтр работает только для списка типа записей transmission-lead.
add_filter(
    'manage_transmission-lead_posts_columns',
    'transmission_leads_add_list_columns'
);

// Выводим значения в добавленных колонках.
function transmission_leads_render_list_column( string $column_name, int $post_id ): void
{
    // Если WordPress сейчас рисует колонку телефона.
    if ( 'phone' === $column_name ) {
        $phone = get_post_meta( $post_id, '_transmission_lead_phone', true );

        // Экранируем значение непосредственно перед HTML-выводом.
        echo esc_html( $phone ?: '—' );
    }

    // Если WordPress сейчас рисует колонку email.
    if ( 'email' === $column_name ) {
        $email = get_post_meta( $post_id, '_transmission_lead_email', true );

        // Экранируем значение непосредственно перед HTML-выводом.
        echo esc_html( $email ?: '—' );
    }
}

// Action получает имя текущей колонки и ID текущей заявки.
add_action(
    'manage_transmission-lead_posts_custom_column',
    'transmission_leads_render_list_column',
    10,
    2
);

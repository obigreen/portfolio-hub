<?php get_header(); ?>

<?php get_template_part('template-parts/inner-header'); ?>

<main class="not-found-page">
    <div class="container not-found-page__content">
        <p class="not-found-page__code" aria-hidden="true">404</p>
        <h1 class="not-found-page__title">Страница не найдена</h1>
        <p class="not-found-page__text">
            Возможно, адрес изменился или в ссылке допущена ошибка.
            Вернитесь на главную страницу и продолжите знакомство с автошколой.
        </p>
        <a class="button" href="<?php echo esc_url( home_url( '/' ) ); ?>">
            На главную
        </a>
    </div>
</main>

<?php
get_template_part(
    'template-parts/inner-footer',
    null,
    [
        'link_url' => home_url( '/privacy-policy/' ),
        'link_label' => 'Privacy Policy',
    ]
);
?>

<?php get_footer(); ?>
<?php

function transmission_asset_uri(string $path): string
{
    return get_template_directory_uri() . '/' . ltrim($path, '/');
};


function transmission_setup(): void
{
    add_theme_support('title-tag');
    add_theme_support( 'post-thumbnails' );
    register_nav_menus(
        [
            'primary' => 'Основное меню',
        ]
    );
}
add_action('after_setup_theme','transmission_setup');


function transmission_enqueue_assets(): void

{
    $theme_uri = get_template_directory_uri();

    wp_enqueue_style(
         'transmission-swiper',
         $theme_uri . '/assets/vendor/swiper/swiper-bundle.min.css', // путь начинаем с /
         [], // У Swiper CSS нет зависимостей от других CSS-файлов.
         '1.0'
    );

    wp_enqueue_style(
         'transmission-main',
         $theme_uri . '/assets/css/style.css',
         ['transmission-swiper'],
         '1.0'
    );

    wp_enqueue_style(
         'transmission-adaptive',
         $theme_uri . '/assets/css/adaptive.css',
         ['transmission-main'],
         '1.0'
    );

    wp_enqueue_style(
         'transmission-pages',
         $theme_uri . '/assets/css/pages.css',
         ['transmission-adaptive'],
         '1.0'
    );

    wp_enqueue_script(
         'transmission-swiper',
         $theme_uri . '/assets/vendor/swiper/swiper-bundle.min.js',
         [],
         '1.0',
         true // подключаем скрипт внизу, false тогда подключение будет в head
    );

    wp_enqueue_script(
         'transmission-sliders',
         $theme_uri . '/assets/js/sliderSwiper.js',
         ['transmission-swiper'],
         '1.0',
         ['in_footer' => true] // более явная вариация
    );

    wp_enqueue_script(
         'transmission-script',
         $theme_uri . '/assets/js/script.js',
         [],
         '1.0',
         true
    );

    wp_enqueue_script(
         'transmission-advantages',
         $theme_uri . '/assets/js/advantages.js',
         [],
         '1.0',
         true
    );

    wp_enqueue_script(
         'transmission-categories',
         $theme_uri . '/assets/js/categories.js',
         [],
         '1.0',
         true
    );

    wp_add_inline_script(
        'transmission-categories',
        'window.transmissionData = ' . wp_json_encode(['assetsUrl' => get_template_directory_uri() . '/assets']) . ';',
        'before'
    );

    wp_enqueue_script(
         'transmission-stages',
         $theme_uri . '/assets/js/stages.js',
         [],
         '1.0',
         true
    );

    wp_enqueue_script(
         'transmission-form',
         $theme_uri . '/assets/js/form.js',
         [],
         '1.0',
         true
    );
};

add_action( // Регистрируем нашу функцию на специальное событие WordPress.
    'wp_enqueue_scripts', // Событие, на котором WordPress подключает стили и скрипты фронтенда.
    'transmission_enqueue_assets' // Название функции, которую WordPress должен вызвать.
);




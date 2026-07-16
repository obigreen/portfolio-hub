<!doctype html>
<html <?php language_attributes(); // Выводит языковые атрибуты сайта, например lang="ru-RU". ?>>
<head>
    <meta charset="<?php bloginfo('charset'); // Выводит кодировку сайта из настроек WordPress, обычно UTF-8. ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); // Обязательная точка для WordPress: сюда он подключает стили, скрипты, мета-теги и плагины. ?>
</head>
<body <?php body_class(); // Добавляет body классы WordPress, полезно для разных страниц и состояний. ?>>
<?php wp_body_open(); // Обязательный хук сразу после открытия body, нужен WordPress и плагинам. ?>

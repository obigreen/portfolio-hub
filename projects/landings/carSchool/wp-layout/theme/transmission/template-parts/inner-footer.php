<?php
$link_url = $args['link_url'] ?? home_url( '/' );
$link_label = $args['link_label'] ?? 'На главную';
?>

<footer class="page-footer">
    <div class="container page-footer__inner">
        <p>© <?php echo esc_html( wp_date( 'Y' ) ); ?> Автошкола «Трансмиссия»</p>
        <a href="<?php echo esc_url( $link_url ); ?>">
            <?php echo esc_html( $link_label ); ?>
        </a>
    </div>
</footer>
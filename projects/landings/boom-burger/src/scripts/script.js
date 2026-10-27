const loader = $('.loader');

new WOW({
    animateClass: 'animate__animated',
}).init();

// mobile menu
document.getElementById('burger').onclick = function () {
    document.getElementById('menu').classList.add('open');
    $('body').css('overflow-y', 'hidden');
}
document.querySelectorAll('#menu *').forEach((item) => {
    item.onclick = () => {
        document.getElementById('menu').classList.remove('open');
       
    }
});

// scroll
$('#reserve-table').click(function() {
    $('.order')[0].scrollIntoView( {behavior: "smooth"});
});
$("a[href='#to_main-menu']").click(function() {
    $('#main-menu')[0].scrollIntoView( {behavior: "smooth"});
});
$("a[href='#to_advantages']").click(function() {
    $('#advantages')[0].scrollIntoView( {behavior: "smooth"});
});
$("a[href='#to_reviews']").click(function() {
    $('#reviews')[0].scrollIntoView( {behavior: "smooth"});
});
$("a[href='#to_about']").click(function() {
    $('#about')[0].scrollIntoView( {behavior: "smooth"});
});
$("a[href='#to_promotions']").click(function() {
    $('#promotions')[0].scrollIntoView( {behavior: "smooth"});
});



// slider-menu
$('.menu-slider-items').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: '<img src="src/images/next.png" alt="">',
    prevArrow: '<img src="src/images/prev.png" alt="">',
    responsive: [
        {
            breakpoint: 1370,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 870,
            settings: {
                rows: 2,
                slidesPerRow: 2,
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
    ]
});

// slider-reviews
$('.reviews-slider-items').slick({
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: '<img src="src/images/next.png" alt="">',
    prevArrow: '<img src="src/images/prev.png" alt="">',
    responsive: [
        {
            breakpoint: 1360,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 870,
            settings: {
                rows: 2,
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },

    ]
});

// tabs
$('.js-tab-trigger').click(function() {
    let id = $(this).attr('data-tab'), // 1
        content = $('.js-tab-content[data-tab="'+ id +'"]'); // 2
    $('.js-tab-trigger.active').removeClass('active'); // 1
    $(this).addClass('active')// 2


    $('.js-tab-content.active').removeClass('active'); // 3
    content.addClass('active'); // 4

})

// inputmask
$("#user-phone").inputmask("+7 (999) 999-99-99");

// order form
$('#create-order').click(function () {
    let name = $('#user-name');
    let telephone = $('#user-phone');
    let orderForm = $('.order-form');
    let orderStatus = $('.order-status');
    let hasError = false;
    $('.error-input').hide();
    name.css('border-color', 'rgb(253, 177, 91)');
    telephone.css('border-color', 'rgb(253, 177, 91)');

    if(!name.val()) {
        name.css('border-color', '#af0707');
        name.next().show();
        hasError = true;
    }
    if(!telephone.val()) {
        telephone.next().show();
        telephone.css('border-color', '#af0707');
        hasError = true;
    }
    if(!hasError) {
        loader.css('display', 'flex');
        $.ajax({
            method: "POST",
            url: "http://testologia.site/checkout",
            data: { name: name.val(), telephone: telephone.val() }
        })
            .done(function( msg ) {
                loader.hide();
                if(msg.success) {
                    orderForm.css('display', 'none');
                    orderStatus.css('display', 'flex');
                } else {
                    alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ!');
                }
                console.log(msg.success);
            });
    }
})

// Таймер
window.addEventListener('load', event => {
    let currentDate = new Date(); // получаем сегодняшнюю дату и время
    let deadlineTime = currentDate.setMinutes(currentDate.getMinutes() + 30); // устанавливаем таймер на 30 минут

    let countdown = setInterval(function() {
        let currentTime = new Date().getTime(); // текущее время
        let restOfTime = deadlineTime - currentTime; // находим различие между текущим моментом и временем дедлайна
        // преобразовываем значение миллисекунд в минуты и секунды
        let min = Math.floor( (restOfTime % (1000 * 60 * 60)) / (1000 * 60) );
        let sec = Math.floor( (restOfTime % (1000 * 60)) / 1000 );
        // если значение текущей минуты или секунды меньше 10, добавляем вначале ведущий ноль
        min = min < 10 ? "0" + min : min;
        sec = sec < 10 ? "0" + sec : sec;
        // отображаем результат таймера в элементе с id="deadline-timer"
        document.getElementById("deadline-timer").innerHTML = min + ":" + sec;
        // если в таймере остались только секунды, меняем слово "минуты" на "секунды"

    }, 1000);

});
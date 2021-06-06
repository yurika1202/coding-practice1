/* header背景変更 */
jQuery(window).on('scroll', function () {
    if (740 < jQuery(this).scrollTop()) {
        jQuery('.header').addClass('_active-bg');
    } else {
        jQuery('.header').removeClass('_active-bg');
    }
});

/* スクロール */
$('.nav__item a[href^="#"]').click(function() {
    var elHash = $(this).attr('href');
    var pos = $(elHash).offset().top-80;
    $('body,html').animate({scrollTop: pos}, 500);
    return false;
});
  
$('.nav__item_sp a[href^="#"]').click(function() {
    var elHash = $(this).attr('href');
    var smPos = $(elHash).offset().top-68;
    $('body,html').animate({scrollTop: smPos}, 500);
    return false;
});

/* ドロワー */
$(".sp-menu__btn").click(function (e) {
	e.preventDefault();
	$(this).toggleClass('_is-open');
	$(".sp-menu__nav").toggleClass('_panel-active');
	return false;
});
  
$(".sp-menu__nav a").click(function () {
	$(".sp-menu__btn").removeClass('_is-open');
	$(".sp-menu__nav").removeClass('_panel-active');
	return;
});
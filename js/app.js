var iWindow;
var scrollHeight;

function fnWindow(){
	iWindow = $(window).height();
	scrollHeight = $(window).scrollTop();



	// var main1 = $('.main1');
	// ani(main1.find('.box1').find('.pull-left'), 'animated fadeInLeft');
	// ani(main1.find('.box1').find('.pull-right'), 'animated fadeInRight');
	// ani(main1.find('.box2').find('.pull-left'), 'animated fadeInLeft');
	// ani(main1.find('.box2').find('.pull-right'), 'animated fadeInRight');
	// ani(main1.find('.box3').find('.pull-left'), 'animated fadeInLeft');
	// ani(main1.find('.box3').find('.pull-right'), 'animated fadeInRight');
	// ani(main1.find('.box4').find('.pull-left'), 'animated fadeInLeft');
	// ani(main1.find('.box4').find('.pull-right'), 'animated fadeInRight');

	// var main2 = $('.main2');
	// ani(main2.find('.tit'), 'animated bounceInUp');
	// ani(main2.find('.box'), 'animated fadeInUp');

	// var main3 = $('.main3');
	// ani(main3, 'animated bounceInUp');

	// var main4 = $('.main4');
	// ani(main4, 'animated fadeInUp');

	// var main5 = $('.main5');
	// ani(main5, 'animated bounceInUp');
}

function ani(that, tClass, t){
	var time = 0;
	if (t) {
		time = t
	}
	if (iWindow + scrollHeight >= that.offset().top) {
		setTimeout(function(){
			that.css({opacity: 1}).addClass(tClass);
		}, time)
	};
}

function sAni(dom, aniClass, t){
	var time = 0;
	if (t) {
		time = t
	}
	setTimeout(function(){
		$(dom).css({'opacity': 0, 'display': 'block'}).addClass('animated ' + aniClass)
	}, time)
}

function hrefTo(that){
	// console.log('000')
	// if ($(that).attr('href')) {
	// 	window.location.href = $(that).attr('href')
	// }
	if ($(that).attr('to')) {
		swiper.slideTo($(that).attr('to'), 300);
	}
}
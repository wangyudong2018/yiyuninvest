$(function() {
	var mainWit = $(window).width();
	var mainHit = $(window).height();
	var mainTop = $('.mainTop'),
		scrollBar = $('.scrollBar .banner ul li .imgTimes'),
		indexBack = $('.index-back-box');

		// comnum = $('.hejun-collection .slider-waper'),
		// artsrs = $('.hejun-collection .slider-waper ul li>article');
	mainTop.width(mainWit).height(mainHit);

	scrollBar.width(mainWit);
	// var comw = comnum.width();
	// var comH = comnum.height();

	if(mainWit * 1080 >= mainHit * 1920) {
		scrollBar.css({
			'background-size': '100% auto'
		})
	} else {
		scrollBar.css({
			'background-size': 'auto 100%'
		})
	};

});
$(function() {
	var clickl = $('.index-back-box .sub-arrows i.prev'),
		clickr = $('.index-back-box .sub-arrows i.next'),
		slide = $('.scrollBar .banner ul li'),
		leng = slide.length - 1;
	var slideI = 0;

	function Animate() {
		slide.eq(slideI).addClass('visb').siblings().removeClass('visb')
	}
	clickl.click(function() {
		slideI--;
		slideI = slideI < 0 ? leng : slideI;
		Animate()
	});
	clickr.click(function() {
		slideI++;
		slideI = slideI > leng ? 0 : slideI;
		Animate()
	});
	setInterval(function() {
		clickr.click()
	}, 6000)
});

$(function() {
	var slideWrap = $('.slide-wrap li'),
		slideLines = $('.slide-line i');
	var _banner = slideWrap.length;
	var _banner_i = 0;
	slideWrap.eq(0).show().siblings('li').hide();

	function set() {
		_banner_i++;
		_banner_i = _banner_i == _banner ? 0 : _banner_i;
		slideWrap.eq(_banner_i).stop().fadeIn(500).siblings('li').fadeOut(500);
		slideLines.eq(_banner_i).eq(0).addClass('on').siblings('i').removeClass('on')
	}
	slideLines.click(function() {
		$('.slide-wrap ul').stop();
		this_ = $(this).index();
		_banner_i = this_;
		slideWrap.eq(_banner_i).stop().fadeIn(500).siblings('li').fadeOut(500);
		slideLines.eq(_banner_i).eq(0).addClass('on').siblings('i').removeClass('on')
	});
	sets = setInterval(set, 6000);
	$('.slide-wrap').mouseover(function() {
		clearInterval(sets)
	});
	$('.slide-wrap').mouseout(function() {
		sets = setInterval(set, 6000)
	})
});

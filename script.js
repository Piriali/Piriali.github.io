addColor();

//responsive menu function 
$('.toggle').on('click', function () {
	$(this).closest('.header-top').toggleClass('toggle-open');
	$('header').toggleClass('header-open');
	$('.open-nav').fadeToggle(1000);
});

//scroll buttons function 
var $btnDown = $('.scroll-down');
$btnDown.on("click", function () {
	$("html,body").animate({scrollTop: $(".portfolio").offset().top}, 1000);
});
var $btnTop = $('.scroll-top');
$(window).on("scroll", function () {
	if ($(window).scrollTop() >= 20){
		$btnTop.fadeIn();
	}else{
		$btnTop.fadeOut();
	}
});
$btnTop.on("click", function () {
	$("html,body").animate({scrollTop:0}, 1000);
});




//adding differents color over the portfolio item
function addColor() {
	var color = [	['rgba(52, 115, 21,0.8)'],
					['rgba(165, 34, 121,0.8)'],
					['rgba(255, 160, 0,0.8)'],
					['rgba(255, 54, 60,0.8)'],
					['rgba(0, 107, 146,0.8)'],
					['rgba(200, 81, 50,0.8)']
				];
	var i;
	var j=0;
	var opacity = document.getElementsByClassName('portfolio-overlay');
	for(i=0; i<opacity.length;i++){
		opacity[i].style.backgroundColor = color[j];
		j++;
		if(j>=6){
			j=0;
		}
	}
}


// //function of  skill bar animation  
/*
$(window).on('scroll' , function(){
    scroll_pos = $(window).scrollTop() + $(window).height();
    element_pos = $('.skillbar-container').offset().top + $('.skillbar-container').height() ;
    if (scroll_pos > element_pos) {

	 };
})
*/


$('.skillbar').each(function () {
	$(this).find('.skillbar-bar').animate(
	{width:$(this).attr('data-percent')}, 2000)
});


$('.count').each(function () {
	$(this).prop('Counter',0).animate(
	{Counter:$(this).text()},
	{duration: 2000,
	 easing: 'swing',
	 step:function(now){$(this).text(Math.ceil(now));}
	});
});
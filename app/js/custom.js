$(window).on('load', function () {
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	} else{
		$('body').addClass('web');
	};
	$('body').removeClass('loaded'); 
});
/* viewport width */
function viewport(){
	var e = window, 
		a = 'inner';
	if ( !( 'innerWidth' in window ) )
	{
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
};
/* viewport width */
$(function(){
	/* placeholder*/	   
	$('input, textarea').each(function(){
 		var placeholder = $(this).attr('placeholder');
 		$(this).focus(function(){ $(this).attr('placeholder', '');});
 		$(this).focusout(function(){			 
 			$(this).attr('placeholder', placeholder);  			
 		});
 	});
	/* placeholder*/

	$('.button-nav').click(function(){
		$(this).toggleClass('active'), 
		$('.main-nav-list').slideToggle(); 
		return false;
	});
	
	/* components */
	$('.close,.divide').click(function(e){
		e.preventDefault();
		$('.mobile').slideToggle();
	});

	 
	$("#menu").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});
	$("#navigation").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
		$('.mobile').slideUp();
	});
	
	if($('.js-select-styler').length){
		$('.js-select-styler').styler();
	}

});

jQuery('#js-sliderRangeTwo').range2DSlider({
	grid:false,
	gridStep:[40,40],
	height:15,
	className:'xdsoft_custom',
	style:'margin-top:50px;',
	showLegend:[1.1],
	template:'horizontal',
  	showRanges:[[0,1]],
  	onlyGridPoint:true,
  	round:true,
   	value:[[1,0],[5,0]],
	axis:[[0,1,2,3],[1,2,4]],
	tooltip:['bottom','left'],
	alwShowTooltip:[true],
	allowAxisMove:['x'],
  }).range2DSlider('value',[[1,100]]);

var handler = function(){
	
	var height_footer = $('footer').height();	
	var height_header = $('header').height();		
	//$('.content').css({'padding-bottom':height_footer+40, 'padding-top':height_header+40});
	
	
	var viewport_wid = viewport().width;
	var viewport_height = viewport().height;
	
	if (viewport_wid <= 991) {
		
	}
	
}
$(window).bind('load', handler);
$(window).bind('resize', handler);
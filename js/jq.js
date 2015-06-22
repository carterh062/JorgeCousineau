$(document).ready(function(){
	$(".land").hover(function(){
		var num = $(".land").index($(this));
		var h1s = document.getElementsByTagName('h1');
		h1s[num].style.color = 'red';
	});
	$(".land").mouseleave(function(){
		var num = $(".land").index($(this));
		var h1s = document.getElementsByTagName('h1');
		h1s[num].style.color = 'white';
	});
})
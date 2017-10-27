var sideToggle = document.getElementById('side-toggle')
	sideToggle.addEventListener('click', function (e){
		e.preventDefault();
		var sideMenu = document.querySelector('.side-menu');
		sideMenu.classList.toggle('active');
	});

	
	$(document).ready(function(){
    $(".fix-menu").removeClass("default");
    $(window).scroll(function(){
        if($(this).scrollTop() > 400){
            $(".fix-menu").addClass("default").fadein('fast');
        }
        else{
            $(".fix-menu").removeClass("default").fadein('fast')
        }
    })
})

$(".menu a").mPageScroll2id({
    offset : 50
});
$(".slide-container a").mPageScroll2id({
    offset : 40
});


$('.totop').tottTop({
    duration: 400,
    scrollTop: 400,
    scrtollTopBtnDuration: 400
});

window.onload = function() {
  Particles.init({
    selector: '.background'
  });
}; 


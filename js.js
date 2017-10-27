var sideToggle = document.getElementById('side-toggle')
	sideToggle.addEventListener('click', function (e){
		e.preventDefault();
		var sideMenu = document.querySelector('.side-menu');
		sideMenu.classList.toggle('active');
	});

	
	$(document).ready(function(){
    $(".fix-menu").removeClass("default");
    $(window).scroll(function(){
        if($(this).scrollTop() > 380){
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
    offset : 10
});


$('.totop').tottTop({
    duration: 400,
    scrollTop: 400,
    scrtollTopBtnDuration: 400
});



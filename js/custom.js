
	/************** Scroll to content *********************/
	function scrollToTarget(targetElementId){
		setTimeout(function() {
	        $('html,body').animate({
	            scrollTop: $(targetElementId).offset().top
	        }, 800);
		}, 500);
    }


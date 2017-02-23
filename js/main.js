(function (window, $) {
	'use strict';

	// Cache document for fast access.
	var document = window.document;


	/************** Show Home page after a seconds if not requested otherwise by passing url aprameters *********************/
	setTimeout(function() {
		var GET = {};
		var query = window.location.search.substring(1).split("&");
			for (var i = 0, max = query.length; i < max; i++){
			    if (query[i] === "") // check for trailing & with no param
			        continue;
			    var param = query[i].split("=");
			    GET[decodeURIComponent(param[0])] = decodeURIComponent(param[1] || "");
			}
		
		if(GET.target != null){
			$("#menu-"+GET.target).addClass("animated fadeInDown").show();
			console.log(GET.target);
		}else{
			$("#menu-0").addClass("animated fadeInDown").show();
		}

		/* to rip benefits: https://guda.github.io/eduko/?target=2 */
	}, 1000);

	/************** Toggle Menu *********************/
	$('a.toggle-menu').click(function(){
        $(".menu").slideToggle(400);
		return false;
    });


    /************** Open Different Pages *********************/
	$(".menu a").click(function(){
		var id =  $(this).attr('class');
		id = id.split('-');
		$("#menu-container .content").hide();
		$("#menu-container #menu-"+id[1]).addClass("animated fadeInDown").show();
		return false;
	});

	$(".menu a.homebutton").click(function(){
		$(".menu").slideUp();
	});


	$(window).resize(function(){
		if ($(window).width() <= 769){	
			$(".menu a").click(function(){
				$(".menu").hide();
				return false;
			});
		}	
	});

	/*
	var dt = window.atob('IC0gPGEgcmVsPSJub2ZvbGxvdyIgaHJlZj0iaHR0cDovL3d3dy50ZW1wbGF0ZW1vLmNvbS9wcmV2aWV3L3RlbXBsYXRlbW9fNDEwX2NpcmNsZSI+Q2lyY2xlPC9hPiBieSA8YSByZWw9Im5vZm9sbG93IiBocmVmPSJodHRwOi8vd3d3LnRlbXBsYXRlbW8uY29tIj5GcmVlIFRlbXBsYXRlczwvYT4='); 
	var y = document.getElementById('footer-text');
	y.innerHTML += dt;
	*/

	/************** Tabs *********************/
	$('ul.tabs').each(function(){
		// For each set of tabs, we want to keep track of
		// which tab is active and it's associated content
		var $active, $content, $links = $(this).find('a');

		// If the location.hash matches one of the links, use that as the active tab.
		// If no match is found, use the first link as the initial active tab.
		$active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
		$active.addClass('active');

		$content = $($active[0].hash);

		// Hide the remaining content
		$links.not($active).each(function () {
		$(this.hash).hide();  
		});

		// Bind the click event handler
		$(this).on('click', 'a', function(e){
		// Make the old tab inactive.
		$active.removeClass('active');
		$content.hide();

		// Update the variables with the new link and content
		$active = $(this);
		$content = $(this.hash);

		// Make the tab active.
		$active.addClass('active');
		$content.slideToggle();

		// Prevent the anchor's default click action
		e.preventDefault();
		});
	});


	/************** LightBox *********************/
	$(function(){
		$('[data-rel="lightbox"]').lightbox();
	});

	/***************************** New Application for External Courses *****************************/
	function openNewApplicationForm() {
        document.write(unescape("%3Cscript src='http" +  (document.location.protocol == 'https:' ? 's' : '') + "://www.coffeecup.com/api/sdrive/forms/form.js?name=prijava-instrukcije%26slug=283822%26height=2290%26crossdomains=true%26rand=" + Math.floor( Math.random() * 1000000000 ) + "' type='text/javascript'%3E%3C/script%3E"));
    }




})(window, jQuery);


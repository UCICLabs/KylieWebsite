$(function(){
// get all of our list items
        var itemsToFilter = document.querySelectorAll("#itemsToFilter li");

        var filters = [];
        //setup click event handlers on our checkboxes
        var checkBoxes = document.querySelectorAll(".filterSection li input");
        var showAllCheckBox = document.querySelector(".filterSection li input[value=showAll]");

        for (var i = 0; i < checkBoxes.length; i++) {
            checkBoxes[i].addEventListener("click", filterItems, false);
            checkBoxes[i].checked = true;
        }

        // the event handler!
        function filterItems(e) {
            filters = [];

            // if what you clicked on isn't the "Show All" checkbox
            if (e.target.value != "showAll") {
                for (var i = 0; i < checkBoxes.length; i++) {

                    var checkBoxValue = checkBoxes[i].value;

                    if (checkBoxes[i].checked == true) {
                        filters.push(checkBoxValue);
                    }
                }
                showAllCheckBox.checked = false;
            } else {
                // what you clicked is the "Show All" checkbox
                if (showAllCheckBox.checked == true) {
                    for (var i = 0; i < checkBoxes.length; i++) {
                        var checkBoxValue = checkBoxes[i].value;
                        filters.push(checkBoxValue);

                        checkBoxes[i].checked = true;
                    }
                } else {

                    for (var i = 0; i < checkBoxes.length; i++) {
                        checkBoxes[i].checked = false;
                    }

                    filters = [];
                }
            }

            clearEverything();
            showFilteredItems();
        }

        function showFilteredItems() {
            for (var i = 0; i < itemsToFilter.length; i++) {
                var currentItem = itemsToFilter[i];
                var currentItemDataType = currentItem.getAttribute("data-type");


                for (var j = 0; j < filters.length; j++) {
                    var filter = filters[j];

                    if (currentItemDataType.indexOf(filter) != -1) {
                        removeClass(currentItem, "hideItem");
                        addClass(currentItem, "showItem");
                        break;
                    }
                }
            }
        }

        // add or remove classes to show or hide our content
        function hideOrShowItems(itemType, classToRemove, classToAdd) {
            for (var i = 0; i < itemsToFilter.length; i++) {
                var currentItem = itemsToFilter[i];
                var currentItemDataType = currentItem.getAttribute("data-type");

                if (currentItemDataType.indexOf(itemType) != -1) {
                    removeClass(currentItem, classToRemove);
                    addClass(currentItem, classToAdd);
                }
            }
        }

        function clearEverything() {
            for (var i = 0; i < itemsToFilter.length; i++) {
                removeClass(itemsToFilter[i], "showItem");
                addClass(itemsToFilter[i], "hideItem");
            }
        }

        function showEverything() {
            for (var i = 0; i < itemsToFilter.length; i++) {
                removeClass(itemsToFilter[i], "hideItem");
                addClass(itemsToFilter[i], "showItem");
            }
        }

        // responsible for making the Show All Checkbox Work
        function toggleShowOrHideAll(showAllCheckBox) {
            if (showAllCheckBox.checked == false) {
                // hide all of the items
                for (var i = 0; i < checkBoxes.length; i++) {
                    checkBoxes[i].checked = false;
                    clearEverything();
                }
            } else {
                // show all of the items
                for (var i = 0; i < checkBoxes.length; i++) {
                    checkBoxes[i].checked = true;
                    showEverything();
                }
            }
        }

        //
        // Helper functions for adding and removing class values
        //
        function addClass(element, classToAdd) {
            var currentClassValue = element.className;

            if (currentClassValue.indexOf(classToAdd) == -1) {
                if ((currentClassValue == null) || (currentClassValue === "")) {
                    element.className = classToAdd;
                } else {
                    element.className += " " + classToAdd;
                }
            }
        }

        function removeClass(element, classToRemove) {
            var currentClassValue = element.className;

            if (currentClassValue == classToRemove) {
                element.className = "";
                return;
            }

            var classValues = currentClassValue.split(" ");
            var filteredList = [];

            for (var i = 0 ; i < classValues.length; i++) {
                if (classToRemove != classValues[i]) {
                    filteredList.push(classValues[i]);
                }
            }

            element.className = filteredList.join(" ");
        }
		

	//contact form
	$('form').live('submit', function(event) {
	
		event.preventDefault();
		var email = 'kpeppler@address.com';
		var subject = $('#form-subject').val();
		var body = $('#form-message').val();
		
		window.open('mailto:' + email + '?subject=' + subject + '&body=' + body).close();
				
	});
	
	//Showing blog items
	$('#blog-items .more-info').click(function(e){
		e.preventDefault();
		var targetId = $(this).attr('href');
		$('#blog-items').hide();
		$(targetId+', #full-blog-items #blog-back').hide().removeClass('hidden').fadeIn('400', 'easeInOutCubic');
	});
	
	$('#blog-back').click(function(e){
		e.preventDefault();
		$('.blogitem-content:visible, #blog-back').hide().addClass('hidden');
		$('#blog-items').fadeIn('400', 'easeInOutCubic');
		var documentBody = (($.browser.chrome)||($.browser.safari)) ? document.body : document.documentElement;
		$(documentBody).animate({scrollTop: $('#blog').offset().top}, 1000,'easeInOutCubic');
	});
	
	//Blog item nav
	$('.blogitem-content .pager a').click(function(e){
		e.preventDefault();
		var targetId = $(this).attr('href');
		$('.blogitem-content:visible').hide().addClass('hidden');
		$(targetId).hide().removeClass('hidden').fadeIn('400', 'easeInOutCubic');
	});
	
	//Showing portfolio items
	$('#portfolio-items .more-info').click(function(e){
		e.preventDefault();
		var targetId = $(this).attr('href');
		$('#portfolio-items, #portfolio-filters').hide();
		$(targetId+', #portfolio-back').hide().removeClass('hidden').fadeIn('400', 'easeInOutCubic');
	});
	
	$('#portfolio-back').click(function(e){
		e.preventDefault();
		$('.portfolioitem-content:visible, #portfolio-back').hide().addClass('hidden');
		$('#portfolio-items, #portfolio-filters').fadeIn('400', 'easeInOutCubic');
		var documentBody = (($.browser.chrome)||($.browser.safari)) ? document.body : document.documentElement;
		$(documentBody).animate({scrollTop: $('#portfolio').offset().top}, 1000,'easeInOutCubic');
	});
	
	//portfolio item nav
	$('.portfolioitem-content .pager a').click(function(e){
		e.preventDefault();
		var targetId = $(this).attr('href');
		$('.portfolioitem-content:visible').hide().addClass('hidden');
		$(targetId).hide().removeClass('hidden').fadeIn('400', 'easeInOutCubic');
	});


	
	//Isotop related actions
	var $containerblog = $('#blog-items');
	// initialize isotope
	$containerblog.imagesLoaded( function(){
		$containerblog.isotope({
	 		itemSelector : '.blogitem',
	 		layoutMode : 'fitRows'
		});
		
	});

	var $container = $('#portfolio-items');
	// initialize isotope
	$container.imagesLoaded( function(){
		$container.isotope({
	 		itemSelector : '.portfolioitem',
	 		layoutMode : 'fitRows'
		});
	});
	
	// filter items when filter link is clicked
	$('#portfolio-filters a').click(function(){
		$('#portfolio-filters a').parent('li').removeClass('active');
	  	var selector = $(this).attr('data-filter');
	  	$container.isotope({ filter: selector });
	  	$(this).parent('li').addClass('active');
	  	return false;
	});
		
	
	//Timeline
	$('.timeline-item-trigger span').click(function(){
		if($(this).hasClass('circle_plus')){$(this).removeClass('circle_plus').addClass('circle_minus');}
		else{$(this).removeClass('circle_minus').addClass('circle_plus');}
	});
	
	$('.timeline-item-title').click(function(){
		$trigger = $(this).parent().parent().find('.timeline-item-trigger span');
		if($trigger.hasClass('circle_plus')){$trigger.removeClass('circle_plus').addClass('circle_minus');}
		else{$trigger.removeClass('circle_minus').addClass('circle_plus');}
	});
	

	//Scroll
	// top of page (action)
	$('.scroller').click(function(e) {
		e.preventDefault();
		var targetScroll = $(this).attr('href');
		var documentBody = (($.browser.chrome)||($.browser.safari)) ? document.body : document.documentElement;
	    $(documentBody).stop().animate({scrollTop: $(targetScroll).offset().top}, 1000,'easeInOutCubic');
	});
	
	//Sidebar height
	function sidebarHeight(){
		var height = $('#main-content').height();
		$('#sidebar .sidebar-nav').height(height);
	}
	sidebarHeight();
	
	$('#main-content').resize(function() {
		sidebarHeight();
	});
	
	
	//blogitem hover
	$(document).on("mouseenter", '.blogitem, .portfolioitem', function(){
		$('.blogitem-hoverinfo, .portfolioitem-hoverinfo', this).stop(true, true).fadeIn('200', 'easeInOutCubic');
	});
	
	$(document).on("mouseleave", '.blogitem, .portfolioitem', function(){
		$('.blogitem-hoverinfo, .portfolioitem-hoverinfo', this).stop(true, true).fadeOut('200', 'easeInOutCubic');
	});
	

	//viewport listener : load script regarding viewport height
	viewportWidth = $(window).width();
	if(viewportWidth >= 768){viewPortContext = "desktop";}else{viewPortContext = "mobile";}
	
	function conditionalScripts(viewPortContext) {
	
		newViewportWidth = $(window).width();
		if(newViewportWidth >= 768){newViewPortContext = "desktop";}else{newViewPortContext = "mobile";}
		
		if(viewPortContext != newViewPortContext){
		
			if(newViewPortContext == 'desktop'){ 	//scripts for desktop only
				
				//Add Tooltips
				$('.tips').tooltip();
				$('.lightbox').unbind("click").fancybox();
				
			}else{ 									//scripts for mobile only
				
				//Remove Tooltips
				$('.tips').tooltip('destroy');
				$('.lightbox').unbind("click").photoSwipe();

			}
		}
		
		viewPortContext = newViewPortContext;
	}
	conditionalScripts(); //first execution
	
	$(window).resize(function() { //execution on window resizing
		conditionalScripts();
	});

	
});


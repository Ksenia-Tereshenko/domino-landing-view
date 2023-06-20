$(document).ready(function () {

    let navRightActive = "nav-right__item_active";

    // right navigation on home page

    let rightNavItem = $(".nav-right__item");

    rightNavItem.click(function(e) {

      let $this = $(this),
          sectionScroll = $this.attr('href'),
          sectionService = $(sectionScroll),
          startScroll,
          scrollTop,
          rightNavItemActive = $("." + navRightActive),
          indexStart = rightNavItemActive.index(),
          indexEnd = $this.index(),
          indexDif = Math.abs(indexEnd - indexStart) / 2;

      e.preventDefault();

      if (!startScroll) {

          startScroll = true;

          if (!$this.hasClass(navRightActive)) {

              scrollTop = sectionService.offset().top;              

              $('html, body').animate({
                  scrollTop: scrollTop
              }, 800);

          }

          setTimeout(function () {
              startScroll = false;
          }, 1000);

          return false;
      }    

  });


  // on window scroll home page change right navigation active item

  let $elementCase1 = $('#main-screen'),
  $elementCase2 = $('#possibilities-screen'),
  $elementCase3 = $('#advantages-screen'),
  $elementCase4 = $('#how-work-screen'),
  $elementCase5 = $('#our-plans-screen'),
  $elementCase6 = $('#partnership-screen'),
  $elementCase7 = $('#reviews-screen'),
  $menuItem1 = $(".nav-right__item:first-child"),
  $menuItem2 = $(".nav-right__item:nth-child(2)"),
  $menuItem3 = $(".nav-right__item:nth-child(3)"),
  $menuItem4 = $(".nav-right__item:nth-child(4)"),
  $menuItem5 = $(".nav-right__item:nth-child(5)"),
  $menuItem6 = $(".nav-right__item:nth-child(6)"),
  $menuItem7 = $(".nav-right__item:nth-child(7)"),
  $allMenuItems = $(".nav-right__item");

  let previousScroll = 0,
      count = 0;

  $(window).scroll(function() {

    let scroll = $(window).scrollTop() + $(window).height();

    let offsetTop2 = $elementCase2.offset().top + $elementCase2.outerHeight()/1.8,
        offsetTop3 = $elementCase3.offset().top + $elementCase3.outerHeight()/1.8,
        offsetTop4 = $elementCase4.offset().top + $elementCase4.outerHeight()/1.8,
        offsetTop5 = $elementCase5.offset().top + $elementCase5.outerHeight()/1.8,
        offsetTop6 = $elementCase6.offset().top + $elementCase6.outerHeight()/1.8,
        offsetTop7 = $elementCase7.offset().top + $elementCase7.outerHeight()/1.8;

    if (scroll > 1 && scroll < offsetTop2) {

        if (!$menuItem1.hasClass(navRightActive)) {
            $allMenuItems.removeClass(navRightActive);
            $menuItem1.addClass(navRightActive);
        }

    } else if (scroll > offsetTop2 && scroll < offsetTop3) {

        if (!$menuItem2.hasClass(navRightActive)) {
            $allMenuItems.removeClass(navRightActive);
            $menuItem2.addClass(navRightActive);
        }

    } else if (scroll > offsetTop3 && scroll < offsetTop4) {

        if (!$menuItem3.hasClass(navRightActive)) {
            $allMenuItems.removeClass(navRightActive);
            $menuItem3.addClass(navRightActive);
        }

    } else if (scroll > offsetTop4 && scroll < offsetTop5) {

        if (!$menuItem4.hasClass(navRightActive)) {
            $allMenuItems.removeClass(navRightActive);
            $menuItem4.addClass(navRightActive);
        }

    } else if (scroll > offsetTop5 && scroll < offsetTop6) {

      if (!$menuItem5.hasClass(navRightActive)) {
          $allMenuItems.removeClass(navRightActive);
          $menuItem5.addClass(navRightActive);
      }

    } else if (scroll > offsetTop6 && scroll < offsetTop7) {

      if (!$menuItem6.hasClass(navRightActive)) {
          $allMenuItems.removeClass(navRightActive);
          $menuItem6.addClass(navRightActive);
      }

    } else if (scroll > offsetTop7) {

    if (!$menuItem7.hasClass(navRightActive)) {
        $allMenuItems.removeClass(navRightActive);
        $menuItem7.addClass(navRightActive);
    }

  }

  let $gear = $(".how-work__img_gear");

  let currentScroll = $(this).scrollTop();
  if(currentScroll > previousScroll) {
    // scroll bottom
    counts = count - 1;
  } else {
    // scroll top
    counts = count + 1;
  }

  $gear.css({
    'transform': 'rotate(' + counts*2 + 'deg)'
  })

  previousScroll = currentScroll;
  count = counts;


});

  // posibility slider on home page

  let sliderLine = $(".possibilities__dots_line"),
    quantitySlides = $(".possibilities__slide").length,
    sliderLineInitWidth = 100 / quantitySlides;
  let posibilityNextButton = $(".possibilities__buttons .slick-next.slick-arrow"),
      posibilityPrevButton = $(".possibilities__buttons .slick-prev.slick-arrow");

  sliderLine.width(sliderLineInitWidth + "%");

  $('.possibilities__slider').on('init', function( slick ){
    $('.possibilities__slide').addClass("show");
    $(".possibilities__slide_animation-text").css({"transform" : "translateX(-120%)"});
    $(".possibilities__slide_img-block").css({"transform" : "translateX(-120%)"});
    $(".possibilities__slide:first-child .possibilities__slide_img-block").css({"transform" : "translateX(0)"});
    $(".possibilities__slide:first-child .possibilities__slide_animation-text").css({"transform" : "translateX(0)"});
    posibilityPrevButton.addClass("slick-disabled").css({"pointer-events":"none"});
  });

  $(".possibilities__slider").slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    fade: false,
    speed: 0,
    appendDots: ".possibilities__dots",
  });

      posibilityNextButton.click(function(e) { 
        let nextSlideTest = $(".slick-current.slick-active .possibilities__slide_animation-text"),
            nextSlideImg = $(".slick-current.slick-active .possibilities__slide_img-block");
        nextSlideTest.css({"transform" : "translateX(120%)"}); // right
        nextSlideImg.css({"transform" : "translateX(120%)"});
          setTimeout(function() {
            $(".possibilities__slider").slick('slickNext');
          }, 400);       
       });

       posibilityPrevButton.click(function(e) { 
        let prevSlideTest = $(".slick-current.slick-active .possibilities__slide_animation-text"),
            prevSlideImg = $(".slick-current.slick-active .possibilities__slide_img-block");

          prevSlideTest.css({"transform" : "translateX(-120%)"}); // left
          prevSlideImg.css({"transform" : "translateX(-120%)"});

          setTimeout(function() {
            $(".possibilities__slider").slick('slickPrev');
          }, 400);           
            
       });

  $(".possibilities__slider").on("afterChange", function (slick, currentSlide, direction) {
    let slideCurrent = currentSlide.currentSlide + 1,
        lineItem = (100 / quantitySlides) * slideCurrent;
        sliderLine.width(lineItem + "%");
        let nextSlideText = $(".slick-current.slick-active .possibilities__slide_animation-text"),
            nextSlideImg = $(".slick-current.slick-active .possibilities__slide_img-block");

    nextSlideText.css({"transform" : "translateX(0)"}); 
    nextSlideImg.css({"transform" : "translateX(0)"}); 

    if(currentSlide.currentSlide == 0) {
      posibilityPrevButton.addClass("slick-disabled").css({"pointer-events":"none"});
    } else {
      posibilityPrevButton.removeClass("slick-disabled").css({"pointer-events":"auto"});
    }

    if(currentSlide.currentSlide == currentSlide.slideCount - 1) {
      posibilityNextButton.addClass("slick-disabled").css({"pointer-events":"none"});
    } else {
      posibilityNextButton.removeClass("slick-disabled").css({"pointer-events":"auto"});
    }

  });

   // reviews slider on home page

  $('.reviews-slider').on('init', function( slick ){
    $('.review-item').addClass("show");
  });

  $(".reviews-slider").slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    appendArrows: ".review-item__arrows",
    speed: 900,
  });  

});

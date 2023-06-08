$(document).ready(function () {

  // change language button

  let langBtn = $(".header__langs_item"),
      scrollTop = false;

  langBtn.click(function() {
    let $this = $(this);
    if(!$this.hasClass("header__langs_item-active")) {
      langBtn.toggleClass("header__langs_item-active");
    }     
  });

  // scroll to top button

  let scrollTopBtn = $("#scroll-top");

  scrollTopBtn.on('click', function(){

    if(scrollTop == false) {

        scrollTop = true;

        $('body, html').animate({
            scrollTop: 0
        }, 800);

        setTimeout(function () {
            scrollTop = false;
        }, 900);

        return false;
    }

});

$(window).scroll(function(){
    let $this = $(this);
    if($this.scrollTop()>= 700){
      scrollTopBtn.addClass("visible");
    }
    if($this.scrollTop() < 700){
      scrollTopBtn.removeClass("visible");
    }
  });
});

let scrollToBtn = $(".js-btn-scroll");

scrollToBtn.click(function(e) {

      let $this = $(this),
          sectionScroll = $this.attr('data-scroll'),
          sectionTo = $(sectionScroll),
          startScroll,
          scrollTop;

      e.preventDefault();

      if (!startScroll) {

          startScroll = true;

          

              scrollTop = sectionTo.offset().top;              

              $('html, body').animate({
                  scrollTop: scrollTop
              }, 800);

    

          setTimeout(function () {
              startScroll = false;
          }, 1000);

          return false;
      }
});

//  open mobile menu 

let mobOpenIcon = $(".header__mob-menu"),
    mobOpenIconClass = "header__mob-menu_open",
    mobileMenu = $(".mobile-menu"),
    mobOpenClass = "mobile-menu_open",
    body = $("body"),
    langBtns = $(".header__langs");

mobOpenIcon.click(function(e) {
  $this = $(this);

  $this.toggleClass(mobOpenIconClass);
  mobileMenu.toggleClass(mobOpenClass);
  body.toggleClass("overflow");
  langBtns.toggleClass("hidden");
});
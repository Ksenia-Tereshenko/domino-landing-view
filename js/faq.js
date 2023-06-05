$(document).ready(function () {

  let allItemsFAQ = "faq-block__item",
      activeItemClass = "faq-block__item_active",
      clickItem =  $(".faq-block__title"),
      itemText = "faq-block__text";

  clickItem.click(function() {
    let $this = $(this),
        parentItem = $this.closest("." + allItemsFAQ),
        textBlock =  parentItem.find("." + itemText);
    if(!parentItem.hasClass(activeItemClass)) {
      $("." + activeItemClass).find("." + itemText).slideUp(500);
      $("." + allItemsFAQ).removeClass(activeItemClass);      
      parentItem.addClass(activeItemClass);      
      parentItem.find("." + itemText).slideDown(500);
    } else {
      parentItem.removeClass(activeItemClass);
      textBlock.slideUp(500);
    }
  });


  let openFaqFormBtn = $(".js-open-faq-form"),
      overlay = $(".overlay"),
      formFaq = $(".popup-form"),
      closeForm = $(".js-close-form");

  openFaqFormBtn.click(function() {
    overlay.addClass("overlay_show");
    formFaq.addClass("popup-form_show");
  });

  closeForm.click(function() {
    overlay.removeClass("overlay_show");
    formFaq.removeClass("popup-form_show");
  });

    // left navigation on faq page

    let rightNavItem = $(".faq-page__topic-item");
    let navRightActive = "faq-page__topic-item_active";

    rightNavItem.click(function(e) {

      let $this = $(this),
          sectionScroll = $this.attr('data-scroll'),
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

            if (sectionScroll ==="#faq-section-01") {
              $('html, body').animate({
                scrollTop: 0
            }, 800);

            } else {
              scrollTop = sectionService.offset().top;              

              $('html, body').animate({
                  scrollTop: scrollTop
              }, 800);
            }              

          }

          setTimeout(function () {
              startScroll = false;
          }, 1000);

          return false;
      }

  });

});

// on window scroll home page change right navigation active item

let $elementCase1 = $('#faq-section-01'),
$elementCase2 = $('#faq-section-02'),
$elementCase3 = $('#faq-section-03'),
$elementCase4 = $('#faq-section-04'),
$menuItem1 = $(".faq-page__topic-item:first-child"),
$menuItem2 = $(".faq-page__topic-item:nth-child(2)"),
$menuItem3 = $(".faq-page__topic-item:nth-child(3)"),
$menuItem4 = $(".faq-page__topic-item:nth-child(4)"),
$allMenuItems = $(".faq-page__topic-item");
let navRightActive = "faq-page__topic-item_active";

$(window).scroll(function() {

  let scroll = $(window).scrollTop() + $(window).height();

  let offsetTop2 = $elementCase2.offset().top + $elementCase2.outerHeight()/0.9,
      offsetTop3 = $elementCase3.offset().top + $elementCase3.outerHeight()/0.9,
      offsetTop4 = $elementCase4.offset().top + $elementCase4.outerHeight()/1.5;

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

  } else if (scroll > offsetTop4) {
    if (!$menuItem4.hasClass(navRightActive)) {
      $allMenuItems.removeClass(navRightActive);
      $menuItem4.addClass(navRightActive);
    }
  }

});

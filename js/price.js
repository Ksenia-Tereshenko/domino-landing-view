$(document).ready(function () {

  let tabPriceBtn = $(".price-page__tabs-block_discount_mobile-item"),
      tabPriceBtnActive = "price-page__tabs-block_discount_mobile-item_active";

  tabPriceBtn.click(function() {
  let $this = $(this),
      activeTab =  $this.attr("data-tab"),
      tabBlock = $(".price-page__tab_item"),
      tabBlockActive = "price-page__tab_item_active";

      console.log(activeTab);
  if(!$this.hasClass(tabPriceBtnActive)) {
    $this.closest(".price-page__tabs-block_discount_mobile-tabs").find("." + tabPriceBtnActive).removeClass(tabPriceBtnActive);
    $this.addClass(tabPriceBtnActive);
    tabBlock.removeClass(tabBlockActive);
    $("#" + activeTab).addClass(tabBlockActive);
  }     
  });
});

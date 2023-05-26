$(document).ready(function () {

  let tabBtn = $(".blog-page__tab"),
    tabBtnActive = "blog-page__tab_active";

  tabBtn.click(function() {
  let $this = $(this),
      activeTab =  $this.attr("data-tab"),
      tabBlock = $(".blog-page__tab-block"),
      tabBlockActive = "blog-page__tab-block_active";

      console.log(activeTab);
  if(!$this.hasClass(tabBtnActive)) {
    tabBtn.removeClass(tabBtnActive);
    $this.addClass(tabBtnActive);
    tabBlock.removeClass(tabBlockActive);
    $("#" + activeTab).addClass(tabBlockActive);
  }     
  });
});

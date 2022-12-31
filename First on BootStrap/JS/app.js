$(function () {
  let nav_home = $("#nav-home");
  let nav_about = $("#nav-about");
  let nav_team = $("#nav-team");
  let nav_services = $("#nav-services");
  let nav_info = $("#nav-info");
  let scrollPos = $(window).scrollTop();
  let collapse = $("#navbarSupportedContent");

  $(window).on("scroll load resize", function () {
    scrollPos = $(this).scrollTop();
    console.log(scrollPos);

    if (scrollPos < 537) {
      nav_home.addClass("active");
      nav_about.removeClass("active");
      nav_team.removeClass("active");
      nav_services.removeClass("active");
      nav_info.removeClass("active");
    }
    if (scrollPos > 537 && scrollPos < 2100) {
      nav_home.removeClass("active");
      nav_about.addClass("active");
      nav_team.removeClass("active");
      nav_services.removeClass("active");
      nav_info.removeClass("active");
    }
    if (scrollPos > 2100 && scrollPos < 3100) {
      nav_home.removeClass("active");
      nav_about.removeClass("active");
      nav_team.addClass("active");
      nav_services.removeClass("active");
      nav_info.removeClass("active");
    }
    if (scrollPos > 3100 && scrollPos < 3900) {
      nav_home.removeClass("active");
      nav_about.removeClass("active");
      nav_team.removeClass("active");
      nav_services.addClass("active");
      nav_info.removeClass("active");
    }
    if (scrollPos > 3900 && scrollPos < 4600) {
      nav_home.removeClass("active");
      nav_about.removeClass("active");
      nav_team.removeClass("active");
      nav_services.removeClass("active");
      nav_info.addClass("active");
    }
    if (scrollPos > 4600) {
      nav_home.removeClass("active");
      nav_about.removeClass("active");
      nav_team.removeClass("active");
      nav_services.removeClass("active");
      nav_info.removeClass("active");
    }
  });

  $(document).on("click", () => {
    var nav_link = $(".nava");
    for (let x = 0; x <= nav_link.lenght; x++) {
      collapse.removeClass("show");
    }
  });
});

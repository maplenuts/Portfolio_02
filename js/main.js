
$(document).ready(function () {

   // 슬라이드
   const stories = new Swiper(".stories", {
      direction: "horizontal",
      slidesPerView: "auto",
      freeMode: true,
      spaceBetween: 20,
      scrollbar: {
         el: ".swiper-scrollbar",
      },
      mousewheel: true,
   });

   const news_list = new Swiper(".news_list", {
      direction: "horizontal",
      slidesPerView: "auto",
      freeMode: true,
      spaceBetween: 20,
      scrollbar: {
         el: ".swiper-scrollbar",
      },
      mousewheel: true,
   });

   // depth2
   let mainMenu = $(".gnb>li");
   $(".depth2,.depth2_bg").hide();

   mainMenu.mouseenter(function () {
      let subMenu = $(".depth2");
      subMenu.stop().fadeIn();
      $("#header").addClass("active");
      $(".depth2_bg").stop().fadeIn();
   });
   mainMenu.mouseleave(function () {
      let subMenu = $(".depth2");
      subMenu.stop().fadeOut();
      $("#header").removeClass("active");
      $(".depth2_bg").stop().fadeOut();
   });

   // search 영역
   $(".search").hide();
   $(".sch").click(function () {
      $(".search").fadeIn();
      $("#fp-nav").fadeOut();
   })
   $(".sch_close").click(function () {
      $(".search").fadeOut();
      $("#fp-nav").fadeIn();
   })

   // sitemap 영역
   $(".map_wrap").hide();
   $(".map_open").click(function () {
      $(".map_wrap").fadeIn();
      $("#fp-nav").fadeOut();
   })
   $(".map_close").click(function () {
      $(".map_wrap").fadeOut();
      $("#fp-nav").fadeIn();
   })

   $(window.resizeBy(function () {
      if ($(this).width() <= 1400) {
         fullpage_api.destroy('all');
      } else {

      }
   }));

   $(".brd_bg li").hide();

   $(".brd_btn li").mouseenter(function () {
      let idx = $(this).index();
      $(".brd_bg li").eq(idx).fadeIn(500).siblings().hide();
   });


   // 풀페이지 깨졌을 때 1600 이하에서 헤더 고정해야함
   // $(window).resize(function () {
   //    let windowWidth = $(window).width();
   //    if (windowWidth < 1600) {
   //       $("#header").addClass("active");
   //    } else {

   //    }
   // });

   $(".map_gnb > li").click(function () {
      $(this).find(".map_depth2.close").slideDown();
      $(this).siblings().find(".map_depth2.close").slideUp();
   });



   AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:

      delay: 50, // values from 0 to 3000, with step 50ms
      duration: 1500, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations

   });


});
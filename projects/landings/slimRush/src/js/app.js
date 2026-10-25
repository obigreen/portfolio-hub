(() => {
  var $ = window.jQuery;
  var TweenLite = window.TweenLite;
  var Linear = window.Linear;
  var Power3 = window.Power3;

  var $window = $(window);
  var supportsTouch = "ontouchstart" in window || navigator.msMaxTouchPoints;

  var aboutMap = $("#About > .map");
  var tlWorld;
  var worldMoving;

  var mouseWheelEvent;
  var delta = 0;
  var isTweening = false;
  var currentSlide;
  var restScrollTop;
  var restScrollBtm;

  var mainBottle = $("body > .bottle");

  var wW = $(window).width();
  var wH = $(window).height();
  var scrollTop;

  var aboutTop = $("#About").offset().top;
  var aboutVinaigreTop = $("#AboutVinaigre").offset().top;

  var ingredientTop = $("#Ingredients").offset().top;
  var keisukeTop = $("#Keisuke").offset().top;
  var useTop = $("#UseBalsoy").offset().top;
  var statisticTop = $("#statistic").offset().top;
  
  var reviewsTop = $("#reviews").offset().top;
  var footerHeight = $("body > footer").outerHeight();

  var slideTo = function (slide) {
    var orientation = orientation;
    var target = $(slide);
    currentSlide = target;

    isTweening = true;
    TweenLite.to(window, 1.6, {
      scrollTo: { y: target.offset().top, autoKill: false },
      ease: Power2.easeInOut,
      overwrite: 5,
      onComplete: function () {
        setTimeout(function () {
          isTweening = false;
        }, 300);
      },
    });

    if ($("body").hasClass("showMenu")) {
      $("body").removeClass("showMenu");
    }
  };

  var initHeader = function () {
    $(".menu-toggle").on("click", function (e) {
      e.preventDefault();
      $("body").addClass("showMenu");
    });

    $(".menu-container .close").on("click", function (e) {
      e.preventDefault();
      $("body").removeClass("showMenu");
    });

    $(".navbar-brand").on("click", function (e) {
      e.preventDefault();
      TweenLite.to(window, 1, {
        scrollTo: { y: 0, autoKill: false },
        ease: Power3.easeInOut,
        overwrite: 5,
      });
    });

    $(".menu-container .nav-item a").on("click", function (e) {
      e.preventDefault();
      $(".menu-container .active").removeClass("active");
      $(this).addClass("active");
      var target = $(this).attr("href");
      slideTo($(target));
    });

    $(".discover a").on("click", function (e) {
      e.preventDefault();
      var target = $(this).attr("href");
      $(".discover").addClass("min");
      slideTo(target);
    });

    $("header .hashtag").on("click", function (e) {
      e.preventDefault();
      TweenLite.to(window, 1, {
        scrollTo: {
          y:
            $("body > footer").offset().top -
            wH +
            $("body > footer").outerHeight(),
          autoKill: false,
        },
        ease: Power3.easeInOut,
        overwrite: 5,
      });
    });

    $("a.btn-try").on("click", function (e) {
      e.preventDefault();
      $(this).addClass("active");
      var target = $(this).attr("href");
      slideTo($(target));
    });
  };

  var initIntro = function () {
    var tlIntroIn = new TimelineLite({
      paused: true,
      delay: 0.5,
      onComplete: () => {
        console.log("leaveIntro");
        $("body").removeClass("no-ui showIntro");
        tlIntroLeave.resume();
      },
    });
    TweenLite.set("#Intro .intro-title", { x: "-50%", y: "-50%" });
    tlIntroIn.from(aboutMap, 2, { opacity: 0, scale: 3, ease: Power3.easeOut });
    tlIntroIn.staggerFrom(
      "#Intro .intro-title .mask > *",
      1.2,
      { y: "100%", ease: Power3.easeOut },
      0.1
    );
    tlIntroIn.resume();

    var tlIntroLeave = new TimelineLite({ paused: true });
    TweenLite.set(mainBottle, { x: "-50%", y: "200%" });
    TweenLite.set("#AboutIntro .bottle", { x: "-50%", y: "200%" });
    tlIntroLeave.to($("#Intro .intro-title"), 1.4, {
      opacity: 0.15,
      ease: Power3.easeInOut,
    });
    tlIntroLeave.to(
      mainBottle,
      1,
      { x: "-50%", y: "-50%", ease: Power3.easeOut },
      0
    );
    tlIntroLeave.to(
      "#AboutIntro .bottle",
      1,
      { x: "-50%", y: "-50%", ease: Power3.easeOut },
      0
    );
    tlIntroLeave.from(
      "#AboutIntro .left .about-title",
      1.3,
      { y: 1200, ease: Power3.easeOut },
      0
    );
    tlIntroLeave.from(
      "#AboutIntro .flex img",
      1.6,
      { y: 1200, ease: Power3.easeOut },
      0
    );
    tlIntroLeave.from(
      "#AboutIntro .left .text1",
      1.3,
      { y: 1200, ease: Power3.easeOut },
      0
    );
    tlIntroLeave.from(
      "#AboutIntro .right .text1",
      1.3,
      { y: 1200, ease: Power3.easeOut },
      0
    );
    tlIntroLeave.from(
      "#AboutIntro .right .about-title",
      1.2,
      { y: 1200, ease: Power3.easeOut },
      0
    );
  };

  var initKeisuke = function () {
    var playerKeisuke;
    window.onYouTubePlayerAPIReady = function () {
      playerKeisuke = new YT.Player("keisukeVideo", {
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange,
        },
      });
    };

    function onPlayerReady(event) {
      $(window).trigger("resize");
    }

    $(window).resize(function () {
      var playerWidth = wW - 60;
      $(".iframe-wrapper").css({
        width: playerWidth,
        height: playerWidth * 0.56,
      });
    });
  };

  var initRecipes = function () {
    $(".recipes .recipe a").magnificPopup({
      type: "ajax",
      mainClass: "popupRecipe",
      tLoading: "Chargement...",
      removalDelay: 400,
      overflowY: "hidden",
    });
  };

  var updateMenu = function () {
    //switchMenuColor
    if (scrollTop > ingredientTop - 40 && !$("body").hasClass("dark")) {
      $("body").addClass("dark");
      $(".logo-dark").removeClass("dflex");
      $(".logo-dark").addClass("hide");

      $(".logo-gold").removeClass("hide");
      $(".logo-gold").addClass("dflex");
    }
    if (scrollTop < ingredientTop - 40 && $("body").hasClass("dark")) {
      $("body").removeClass("dark");
      $(".logo-dark").removeClass("hide");
      $(".logo-dark").addClass("dflex");
      $(".logo-gold").removeClass("dflex");
      $(".logo-gold").addClass("hide");
    }

    //UpdateActive
    if (scrollTop > aboutTop - 5 && scrollTop <= ingredientTop - 5) {
      $(".menu-container .nav-item a.aboutLink").addClass("active");
    } else {
      $(".menu-container .nav-item a.aboutLink").removeClass("active");
    }

    if (scrollTop > ingredientTop - 5 && scrollTop <= keisukeTop - 5) {
      $(".menu-container .nav-item a.ingredientLink").addClass("active");
    } else {
      $(".menu-container .nav-item a.ingredientLink").removeClass("active");
    }

    if (scrollTop > keisukeTop - 5 && scrollTop < useTop - 5) {
      $(".menu-container .nav-item a.keisukeLink").addClass("active");
    } else {
      $(".menu-container .nav-item a.keisukeLink").removeClass("active");
    }
  };

  var updateMap = function () {
    if (
      scrollTop <= aboutVinaigreTop - wH * 0.25 &&
      !aboutMap.hasClass("showWorld")
    ) {
      aboutMap.addClass("showWorld");
      aboutMap.removeClass("showEurope");
      aboutMap.removeClass("showJap");
      $(".discover").removeClass("min");
    }

    if (
      scrollTop > aboutVinaigreTop - wH * 0.25 &&
      scrollTop <= ingredientTop - wH * 0.5 &&
      !aboutMap.hasClass("showEurope")
    ) {
      aboutMap.removeClass("showWorld");
      aboutMap.removeClass("showJap");
      aboutMap.addClass("showEurope");
      $(".discover").addClass("min");
    }

    if (scrollTop > ingredientTop) {
      aboutMap.addClass("notransition");
      TweenLite.to(aboutMap, 0, {
        y: -(scrollTop - ingredientTop) * 0.7,
        ease: Linear.easeNone,
      });
    } else {
      aboutMap.removeClass("notransition");
      TweenLite.to(aboutMap, 0, { y: 0, ease: Linear.easeNone });
    }
  };

  var tlBottleFlowers = new TimelineLite({ paused: true });
  TweenLite.set(mainBottle.find(".flower-left"), { x: "-35%", y: "-50%" });
  TweenLite.set(mainBottle.find(".flower-right"), { x: "-36%", y: "-60%" });
  TweenLite.set(mainBottle.find(".flower-sale"), { x: "30%", y: "63%" });
  tlBottleFlowers.from(mainBottle.find(".flower-left"), 1, {
    x: "0%",
    y: "-25%",
    ease: Sine.easeOut,
  });
  tlBottleFlowers.to(
    mainBottle.find(".flower-left img"),
    1,
    { scale: 1, ease: Sine.easeOut },
    "-=1"
  );
  tlBottleFlowers.to(
    mainBottle.find(".flower-sale img"),
    1,
    { scale: 1, ease: Sine.easeOut },
    "-=1"
  );
  tlBottleFlowers.from(
    mainBottle.find(".flower-right"),
    1,
    { x: "0%", y: "-75%", ease: Sine.easeOut },
    "-=1"
  );
  tlBottleFlowers.to(
    mainBottle.find(".flower-right img"),
    1,
    { scale: 1, ease: Sine.easeOut },
    "-=1"
  );

  var updateBottle = function () {
    //apparition
    if (scrollTop > 1 && scrollTop <= ingredientTop) {
      TweenLite.to(mainBottle, 0, { x: "-50%", y: "-50%" });
    }

    if (scrollTop > ingredientTop) {
      TweenLite.to(mainBottle, 0, {
        x: "-50%",
        y: Math.round(-(scrollTop - ingredientTop)),
        ease: Linear.easeNone,
      });
      mainBottle.addClass("notransition");
    }

    //addShadow
    if (
      scrollTop < ingredientTop - wH * 0.5 &&
      !mainBottle.hasClass("shadowed")
    ) {
      mainBottle.addClass("shadowed");
    }

    if (
      scrollTop >= ingredientTop - wH * 0.5 &&
      mainBottle.hasClass("shadowed")
    ) {
      mainBottle.removeClass("shadowed");
    }

    var flowersMin = ingredientTop - wH * 0.5;
    var flowerMax = ingredientTop;
    var flowerNorm = clamp(
      normalize(window.pageYOffset, flowersMin, flowerMax),
      0,
      1
    );
    tlBottleFlowers.progress(flowerNorm);
  };

  var initParallax = function () {
    var tlIntro = TweenLite.to($("#Intro .intro-title"), 1, {
      w: "-50%",
      y: -wH * 1.2,
      ease: Linear.easeNone,
      paused: true,
    });

    var tlAboutIntro = new TimelineLite({ paused: true });
    tlAboutIntro.to("#AboutIntro .left .about-title", 1, {
      y: 55,
      ease: Sine.easeOut,
    });
    tlAboutIntro.to(
      "#AboutIntro .left .about-title .visuel img",
      1,
      { y: 50, ease: Sine.easeOut },
      "-=1"
    );
    tlAboutIntro.to(
      "#AboutIntro .left .about-title .jap",
      1,
      { y: -50, ease: Sine.easeOut },
      "-=1"
    );
    tlAboutIntro.to(
      "#AboutIntro .left .about-title .ingredient",
      1,
      { y: -40, ease: Sine.easeOut },
      "-=1"
    );
    tlAboutIntro.to(
      "#AboutIntro .left .about-title .from",
      1,
      { y: -30, ease: Sine.easeOut },
      "-=1"
    );
    tlAboutIntro.to(
      "#AboutIntro .right .about-title",
      1,
      { y: 205, ease: Sine.easeOut },
      "-=1"
    );
    tlAboutIntro.to(
      "#AboutIntro .right .about-title .visuel img",
      1,
      { y: 50, ease: Sine.easeOut },
      "-=1"
    );
    tlAboutIntro.to(
      "#AboutIntro .right .about-title .jap",
      1,
      { y: -50, ease: Sine.easeOut },
      "-=1"
    );
    tlAboutIntro.to(
      "#AboutIntro .right .about-title .ingredient",
      1,
      { y: -40, ease: Sine.easeOut },
      "-=1"
    );
    tlAboutIntro.to(
      "#AboutIntro .right .about-title .from",
      1,
      { y: -30, ease: Sine.easeOut },
      "-=1"
    );



    var tlStatis = new TimelineLite({ paused: true });

    tlStatis.from("#statistic h2", 5, { y: 850, ease: Sine.easeOut }, "-=2.2");

    tlStatis.from(".flex5 p:nth-of-type(1)", 5, { y: 850,
      duration: 3, ease: Sine.ease }, 0.5);

    tlStatis.from("#statistic img:nth-of-type(1)", 5, { y: 850, opacity: 0, ease: Sine.ease }, 1);
    
    tlStatis.from(".flex5 p:nth-of-type(2)", 5, { y: 850, ease: Sine.ease }, 1.5);

    tlStatis.from("#statistic img:nth-of-type(2)", 5, { y: 850, opacity: 0, ease: Sine.ease }, 2);
    tlStatis.from(".flex5 p:nth-of-type(3)", 2, { y: 850, ease: Sine.ease }, 2.5);

    tlStatis.from("#statistic img:nth-of-type(3)", 5, { y: 850,opacity:0, ease: Sine.ease }, 3);

  //  tlStatis.from(".flex5 p", 2, { y: 850, ease: Sine.ease }, 3);


    var tlVinaigre = new TimelineLite({ paused: true });
    var vinaigreSplitText = new SplitText(
      "#AboutVinaigre .content .about-title ",
      { type: "chars" }
    );
    var vinaigreLetters = shuffleArray(vinaigreSplitText.chars);

    tlVinaigre.from(
      "#AboutVinaigre .content",
      1,
      { y: 600, ease: Sine.easeOut },
      "-=1"
    );
    tlVinaigre.from(
      "#AboutVinaigre .content .about-title",
      1,
      { y: 250, ease: Sine.easeOut },
      "-=1"
    );
    tlVinaigre.from(
      "#AboutVinaigre .content .about-title .visuel img",
      1,
      { y: -250, ease: Sine.easeOut },
      "-=1"
    );
    tlVinaigre.from(
      "#AboutVinaigre .content .about-title .jap",
      1,
      { y: -100, ease: Sine.easeOut },
      "-=1"
    );
    tlVinaigre.from(
      "#AboutVinaigre .content .about-title .from",
      1,
      { y: 100, ease: Sine.easeOut },
      "-=1"
    );
    tlVinaigre.from(
      "#AboutVinaigre .content p",
      1,
      { y: 500, ease: Sine.easeOut },
      "-=1"
    );
    tlVinaigre.staggerFrom(
      vinaigreLetters,
      1,
      { opacity: 0, y: Math.random() * 250, ease: Sine.easeOut },
      0.05,
      "-=1.5"
    );

    var tlIngredients = new TimelineLite({ paused: true });

    tlIngredients.from(
      "#Ingredients .content",
      1,
      { y: "50%", ease: Sine.easeOut },
      0
    );

    //tlIngredients.from('#Ingredients .content h1 .min', 1, {y:-500, ease: Sine.easeOut}, 0);

    tlIngredients.from(
      "#Ingredients .content p",
      1,
      { y: 550, ease: Sine.easeOut },
      0.15
    );
    tlIngredients.from(
      "#Ingredients .recipe",
      1,
      { y: "65%", ease: Sine.easeOut },
      0
    );
    tlIngredients.from(
      "#Ingredients .recipe blockquote",
      1,
      { y: 350, ease: Sine.easeOut },
      0.25
    );
    tlIngredients.staggerFrom(
      "#Ingredients .recipe .list-ingredients > li",
      1,
      { y: 550, ease: Sine.easeOut },
      0.05,
      0.25
    );
    var tlIngredientsBG = new TimelineLite({ paused: true });
    TweenLite.set("#Ingredients .content .background", {
      backgroundPosition: "center -200px",
    });
    tlIngredientsBG.to("#Ingredients .content .background", 1, {
      backgroundPosition: "center 200px",
      ease: Linear.easeNone,
    });

    var tlkeisuke = new TimelineLite({ paused: true });
    var keisukeSplitText = new SplitText(
      "#Keisuke h1 span",
      { type: "chars" },
      { speed: "1000" }
    );

    var keisukeLetters = shuffleArray(keisukeSplitText.chars);

    tlkeisuke.from(
      "#Keisuke .content ",
      1,
      { y: 350, opacity: 0, ease: Sine.easeOut },
      0
    );
    tlkeisuke.from(
      "#Keisuke .content h1",
      1,
      { y: 550, ease: Sine.easeOut, speed: 1000 },
      0
    );
    tlkeisuke.staggerFrom(
      keisukeLetters,
      1,
      { opacity: 0, y: Math.random() * 150, ease: Sine.easeOut },
      0.05,
      0
    );
    tlkeisuke.from(
      "#Keisuke .content .col",
      2,
      { y: 650, ease: Sine.easeOut },
      "-=2.2"
    );
    tlkeisuke.from(
      "#Keisuke .content .link",
      2,
      { y: 800, ease: Sine.easeOut },
      "-=2"
    );
    tlkeisuke.from(
      "#Keisuke .content .socials",
      2,
      { y: 1000, ease: Sine.easeOut },
      "-=2"
    );

    var tlUse = new TimelineLite({ paused: true });
    TweenLite.set("#UseBalsoy .bottle", { y: 800 });
    tlUse.to("#UseBalsoy .bottle", 1, { y: "0px", ease: Sine.easeOut });
    TweenLite.ticker.addEventListener("tick", updateParallax);
    var tlUse2 = new TimelineLite({ paused: true });
    var useMin2 = useTop - wH * 0.5;
    var use2Max = useTop;
    var useNorm2 = clamp(normalize(window.pageYOffset, useMin2, use2Max), 0, 1);
    tlUse2.progress(useNorm2);
    tlUse.from("#text p", 2, { x: 650, ease: Sine.easeOut }, "-=2.2");
    tlUse.from(".flex4__left", 2, { x: -650, ease: Sine.easeOut }, "-=2.2");


    TweenLite.ticker.addEventListener("tick", updateParallax);

    function updateParallax() {
      var introMin = 0;
      var introMax = aboutVinaigreTop + wH * 0.5;
      var introNorm = clamp(
        normalize(window.pageYOffset, introMin, introMax),
        0,
        1
      );
      tlIntro.progress(introNorm);

      tlAboutIntro.progress(introNorm);

      var vinaigreMin = aboutVinaigreTop - wH * 0.5;
      var vinaigreMax = aboutVinaigreTop;
      var vinaigreNorm = clamp(
        normalize(window.pageYOffset, vinaigreMin, vinaigreMax),
        0,
        1
      );
      tlVinaigre.progress(vinaigreNorm);

      var ingredientsMin = ingredientTop - wH;
      var ingredientsMax = ingredientTop;
      var ingredientsBGMax = keisukeTop;
      var ingredientsNorm = clamp(
        normalize(window.pageYOffset, ingredientsMin, ingredientsMax),
        0,
        1
      );
      var ingredientsBGNorm = clamp(
        normalize(window.pageYOffset, ingredientsMin, ingredientsBGMax),
        0,
        1
      );
      tlIngredients.progress(ingredientsNorm);
      tlIngredientsBG.progress(ingredientsBGNorm);

      var keisukeMin = keisukeTop - wH * 0.5;
      var keisukeMax = keisukeTop;
      var keisukeNorm = clamp(
        normalize(window.pageYOffset, keisukeMin, keisukeMax),
        0,
        1
      );
      tlkeisuke.progress(keisukeNorm);

      var useMin = useTop - wH * 0.5;
      var useMax = useTop;
      var useNorm = clamp(normalize(window.pageYOffset, useMin, useMax), 0, 1);
      tlUse.progress(useNorm);
      
    var statMin = statisticTop - wH * 0.5;
    var statMax = statisticTop;

    var statNorm = clamp(normalize(window.pageYOffset, statMin, statMax), 0, 1);
    tlStatis.progress(statNorm);
   
    

    }
  };

  var updateFooter = function () {
    //preFooterScroll
    if (scrollTop > $(".app").outerHeight() - window.innerHeight) {
      $("body > header > .discover").removeClass("animated");

      TweenLite.to($("body > header > .toscoro"), 0, {
        y: -(scrollTop - $(".app").outerHeight() + wH),
        ease: Linear.easeNone,
        immediateRender: true,
        overwrite: 1,
      });
      TweenLite.to($("body > header > .discover"), 0, {
        y: -(scrollTop - $(".app").outerHeight() + wH),
        ease: Linear.easeNone,
        immediateRender: true,
        overwrite: 1,
      });
      TweenLite.to($("body > header > .hashtag"), 0, {
        y: -(scrollTop - $(".app").outerHeight() + wH),
        ease: Linear.easeNone,
        immediateRender: true,
        overwrite: 1,
      });
      $(
        "body > header > .toscoro, body > header > .discover, body > header > .hashtag"
      ).addClass("notransition");

      TweenLite.to($("footer > .inner"), 0, {
        y:
          -footerHeight * 0.5 +
          (scrollTop - ($(".app").outerHeight() - wH)) * 0.5,
        ease: Linear.easeNone,
        immediateRender: true,
        overwrite: 1,
      });
    } else {
      $("body > header > .discover").addClass("animated");
      TweenLite.to($("body > header > .toscoro"), 0, {
        y: 0,
        ease: Linear.easeNone,
        overwrite: 1,
      });
      TweenLite.to($("body > header > .discover"), 0, {
        y: 0,
        ease: Linear.easeNone,
        overwrite: 1,
      });
      TweenLite.to($("body > header > .hashtag"), 0, {
        y: 0,
        ease: Linear.easeNone,
        overwrite: 1,
      });
      TweenLite.to($("footer > .inner"), 0, {
        y: 0,
        ease: Linear.easeNone,
        overwrite: 1,
      });
    }
  };

  var render = function () {
    updateMap();

    if (wW >= 768) {
      updateBottle();
      updateFooter();
    }
  };

  window.addEventListener("scroll", scroll);
  function scroll() {
    scrollTop = window.pageYOffset;
    updateMenu();
  }

  window.addEventListener("resize", resize);
  function resize() {
    wW = $(window).width();
    wH = $(window).height();
    aboutTop = $("#AboutIntro").offset().top;
    aboutVinaigreTop = $("#AboutVinaigre").offset().top;

    ingredientTop = $("#Ingredients").offset().top;
    keisukeTop = $("#Keisuke").offset().top;
    useTop = $("#UseBalsoy").offset().top;
    statisticTop = $("#statistic").offset().top;
    reviewsTop = $("#reviews").offset().top;
    footerHeight = $("body > footer").outerHeight();
  }

  var initTouchSlideNavigation = function () {
    if (!supportsTouch) return;

    var slideSelectors = [
      "#AboutIntro",
      "#AboutVinaigre",
      "#Ingredients",
      "#Keisuke",
      "#UseBalsoy",
      "#statistic",
      "#reviews",
      ".form-box",
    ];
    var startX = 0;
    var startY = 0;
    var trackingTouch = false;

    var closestSlideIndex = function () {
      var pageTop = window.pageYOffset;
      var closestIndex = 0;
      var closestDistance = Infinity;

      slideSelectors.forEach(function (selector, index) {
        var slide = $(selector);
        if (!slide.length) return;

        var distance = Math.abs(slide.offset().top - pageTop);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      return closestIndex;
    };

    document.addEventListener(
      "touchstart",
      function (event) {
        if (
          wW >= 768 ||
          event.touches.length !== 1 ||
          $(event.target).closest(".popup.active, input, textarea, select").length
        ) {
          trackingTouch = false;
          return;
        }

        startX = event.touches[0].clientX;
        startY = event.touches[0].clientY;
        trackingTouch = true;
      },
      { passive: true }
    );

    document.addEventListener(
      "touchmove",
      function (event) {
        if (!trackingTouch || event.touches.length !== 1) return;

        var deltaX = event.touches[0].clientX - startX;
        var deltaY = event.touches[0].clientY - startY;

        if (Math.abs(deltaY) > 8 && Math.abs(deltaY) > Math.abs(deltaX)) {
          event.preventDefault();
        }
      },
      { passive: false }
    );

    document.addEventListener(
      "touchend",
      function (event) {
        if (!trackingTouch || !event.changedTouches.length) return;
        trackingTouch = false;

        var deltaX = event.changedTouches[0].clientX - startX;
        var deltaY = event.changedTouches[0].clientY - startY;

        if (
          Math.abs(deltaY) < 55 ||
          Math.abs(deltaY) <= Math.abs(deltaX) ||
          isTweening
        ) {
          return;
        }

        var currentIndex = closestSlideIndex();
        var nextIndex = deltaY < 0 ? currentIndex + 1 : currentIndex - 1;

        if (nextIndex >= 0 && nextIndex < slideSelectors.length) {
          slideTo(slideSelectors[nextIndex]);
        }
      },
      { passive: true }
    );

    document.addEventListener(
      "touchcancel",
      function () {
        trackingTouch = false;
      },
      { passive: true }
    );
  };

  var build = function () {
    FastClick.attach(document.body);

    initHeader();
    initIntro();
    initRecipes();

    if (wW >= 768) {
      initParallax();
    }

    Hamster($("#AboutIntro").get(0)).wheel((event, delta, deltaX, deltaY) => {
        event.stopPropagation();
        event.preventDefault();
        if (deltaY < 0 && !isTweening) slideTo("#AboutVinaigre");
      });

      Hamster($("#AboutVinaigre").get(0)).wheel(
        (event, delta, deltaX, deltaY) => {
          event.stopPropagation();
          event.preventDefault();
          if (deltaY < 0 && !isTweening) slideTo("#Ingredients");
          if (deltaY > 0 && !isTweening) slideTo("#AboutIntro");
        }
      );

      Hamster($("#Ingredients").get(0)).wheel(
        (event, delta, deltaX, deltaY) => {
          event.stopPropagation();
          event.preventDefault();
          if (deltaY < 0 && !isTweening) slideTo("#Keisuke");
          if (deltaY > 0 && !isTweening) slideTo("#AboutVinaigre");
        }
      );

      Hamster($("#Keisuke").get(0)).wheel((event, delta, deltaX, deltaY) => {
        event.stopPropagation();
        event.preventDefault();
        if (deltaY < 0 && !isTweening) slideTo("#UseBalsoy");
        if (deltaY > 0 && !isTweening) slideTo("#Ingredients");
      });
      Hamster($("#UseBalsoy").get(0)).wheel((event, delta, deltaX, deltaY) => {
        event.stopPropagation();
        event.preventDefault();
        if (deltaY < 0 && !isTweening) slideTo("#statistic");
        if (deltaY > 0 && !isTweening) slideTo("#Keisuke");
      });

      Hamster($("#statistic").get(0)).wheel((event, delta, deltaX, deltaY) => {
        event.stopPropagation();
        event.preventDefault();
        if (deltaY < 0 && !isTweening) slideTo("#reviews");
        if (deltaY > 0 && !isTweening) slideTo("#UseBalsoy");
      });

      Hamster($("#reviews").get(0)).wheel((event, delta, deltaX, deltaY) => {
        event.stopPropagation();
        event.preventDefault();
        if (deltaY < 0 && !isTweening) slideTo(".form-box");
        if (deltaY > 0 && !isTweening) slideTo("#statistic");
      });
      
      Hamster($(".form-box").get(0)).wheel((event, delta, deltaX, deltaY) => {
        event.stopPropagation();
        event.preventDefault();
        if (deltaY > 0 && !isTweening) slideTo("#reviews");
      });
    /*    Hamster($("#UseBalsoy").get(0)).wheel((event, delta, deltaX, deltaY) => {
        if (
          scrollTop - $("#UseBalsoy").offset().top <= 0 &&
          deltaY > 0 &&
          !isTweening
        ) {
          event.stopPropagation();
          event.preventDefault();
          slideTo("#Keisuke");
        }
      });*/

    initTouchSlideNavigation();
    $(".map").addClass("showWorld");
    //worldMoving = true;
    //tlWorld = new TimelineMax({repeat:-1});
    //tlWorld.to($('.map .world'), 120, {backgroundPosition:"-1400px center", ease:Linear.easeNone});
    //tlWorld.pause();

    /*$('section').viewportChecker({
			classToAdd: 'active',
			repeat: true,
			offset: 0,
		});*/

    TweenLite.ticker.addEventListener("tick", render);
  };

  $(".app").imagesLoaded(function () {
    build();
    $("body").removeClass("loading");
  });

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  $(window).on("load", function () {
    window.dispatchEvent(new Event("resize"));
  });
})(); // eslint-disable-line semi

function normalize(value, min, max) {
  return (value - min) / (max - min);
}

function clamp(value, min, max) {
  return value < min ? min : value > max ? max : value;
}

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

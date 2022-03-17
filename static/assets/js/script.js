jQuery(function ($) {

    'use strict';

    // Mean menu
    jQuery('.mean-menu').meanmenu({
        meanScreenWidth: "1199"
    });
    // Sticky navbar
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 100) {
            $('.navbar-area').addClass('is-sticky');
        } else {
            $('.navbar-area').removeClass('is-sticky');
        }
    });

    // Preloader
    $('body').addClass('pre-loaded');

    // Scrolltop
    $(window).on('scroll', function() {
        if( $(this).scrollTop() > 300 ) {
            $("#scrolltop").fadeIn();
        }
        else {
            $("#scrolltop").fadeOut();
        }
    });
    $("#scrolltop").on('click', function () {
        $("html").animate({
            scrollTop: 0
        }, 2000);
        return false;
    });

    // Tooltip
    $('[data-bs-toggle="tooltip"]').tooltip();

    // Service-details-carousel
    $(".service-details-carousel-item:nth-child(1)").show();
    $(".service-tab-list").click(function() {
        var tab_modal = $(this).attr("data-service-tab-item");
        $(this).addClass("service-tab-active").siblings().removeClass("service-tab-active");
        $(".service-details-carousel-item[data-service-tab-details=" +tab_modal+ "]").slideDown(600).siblings().slideUp(500);
    })

    // Choose-label-list
    $(".choose-label-list").on("click", function() {
        var self = $(this);
        var self_modal = $(this).attr("data-choose-label");
        self.addClass("active").siblings().removeClass("active");
        $(".choose-details-item[data-choose-details="+ self_modal +"]").addClass("active").siblings().removeClass("active");
    })

    // Revolution slider
    $("#rev_slider").show().revolution({
        sliderLayout:"fullwidth",
        dottedOverlay:"none",
        delay:3000,
        onHoverStop: 'off',
        navigation: {
        },
        responsiveLevels:[1240,992,778,480],
        visibilityLevels:[1240,992,778,480],
        gridwidth:[1740,1240,778,480],
        gridheight:[950,1350,1080,800],
        lazyType:"none",
        parallax: {
            type:"mouse+scroll",
            origo:"slidercenter",
            speed:3000,
            levels:[1,2,3,20,25,30,35,40,45,50,46,47,48,49,50,55],
            disable_onmobile:"on"
        },
        shadow:0,
        spinner:"spinner2",
        autoHeight:"off",
        disableProgressBar:"on",
        hideThumbsOnMobile:"off",
        hideSliderAtLimit:0,
        hideCaptionAtLimit:0,
        hideAllCaptionAtLilmit:0,
        debugMode:false,
        fallbacks: {
            simplifyAll:"off",
            disableFocusListener:false,
        }
    });

    // Navbar-dots
    $("#dot").on("click", function(e) {
        $(this).siblings(".navbar-dots-dropdown").toggleClass("show");
    })
    $('body').on('click', function (e) {
        if (!$('#dot').is(e.target) 
            && $('#dot').has(e.target).length === 0 
            && $('.show').has(e.target).length === 0
        ) {
            $('.navbar-dots-dropdown').removeClass('show');
        }
    });

    // Language-switcher
    $(".language-option").each(function() {
        var each = $(this)
        each.find(".lang-name").html(each.find(".language-dropdown-menu a:nth-child(1)").text());
        var allOptions = $(".language-dropdown-menu").children('a');
        each.find(".language-dropdown-menu").on("click", "a", function() {
             allOptions.removeClass('selected');
             $(this).addClass('selected');
             $(this).closest(".language-option").find(".lang-name").html($(this).text());
        });
    })

    // Counter
    $('.counter').counterUp();

    // Magnific-popup
    $("#video-popup").magnificPopup({
        disableOn: 0,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    // Testimonial-carousel
    $(".testimonial-carousel").owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        smartSpeed: 1500,
        autoplay: true,
        autoplayHoverPause: true
    });

    // Partner-carousel
    $(".partner-carousel").owlCarousel({
        items: 4,
        loop: true,
        nav: true,
        dots: false,
        margin: 30,
        smartSpeed: 1500,
        autoplay: true,
        autoplayHoverPause: true,
        navText: ["<i class='flaticon-left-arrow'></i>","<i class='flaticon-right-arrow'></i>"],
        responsive: {
            0: {
                items: 2
            },
            575: {
                items: 3
            },
            768: {
                items: 4
            }
        }
    });

    // Vulnerabilities-list-carousel
    $(".vulnerabilities-list-carousel").owlCarousel({
        items: 1,
        loop: false,
        nav: true,
        dots: false,
        margin: 30,
        smartSpeed: 1500,
        autoplay: false,
        autoplayHoverPause: true,
        navText: ["<i class='flaticon-left-arrow'></i>","<i class='flaticon-right-arrow'></i>"]
    });

    // Team-carousel
    $(".team-carousel").owlCarousel({
        items: 3,
        loop: true,
        nav: true,
        dots: false,
        margin: 30,
        smartSpeed: 1500,
        navText: ["<i class='flaticon-left-arrow'></i>","<i class='flaticon-right-arrow'></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });

    // Team-carousel-two
    $(".team-carousel-two").owlCarousel({
        items: 3,
        loop: false,
        nav: false,
        dots: false,
        margin: 30,
        smartSpeed: 1500,
        scrollbarType: "scroll",
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 3,
            }
        }
    });

    // Faq-accordion
    $(".faq-accordion-header").click(function() {
        $(this).closest(".faq-accordion-item").toggleClass("faq-accordion-item-active").siblings().removeClass("faq-accordion-item-active");
    })

    // Pricing-tab
    $(".pricing-tab-item").on('click', function() {
        var tab_modal = $(this).attr("data-pricing-tab");
        $(this).addClass("active").siblings().removeClass("active");
        $(".pricing-details-item[data-pricing-details=" +tab_modal+ "]").addClass("active").siblings().removeClass("active");
    })

    // Product-details-carousel
    var productSync1 = $(".product-slider-for");
    var productSync2 = $(".product-slider-nav");
    var flag = false;
    productSync1.owlCarousel({
        items: 1,
        smartSpeed : 1500,
        nav: false,
        dots: false,
        responsiveRefreshRate : 200,
    }).on("changed.owl.carousel", function(e) 
    {
        if (!flag) {
            flag = true;
            productSync2
            .find(".owl-item")
            .removeClass("synced")
            .eq(e.item.index)
            .addClass("synced");
            if (
            productSync2
                .find(".owl-item")
                .eq(e.item.index)
                .hasClass("active")
            ) {
            } else {
            productSync2.trigger("to.owl.carousel", [e.item.index, true]);
            }
            flag = false;
        }
    });
    productSync2.on("initialized.owl.carousel", function() {
        productSync2.find(".owl-item")
        .eq(0)
        .addClass("synced");
    }).owlCarousel({
        margin: 30,
        nav: false,
        dots: false,
        responsiveRefreshRate : 100,
        responsive: {
            0: {
                items: 2,
            },
            992: {
                items: 3
            }
        }
    }).on("click", ".owl-item", function(e){
        e.preventDefault();
        var number = $(this).index();
        productSync1.trigger("to.owl.carousel", number);
    });

    // Popup-gallery
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0,1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        }
    });

    // Product +/- button
    $(".qu-btn").on("click", function(e) {
        var btn = $(this),
        inp = btn.siblings(".qu-input").val();
        if(btn.hasClass("inc")){
            var i = parseFloat(inp) + 1;
        }
        else {
            if (inp > 1) (i = parseFloat(inp) - 1) < 2 && $(".dec").addClass("deact");
            else i = 1;
        }
        btn.addClass("deact").siblings("input").val(i)
    })

    // Product-carousel
    $(".product-carousel").owlCarousel({
        items: 4,
        loop: true,
        nav: true,
        dots: false,
        margin: 20,
        smartSpeed: 1500,
        autoplay: true,
        autoplayHoverPause: true,
        navText: ["<i class='flaticon-left-arrow'></i>","<i class='flaticon-right-arrow'></i>"],
        responsive: {
            0: {
                items: 1
            },
            575: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });

    // Authentication-tab
    $(".authentication-tab-item").on('click', function() {
        var tab_modal = $(this).attr("data-authentcation-tab");
        $(this).addClass("authentication-tab-active").siblings().removeClass("authentication-tab-active");
        $(".authentication-tab-details-item[data-authentcation-details=" +tab_modal+ "]").addClass("authentication-tab-details-active").siblings().removeClass("authentication-tab-details-active");
    })

    // Timer countdown
    function newCounter1() {
        var countDate = new Date("15 October 2022 9:56:00");
        var sec = 1000;
        var min = sec * 60;
        var hr = min * 60;
        var day = hr * 24;
        var today = new Date();
        var distance = countDate - today;
        var days = Math.floor(distance / day);
        var hours = Math.floor((distance % day) / hr);
        var mins = Math.floor((distance % hr) / min);
        var secs = Math.floor((distance % min) / sec);
        $(".day1").html(days + "<span>Days</span>")
        $(".hr1").html(hours + "<span>Hrs</span>")
        $(".min1").html(mins + "<span>Mins</span>")
        $(".sec1").html(secs + "<span>Sec</span>")
        if(distance < 0) {
            clearInterval(dealCounter1);
            $(".new-counter-1").html("Session Expired");
        }
    }
    setInterval(function() {
        newCounter1();
    }, 1000)

    // Product details tab
    $(".product-tab-list li").on('click', function() {
        var tab = $(this).attr('data-product-tab-list');
        $(this).addClass("active").siblings().removeClass("active");
        $(".product-tab-information-item[data-product-details-tab="+ tab +"]").addClass("active").siblings().removeClass("active");
    })

    // Blog-carousel
    $(".blog-carousel").owlCarousel({
        items: 3,
        loop: true,
        nav: true,
        dots: false,
        margin: 20,
        smartSpeed: 1500,
        autoplay: true,
        autoplayHoverPause: true,
        navText: ["<i class='flaticon-left-arrow'></i>","<i class='flaticon-right-arrow'></i>"],
        responsive: {
            0: {
                items: 1
            },
            575: {
                items: 2
            },
            992: {
                items: 3
            },
        }
    });

    // Billing-address-input
    $(".billing-title p").on("click", function() {
        $(".billing-address").addClass("none");
        $(".billing-address-input").addClass("active");
    })

    // Sidebar-modal
    $(".navbar-option-sidebar").on("click", function() {
        $(".sidebar-modal-wrapper").addClass("active");
        $(".sidebar-modal").addClass("sidebar-modal-show");
    })
    $(".sidebar-modal-close").on("click", function() {
        $(".sidebar-modal-wrapper").removeClass("active");
        $(".sidebar-modal").removeClass("sidebar-modal-show");
    })

    // Post-service-tab-item
    $(".post-service-tab-item").on('click', function() {
        var tab_modal = $(this).attr("data-post-service-tab");
        $(this).addClass("post-service-tab-active").siblings().removeClass("post-service-tab-active");
        $(".post-service-details-item[data-post-service-details=" +tab_modal+ "]").addClass("post-service-details-active").siblings().removeClass("post-service-details-active");
    })

    // Vulnerabilities-tab-list
    $(".vulnerabilities-tab-item").on('click', function() {
        var tab_modal = $(this).attr("data-vulnerabilities-tab");
        $(this).addClass("vulnerabilities-tab-active").siblings().removeClass("vulnerabilities-tab-active");
        $(".vulnerabilities-tab-details-item[data-vulnerabilities-info-list-details=" +tab_modal+ "]").addClass("vulnerabilities-info-list-item-active").siblings().removeClass("vulnerabilities-info-list-item-active");
    })

    // Partner-tab-item
    $(".partner-tab-item").on('click', function() {
        var tab_modal = $(this).attr("data-partner-tab");
        $(this).addClass("partner-tab-active").siblings().removeClass("partner-tab-active");
        $(".partner-tab-details-list[data-partner-tab-details=" +tab_modal+ "]").addClass("partner-tab-details-active").siblings().removeClass("partner-tab-details-active");
    })

    // Subscribe form
    $("#contactForm, .newsletter-form").validator().on("submit", function(event) {
        if (event.isDefaultPrevented()) {
            // handle the invalid form...
            formErrorSub();
            submitMSGSub(false, "Please enter your email correctly.");
        } else {
            // everything looks good!
            event.preventDefault();
        }
    });
    function callbackFunction(resp) {
        if (resp.result === "success") {
            formSuccessSub();
        } else {
            formErrorSub();
        }
    }
    function formSuccessSub() {
        $(".newsletter-form")[0].reset();
        submitMSGSub(true, "Thank you for subscribing!");
        setTimeout(function() {
            $("#validator-newsletter").addClass('hide');
        }, 4000)
    }
    function formErrorSub() {
        $(".newsletter-form").addClass("animate__animated animate__shakeX");
        setTimeout(function() {
            $(".newsletter-form").removeClass("animate__animated animate__shakeX");
        }, 1000)
    }
    function submitMSGSub(valid, msg) {
        if (valid) {
            var msgClasses = "validation-success";
        } else {
            var msgClasses = "validation-danger";
        }
        $("#validator-newsletter").removeClass().addClass(msgClasses).text(msg);
    }

    // ajax mailchimp
    $(".newsletter-form").ajaxChimp({
        url: "https://hibootstrap.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9", // Your url MailChimp
        callback: callbackFunction
    });
});
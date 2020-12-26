

/*
    = Preloader
    = Animated scrolling / Scroll Up
    = Full Screen Slider
    = Sticky Menu
    = Back To Top
    = Countup
    = Progress Bar
    = More skill
    = Shuffle
    = Magnific Popup
    = Vidio auto play
    = Fit Vids

*/

jQuery(function ($) {

    'use strict';

    /* ---------------------------------------------- /*
     * Preloader
    /* ---------------------------------------------- */
    /*
    $(window).ready(function() {
        $('#pre-status').fadeOut();
        $('#tt-preloader').delay(350).fadeOut('slow');
    });
    */
    $(window).on('load', function() {
    /*------------------
        Preloder
    --------------------*/
        $(".loader").fadeOut(); 
        $("#preloder").delay(100).fadeOut("slow");
    });



    // -------------------------------------------------------------
    // Animated scrolling / Scroll Up
    // -------------------------------------------------------------

    (function () {
        $('a[href*=#]').bind("click", function(e){
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top
            }, 1000);
            e.preventDefault();
        });
    }());



    // -------------------------------------------------------------
    // Full Screen Slider
    // -------------------------------------------------------------
    (function () {
        $(".tt-fullHeight").height($(window).height());

        $(window).resize(function(){
            $(".tt-fullHeight").height($(window).height());
        });

    }());


    // -------------------------------------------------------------
    // Sticky Menu
    // -------------------------------------------------------------

    (function () {
        $('.header').sticky({
            topSpacing: 0
        });

        $('body').scrollspy({
            target: '.navbar-custom',
            offset: 70
        })
    }());




    // -------------------------------------------------------------
    // Back To Top
    // -------------------------------------------------------------

    (function () {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('.scroll-up').fadeIn();
            } else {
                $('.scroll-up').fadeOut();
            }
        });
    }());

    // -------------------------------------------------------------
    // Resume Background
    // -------------------------------------------------------------
    "use strict";

    const circle1 = '<img viewBox="0 0 11.4 11.9" class="circle1" src="html5.svg"/></img>';
    const rhombus = '<img viewBox="0 0 13 14" class="rhombus" src="css.png" /></img>';
    const pentahedron = '<img viewBox="0 0 561.8 559.4" class="pentahedron" src="js.png"/></img>';
    const x = '<img viewBox="0 0 12 12" class="x" src="python.png"/></svg>';
    const dribble = '<svg viewBox="0 0 184.3 184.3"> <path class="dribble" d=""/> </svg>';
    const data = [rhombus, pentahedron, circle1, x];
    const max = 60;
    let particles = [];
    
    class Ball {
      constructor(shape) {
        var elmnt1 = document.getElementById("main-bg");
        this.shape = $(shape);
        this.speed = 2 + Math.random() * 6;
        this.vx = Math.random() * this.speed - Math.random() * this.speed;
        this.vy = Math.random() * this.speed - Math.random() * this.speed;
        this.radius = 10 + Math.round(Math.random() * 50);
        this.w = $(window).width();
        this.h = elmnt1.offsetHeight;
        this.x = (this.w - this.radius) / 2;
        this.y = (this.h - this.radius) / 2;
        $(window).on("resize", this.resize.bind(this));
        this.render();
      }
    
      render() {
        $(this.shape).css({
          width: this.radius,
          height: this.radius
        });
        $(".title1").append(this.shape);
      }
    
      resize() {
        this.w = $(window).width();
        this.h = $(window).height();
      }
    
      move() {
        this.x = this.x + this.vx;
        this.y = this.y + this.vy;
        this.shape.css({
          left: this.x,
          top: this.y,
          transform: "rotate(" + this.y + "deg)"
        });
    
        if (this.x < 0 || this.x > this.w - this.radius) {
          this.vx = -this.vx;
        }
    
        if (this.y < 0 || this.y > this.h - this.radius) {
          this.vy = -this.vy;
        }
    
        return this;
      }
    
    }
    
    function randomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
    
    for (let i = 0; i < max; i++) {
      particles.push(new Ball(data[randomInt(0, data.length - 1)]));
    }
    
    function update() {
      particles = particles.filter(function (p) {
        return p.move();
      });
      requestAnimationFrame(update.bind(this));
    }
    
    update(); 
    
    

    // -------------------------------------------------------------
    // Countup
    // -------------------------------------------------------------
    $('.count-wrap').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $(this).find('.timer').each(function () {
                var $this = $(this);
                $({ Counter: 0 }).animate({ Counter: $this.text() }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
            $(this).unbind('inview');
        }
    });


    // -------------------------------------------------------------
    // Progress Bar
    // -------------------------------------------------------------
 
    $('.skill-progress').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $.each($('div.progress-bar'),function(){
                $(this).css('width', $(this).attr('aria-valuenow')+'%');
            });
            $(this).unbind('inview');
        }
    });
    
    // -------------------------------------------------------------
    // More skill
    // -------------------------------------------------------------
    $('.more-skill').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $('.chart').easyPieChart({
                //your configuration goes here
                easing: 'easeOut',
                delay: 3000,
                barColor:'#68c3a3',
                trackColor:'rgba(255,255,255,0.2)',
                scaleColor: false,
                lineWidth: 8,
                size: 140,
                animate: 2000,
                onStep: function(from, to, percent) {
                    this.el.children[0].innerHTML = Math.round(percent);
                }

            });
            $(this).unbind('inview');
        }
    });


    // -------------------------------------------------------------
    // Shuffle
    // -------------------------------------------------------------

    (function () {

        var $grid = $('#grid');

        $grid.shuffle({
            itemSelector: '.portfolio-item'
        });

        /* reshuffle when user clicks a filter item */
        $('#filter a').click(function (e) {
            e.preventDefault();

            // set active class
            $('#filter a').removeClass('active');
            $(this).addClass('active');

            // get group name from clicked item
            var groupName = $(this).attr('data-group');

            // reshuffle grid
            $grid.shuffle('shuffle', groupName );
        });


    }());


    // -------------------------------------------------------------
    // Magnific Popup
    // -------------------------------------------------------------

    (function () {
      $('.image-link').magnificPopup({

        gallery: {
          enabled: true
        },
        removalDelay: 300, // Delay in milliseconds before popup is removed
        mainClass: 'mfp-with-zoom', // this class is for CSS animation below
        type:'image'
      });

    }());



    (function () {
        $('.popup-video').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-with-zoom',
            removalDelay: 300,
            preloader: false,
            fixedContentPos: false
        });
    }());





    // -------------------------------------------------------------
    // Fit Vids
    // -------------------------------------------------------------
    (function () {
        $(".video-container").fitVids();
    }());



    // -------------------------------------------------------------
    // Vidio auto play
    // -------------------------------------------------------------
    (function () {
    
    /* Vimeo API: http://developer.vimeo.com/player/js-api */
    
        var iframe = document.getElementById('nofocusvideo');
        // $f == Froogaloop
        var player = $f(iframe);

        $('.modal').on('hidden.bs.modal', function () {
        player.api('pause');
        })

        $('.modal').on('shown.bs.modal', function () {
        player.api('play');
        })
    }());




    // -------------------------------------------------------------
    // STELLAR FOR BACKGROUND SCROLLING
    // -------------------------------------------------------------

    $(window).load(function() {

        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
         
        }else {
            $.stellar({
                horizontalScrolling: false,
                responsive: true
            });
        }

    });


    // -------------------------------------------------------------
    // WOW JS
    // -------------------------------------------------------------

    (function () {

        new WOW({

            mobile:  false

        }).init();

    }());



    // -------------------------------------------------------------
    // Contact Form
    // -------------------------------------------------------------

    $('#contactForm').on('submit',function(e){

        e.preventDefault();

        var $action = $(this).prop('action');
        var $data = $(this).serialize();
        var $this = $(this);

        $this.prevAll('.alert').remove();

        $.post( $action, $data, function( data ) {

            if( data.response=='error' ){

                $this.before( '<div class="alert alert-danger">'+data.message+'</div>' );
            }

            if( data.response=='success' ){

                $this.before( '<div class="alert alert-success">'+data.message+'</div>' );
                $this.find('input, textarea').val('');
            }

        }, "json");

    });

});

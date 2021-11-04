$(document).ready(() => {
    $('#hambuger-menu').click(() => {
        $('#hambuger-menu').toggleClass('active')
        $('.nav-menu').toggleClass('active')
    })

    // setting owl carousel

    let navText = ["<i class ='bx bx-chevron-left'></i>","<i class ='bx bx-chevron-right'></i>"]
    $('#hero-carousel').owlCarousel ({
    items: 1,
    dots: false,
    loop: true, 
    nav: true,   
    navText: navText,
    autoplay:true,
    autoplayHoverPause: true
    })

    $('#top-movies-slide').owlCarousel ({
        items:2,
        dots:false,
        loop:true,
        autoplay:true,
        autoplayHoverPause: true,
        responsive: {
            500: {
                items:3
            },
            1280: {
                items:4
            },
            1600: {
                items:6
            }
        }
    })

    $('.movies-slide').owlCarousel({
        items:2,
        dots:false,
        nav: true,   
        navText: navText,
        margin:15,
        responsive: {
            500: {
                items:2
            },
            1280: {
                items:4
            },
            1600: {
                items:6
            }
        }
    })
})

$(document).ready(function() {

    $('#nav-menu li:nth-child(1) a').on('click',function(event) {
       event.preventDefault();
      $('html,body').animate({ scrollTop:$('#homes').offset().top},500);
    });

    $('#nav-menu li:nth-child(2) a').on('click',function(event) {
      event.preventDefault();
     $('html,body').animate({ scrollTop:$('#genres').offset().top},500);
   });

   $('#nav-menu li:nth-child(3) a').on('click',function(event) {
      event.preventDefault();
     $('html,body').animate({ scrollTop:$('#movies').offset().top},500);
   });

   $('#nav-menu li:nth-child(4) a').on('click',function(event) {
      event.preventDefault();
     $('html,body').animate({ scrollTop:$('#seris').offset().top},500);
   });

   $('#nav-menu li:nth-child(5) a').on('click',function(event) {
    event.preventDefault();
   $('html,body').animate({ scrollTop:$('#cartoons').offset().top},500);
    });

   $('#nav-menu li:nth-child(6) a').on('click',function(event) {
      event.preventDefault();
     $('html,body').animate({ scrollTop:$('#abouts').offset().top},500);
   });
   /*$('').offset().top hàm tự tính khoảng cách đến thuộc tính đó*/
  
  });
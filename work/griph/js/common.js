
var Common = {
	init: function() {
        Common.menu();
        Common.main();
    },
                      
    menu: function() {
        $('.mob-btn').on('click',function(e){
            e.preventDefault();
            $(this).toggleClass('active');
            $('menu, .header .logo').toggleClass('active');
            
        });
    },
    main: function() {
        
        $('.arrow').on('click',function(e){
            e.preventDefault();
            if(!$(this).hasClass('black')) {
                $('html, body').stop().animate({
                    scrollTop: $(".section__info").offset().top - 15
                }, 600);
                $(this).addClass('black')
            }else {
                $('html, body').stop().animate({
                    scrollTop: 0
                }, 600);
                $(this).removeClass('black')
            }
            
        });
        
        $('[data-popup]').on('click',function(e){
            e.preventDefault();
            $('.popup').fadeIn();            
            $('.form.'+$(this).data('src')).clone().appendTo('.popup-slide');
        });
        
        
        
        if ($(document).scrollTop() >= $('.header').height()/2) {
            $('.arrow').addClass('black')
        }
        
        
        
        $('body').scroll(function(e){

            var scrollTop = document.documentElement.scrollTop || document.body && document.body.scrollTop || 0;
            scrollTop -= document.documentElement.clientTop;
    
            if (scrollTop >= $('.header').height()/2) {
                $('.arrow').addClass('black')
            }else {
                $('.arrow').removeClass('black')
            }
        });
        
        $('body').on('click','.form-close',function(e){
            e.preventDefault();
            $('.popup').fadeOut();
            $('.popup-slide *').remove();
        });
        
    },
    
};

$(function() {
	Common.init();
});
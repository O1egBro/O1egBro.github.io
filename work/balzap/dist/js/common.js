
var Common = {
	init: function() {
        Common.main();
        Common.map();
    },

    main: function() {
        
        
        $('.catalog__filter-head').on('click',function(){
            $(this).toggleClass('close').next('.catalog__filter-toggle').slideToggle();
        })
        
        if($('.scroll-pane').length) {
            $('.scroll-pane').jScrollPane({
                verticalDragMinHeight: 35,
                verticalDragMaxHeight: 35,
                horizontalDragMinWidth: 35,
                horizontalDragMaxWidth: 35
            });
        }
        if($('select').length) {
            $('select').styler();
        }
        $('.catalog-left-block').on('click',function(e){
            e.preventDefault();
            $(this).toggleClass('open');
            $('.catalog-left').toggleClass('open');
        });
        
        if($('.owl-carousel').length) {
            $('.about__sert').owlCarousel({
                loop:0,
                margin:10,
                responsiveClass:true,
                nav:0,
                dots: 1,
                responsive:{
                    0:{
                        items:1,
                    },
                    500:{
                        items:3,
                    }
                }
            });
            $('.catalog__single-img.owl-carousel').owlCarousel({
                loop:1,
                margin:10,
                items:1,
                responsiveClass:true,
                nav:1,
                dots: 1,
            });
        }
        $('.where__banner .catalog-left-button').on('click',function(e){
            e.preventDefault();
            $(this).toggleClass('active').next('.where__banner-dd').slideToggle();
        });
        
        $('.where__banner .btn').on('click',function(e){
            e.preventDefault();
            if(!$(this).hasClass('active')) {
                $('.where__banner .btn.active, .where__banner-toggle').removeClass('active')
                $(this).addClass('active');
                
                $('.where__banner-toggle').eq($(this).index()).addClass('active')
            }
            
        });
        
        $('.catalog__tab-a').on('click',function(e){
            e.preventDefault();
            if(!$(this).hasClass('active')) {
                $('.catalog__tab-a.active').removeClass('active')
                $(this).addClass('active');
                
                $('.catalog__tab-item').removeClass('active').eq($(this).index()).addClass('active')
            }
            
        });
        
        $('.nav__mob-close').on('click',function(e){
            e.preventDefault();
            $('.nav__mob').removeClass('open')
            
        });
        
        $('.nav__menu').on('click',function(e){
            e.preventDefault();
            $('.nav__mob').addClass('open')
            
        });
        
        $('.catalog__filter-accept').on('click',function(e){
            e.preventDefault();
            $(this).fadeOut();
            
        });
        
        
        $('[type="checkbox"]').on('change',function(){
            $('.catalog__filter-accept').fadeIn().css({'top': $(this).parent('label').offset().top - $('.catalog__filter-body').offset().top + 50 + 'px'});
        })
        
    },
    map: function() {
        if($('#map').length) {
        ymaps.ready(function () {
            var myMap = new ymaps.Map('map', {
                    center: [55.751574, 37.573856],
                    zoom: 9
                }, {
                    searchControlProvider: 'yandex#search'
                }),


                MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                    '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
                ),

                myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                    hintContent: 'balzap.ru',
                    balloonContent: 'balzap.ru'
                }, {

                    iconLayout: 'default#image',
                    iconImageHref: 'images/icon/map.png',

                    iconImageSize: [26, 26],

                    iconImageOffset: [-13, -13]
                })



            myMap.geoObjects
                .add(myPlacemark)

        });
        }
    }
    
};

$(function() {
	Common.init();
});
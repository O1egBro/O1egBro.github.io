
var Common = {
	init: function() {;
        Common.menu();
           $('[type="file"]').on('change',function(e){
                var fileName = $(this).val().split("\\");
                $(this).next('div').find('span').html(fileName[fileName.length-1]);
                
           })
         function clearA() {
                var t = 0;
                $(".board-item").each(function() {
                    var e = $(this);
                    $(".checkbox input", e).prop("checked") && (t += 1),
                    0 < t ? ($(".header-filter").addClass("hide"),
                    $(".header-action").addClass("active")) : ($(".header-filter").removeClass("hide"),
                    $(".header-action").removeClass("active"))
                }),
                $(".header-action-result__title span").text(t)
            }
            $(".board-item").each(function() {
                var e = $(this);
                $(".checkbox input", e).on("change", function() {
                    $(this).prop("checked") ? e.addClass("active") : e.removeClass("active")
                })
            }),
            $(".checkbox input").on("change", function() {
                clearA()
            }),
            $(".header-action-result__close").on("click", function() {
                $(".board-item .checkbox input").removeAttr("checked"),
                $(".board-item").removeClass("active"),
                $(".header-action-result__title span").text(0),
                $(".header-filter").removeClass("hide"),
                $(".header-action").removeClass("active")
            }),
            $(".fr-user-menu__main").on("click", function() {
                
                if(!$(".fr-user-menu__dropdown").hasClass('active')){
                    $(".fr-user-menu__dropdown").addClass("active")
                } else{
                    $(".fr-user-menu__dropdown").removeClass("active");
                    
                }
                
            }),
//            $(".filter-dropdown").each(function() {
//                var e = $(this);
//                $(".filter-dropdown__title", e).on("click", function() {
//                    e.toggleClass("active")
//                })
//            }),
            $(document).mouseup(function (e){ 
                let div = $('.fr-user-menu__dropdown');
                if (div.hasClass('active') && !div.is(e.target) && div.has(e.target).length === 0) { 
                    div.removeClass('active')
                }
            }),
            $(window).scroll(function() {
                0 < $(window).scrollTop() ? $(".header").addClass("fixed") : $(".header").removeClass("fixed")
            }),
            $(".filter-dropdown").each(function() {
                var t = $(this);
                $(".filter-dropdown__list ul li", t).on("click", function() {
                    t.removeClass("active");
                    var e = $(this).text();
                    $(".filter-dropdown__title", t).text(e),
                    $("input", t).val(e)
                })
            });
                      
 $('body').on('change, keydown, keypress, keyup','[type="text"]',function(){
     if($(this).val() != "" && $(this).next('.input_clear').length == 0) {
         $(this).after('<div class="input_clear"></div>')
     }else if ($(this).val() == "" && $(this).nextAll('.input_clear').length == 1){
         $(this).next('.input_clear').remove()
     }
     console.log($(this).prop('disabled'))
 });

function Check() {
    $('body input[type="text"]').each(function(){

         if($(this).val() != "" && $(this).next('.input_clear').length == 0) {
             $(this).after('<div class="input_clear"></div>')
         }else if ($(this).val() == "" && $(this).nextAll('.input_clear').length == 1){
             $(this).next('.input_clear').remove()
         }
    })
}     
Check()
$('body').on('click','.input_clear',function(e){
    e.preventDefault();
    $(this).prev('input').val("");
    $(this).remove();
})
   
$('.board-item__title').on('click',function(){
    let t = $(this);
    $.fancybox.open({
        src  : t.data("src"),
        
        type : 'inline',
        opts : {
            modal: true,
            beforeShow : function( instance, current ) {
                if(this.src == "#hidden-content11") {
                    $('.header, .board, .fr-user-menu, .btn-options, .btn-magic').addClass('blur');
                    $('.fancybox-bg').css({'background':'#6f6f6f'})
                }
            },
            afterShow : function( instance, current ) {
                Check()

                
                
                
                if($(this.src).find('.container').height() < $(this.src).find('.block_in').height()) {
                    $(this.src).find('.container').height($(this.src).find('.block_in').height())
                }
                if($(this.src).find('.doucum').length > 0) {
                    $(this.src).find('.doucum').height(
                        $(this.src).find('.block_item-out > div').height() 
                        + $(this.src).find('.block_docum').height() 
                        + 38
                    )
                    
                }
                
//                if($(t.data("src")+' .block_right').height() > $(window).height()) {
//                    $('menu').height($(window).height() - 6 - 92);
//                    $('.menu').removeClass('height');
//                }else {
//                    $('menu').removeAttr('style');
//                    
//                    $('.menu').addClass('height');
//                }
                    
            },
            beforeClose : function( instance, current ) {
                if(this.src == "#hidden-content11") {
                    $('.header, .board, .fr-user-menu, .btn-options, .btn-magic').removeClass('blur')
                }  
            }
        }
    });
});
                      
//                      $('.date').datepicker({
//                        language: "ru",
//                        autoclose: true,
//                    });
//    $('.date').on('changeDate', function (ev) {
//        $(this).datepicker('hide'); 
//        alert('1')
//    });            
         
                      
                      

$('.date').datepicker({language: "ru","autoclose": true})
.on('changeDate', function (e) {

    //$(this).prev('input.date').addClass('hiders')
    //alert('1')
});
                      
    $('.block_close').on('click',function(){
        $.fancybox.close();
    });

       
	},

    menu: function() {
        
    },
    
};

$(function() {
	Common.init();
});
var Common = {
	init: function() {;
        Common.menu();
	},

    menu: function() {
        $('.nav_a').on('click',function(e){
            e.preventDefault();
            $([document.documentElement, document.body]).animate({
                scrollTop: $("."+$(this).data('a')).offset().top
            }, 2000);
        })
    },

};

$(function() {
	Common.init();
});
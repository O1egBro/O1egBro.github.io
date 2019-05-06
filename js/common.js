var Common = {
	init: function() {;
        Common.menu();
	},

    menu: function() {
        $('.nav_a').on('click',function(e){
            e.preventDefault();
        })
    },

};

$(function() {
	Common.init();
});
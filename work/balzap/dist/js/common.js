
var Common = {
	init: function() {
        Common.main();
    },

    main: function() {
        
        
        $('.catalog__filter-head').on('click',function(){
            $(this).toggleClass('close').next('.catalog__filter-toggle').slideToggle();
        })
        
        
        $('.scroll-pane').jScrollPane({
			verticalDragMinHeight: 35,
			verticalDragMaxHeight: 35,
			horizontalDragMinWidth: 35,
			horizontalDragMaxWidth: 35
		});
        
        $('select').styler();
        
        $('.catalog-left-block').on('click',function(e){
            e.preventDefault();
            $(this).toggleClass('open');
            $('.catalog-left').toggleClass('open');
        })
    },
    
};

$(function() {
	Common.init();
});
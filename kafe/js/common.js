var Common = {
	init: function() {;
        Common.menu();
        Common.main();
	},

    menu: function() {
        $('.search_btn').on('click',function(e){
            e.preventDefault();
            
        })
    },
    main: function() {
        
        $('.block_more-a').on('click',function(e){
            e.preventDefault();
            $(this).prevAll('.block_more-text').toggleClass('open');
        });
        
        
        
        $('select').styler();
        
        $( ".range-slider" ).slider({
          range: true,
          min: 0,
          max: 1000,
          values: [ 75, 500 ],
          slide: function( event, ui ) {
              $('.range_min').html(ui.values[ 0 ]);
              $('.range_max').html(ui.values[ 1 ]);
          }
        });
        $('.range_min').html($( ".range-slider" ).slider( "values", 0 ))
        $('.range_max').html($( ".range-slider" ).slider( "values", 1 ))

        
        $('.slider').owlCarousel({
            items:1,
            loop:true,
            margin:0,
            nav:1,
            dots:0,
        });
        $('.about_rev-slider').owlCarousel({
            items:3,
            loop:true,
            margin:10,
            nav:1,
            dots:0,
        });
        
        $('.scroll-pane').jScrollPane({
            verticalDragMinHeight: 20,
            verticalDragMaxHeight: 20,
            horizontalDragMinWidth: 20,
		  horizontalDragMaxWidth: 20
        });
    }
};

$(function() {
	Common.init();
});
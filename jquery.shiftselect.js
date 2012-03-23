/*
* Shift select for table
*
* Copyright (c) 2011 Drew Hamlett
*
*/
(function( $ ) {

	$.fn.shiftSelect = function(callback) {

		var lastSelected;  
		var rowSelector = this.selector + " tr";
		var selector = this.selector;

		$(rowSelector).live('click', function(event) {       

			var tableRow = $(this).closest("tr").prevAll("tr").length + 1;  

			if ($(this).hasClass('row_selected')) {
				$(this).removeClass('row_selected');       
			}
			else {           
				$(this).addClass('row_selected');         
			} 

			if (event.shiftKey) { 

				var table = $(selector);

				var start = Math.min(tableRow, lastSelected);
				var end = Math.max(tableRow, lastSelected);                 

				for (var i = start; i < end; i++) {
					table.each(function() {
						$(this).find("tr").eq(i).addClass('row_selected');    
					});
				}

			} else {   

				lastSelected = $(this).closest("tr").prevAll("tr").length + 1;
			}  

			if (typeof callback == 'function') { 
				callback.call(this); 
			}
		});  
	};
})( jQuery );
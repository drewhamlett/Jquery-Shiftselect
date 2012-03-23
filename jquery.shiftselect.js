/* ============================================================
 * jquery.shiftselect.js v1
 * http://github.com/drewhjava/Jquery-Shiftselect
 * ============================================================
 * Copyright 2011,2012 Drew Hamlett
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */
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
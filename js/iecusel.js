			jQuery(document).ready(function(){ /*делаем эмуляцию min-width: 100% для выпадающего списка для IE6 */
			jQuery(".cusel").each(
			function(){
				var w = parseInt(jQuery(this).width()),
					scrollPanel = jQuery(this).find(".cusel-scroll-pane");
				if(w>=scrollPanel.width())
				{
					jQuery(this).find(".jScrollPaneContainer").width(w);
					scrollPanel.width(w);
				}
			});
			});
/* workoutlife javascript */
jQuery(document).ready(function(){
	// slide show
	jQuery(function(){
	    jQuery('.fadein img:gt(0)').hide();
	    setInterval(function(){
	      jQuery('.fadein :first-child').hide()
	         .next('img').fadeIn(2000)
	         .end().appendTo('.fadein');}, 
	      8000);
	});
	
	jQuery('.thumbnail a').live('click',function(){
		jQuery('.image-preview img').attr('src',jQuery(this).attr('rel'));
	});
	jQuery('.image-preview a').live('click',function(){
		if(jQuery(this).attr('class') == 'btn-next'){
			var rel = jQuery('.thumbnail a');
			var src = jQuery('.image-preview img').attr('src');
			jQuery.each(rel,function(i,val){
				if(jQuery(this).attr('rel') == src && i != (rel.length-1)) {
					jQuery('.image-preview img').attr('src',jQuery(rel[i+1]).attr('rel'));
				} else if (jQuery(this).attr('rel') == src && i == (rel.length-1)){
					jQuery('.image-preview img').attr('src',jQuery(rel[0]).attr('rel'));
				}
			});
		} else if(jQuery(this).attr('class') == 'btn-prev'){
			var rel = jQuery('.thumbnail a');
			var rel_l = rel.length;
			var src = jQuery('.image-preview img').attr('src');
			jQuery.each(rel,function(i,val){
				if(jQuery(this).attr('rel') == src) {
					jQuery('.image-preview img').attr('src',jQuery(rel[i-1]).attr('rel'));
				}
			});
		}
	});
});


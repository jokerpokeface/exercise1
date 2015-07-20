$(document).ready(function() {
	
	 var unslider = $('.banner').unslider( {
	 	speed: 500,
	 	delay: 5000,
	 	keys: true,
	 	dots: true,
	 })

    $('.unslider-arrow').click(function() {
        var fn = this.className.split(' ')[1];
        //或者根据类名称 unslider.data('unslider').next() or .prev()
        unslider.data('unslider')[fn]();
    });
	
  
})
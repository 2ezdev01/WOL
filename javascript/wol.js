/* workoutlife javascript */
var hovnav;
var playslide = true;
var slidetime = 8000;

jQuery(function() {
    // navigation
    jQuery('.nav_top > li > ul').hover(function(){
        hovnav = jQuery(this).prev();
        jQuery(hovnav).addClass('focus');
    });
    
    jQuery('.nav_top > li > ul').mouseleave(function(){
        jQuery(hovnav).removeClass('focus');
    });
    
    // slideshow
    jQuery('.nav_slide a').click(function() {
        if (!jQuery(this).hasClass('play') && !jQuery(this).hasClass('stop')) {
            change_slideshow(jQuery(this));
        }
        else if (jQuery(this).hasClass('play')) {
            playslide = true;
            play_slideshow();
            jQuery(this).removeClass('play');
            jQuery(this).addClass('stop');
            jQuery(this).attr('title', 'Stop');
        }
        else {
            stop_slideshow();
            jQuery(this).removeClass('stop');
            jQuery(this).addClass('play');
            jQuery(this).attr('title', 'Play');
        }
        
        return false;
    });
    // autoplay on start
    play_slideshow();
    
    // initialize scrollable with mousewheel support
    jQuery(".feat_slide").scrollable({ vertical: true, mousewheel: true }).navigator({
        // select #flowtabs to be used as navigator
        navi: "#flowtabs",

        // select A tags inside the navigator to work as items (not direct children)
        naviItem: 'a',

        // assign "current" class name for the active A tag inside navigator
        activeClass: 'current'
    });
    
    // sidenav
    if (jQuery('.sidenav').length > 0) {
        jQuery('.sidenav').accordion({
            autoHeight: false,
            header: '.sidenav_header'
        });
    }
});

function change_slideshow(anchr) {
    jQuery('#slide_preview').hide();
    jQuery('#slide_preview').attr('src', jQuery(anchr).attr('filename'));
    jQuery('#slide_preview').fadeIn();
    jQuery('.nav_slide li').removeClass('current');
    jQuery(anchr).parent().addClass('current');
}

function play_slideshow() {
    if (playslide) {
        setTimeout('start_play_slideshow()', slidetime);
    }
}

function start_play_slideshow() {
    var anchr = null;
    var current = jQuery('.nav_slide .current').find('a');
    var imgCount = jQuery('.nav_slide li').length;
    
    if (jQuery(current).html() != imgCount){
        anchr = jQuery('.nav_slide .current').next().find('a');
    }
    else {
        anchr = jQuery('.nav_slide li').first().find('a');
    }
    
    change_slideshow(anchr);
    setTimeout('play_slideshow()', slidetime);
}



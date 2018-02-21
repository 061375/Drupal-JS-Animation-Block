if (document.getElementById('homepage_animation') != null) {
    window.onload = function() {
      
        'use strict';
        
        var s = document.getElementById('homepage_animation_script').getAttribute('data-script');
        var $s = document.createElement('script');
                $s.setAttribute('src','modules/homepage_animation/_/components/js/anims/'+s+'?ver=1');
            document.getElementsByTagName('body')[0].appendChild($s);
    }
    window.onresize = function(event) {
        var $t = document.getElementById('homepage_animation').firstChild,
        _w = window.innerWidth,
        _h = window.innerHeight;
        $t.setAttribute('width',_w);
        $t.setAttribute('height',_h);
        $t.style.width = _w+'px'; 
        $t.style.height = _h+'px'; 
    }
}
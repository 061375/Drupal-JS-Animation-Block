const W = window.innerWidth,
      H = window.innerHeight,
      hW = (W/2),
      hH = (H/2),
      CR = hH - 100;
if (document.getElementById('homepage_animation') != null) {
    window.onload = function() {
      
        'use strict';
        
        console.log('Wreathe version 1.0.4');
         
            $w.add_object_single(
                360,
                Wreathe,{},
                document.getElementById('homepage_animation'),
                W,H
            );
            $w.loop(true);
    }
}
var Wreathe = function(o) {
  
    this.i = o.i;
    
    this.color = '#efff00';
    
    this.op = 0.8;
    
    this.r = 1;
    
    this.d = Math.random() * 360;
    
    this.kos = Math.random() * 100;
    
    this.count = 0;
    
    this.speed = 30;
    
    var a = $w.math.degrees(o.z);
    
    this.x = hW + Math.sin(a) * CR;
    this.y = hH + Math.cos(a) * CR;
    
    $w.canvas.circle(this.i,this.x,this.y,this.r,this.color);
}
Wreathe.prototype.loop = function() { 
  
    this.count++;
    
    if (this.count > this.kos) {
        this.count = 0;
        this.kos = Math.random() * 100;
        this.d += (Math.random() * 90) - 45;
        if (this.d>360) this.d-=360;
        if (this.d < 0) this.d+=360;
    }
    var a = $w.math.radians(this.d);
    this.x += (Math.cos(a) * Math.PI / 180) * this.speed;
    this.y += (Math.sin(a) * Math.PI / 180) * this.speed;
    $w.canvas.circle(this.i,this.x,this.y,this.r,this.color,this.op);
    
    this.r -= 0.0001;
    this.op -= 0.001;
}
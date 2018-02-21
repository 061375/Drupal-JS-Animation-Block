function runBlockAnimation() {
    
    console.log('Wreathe version 1.1.0 '); 
    
    var w = window.innerWidth,
        h = window.innerHeight;
        
    $w.add_object_single(
        360,
        Wreathe,{
            x:(w/2),
            y:(h/2),
            cr:(h/2)-100
        },
        // attach the animation to the block
        document.getElementById('homepage_animation'),
        w,h
    );
    $w.loop(true);
}
/**
 * @param {Object}
 * */
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

    this.x = o.x + Math.sin(a) * o.cr;
    this.y = o.y + Math.cos(a) * o.cr;

    $w.canvas.circle(this.i,this.x,this.y,this.r,this.color);
}
/**
 * the loop
 * */
Wreathe.prototype.loop = function() { 
    // 
    this.count++;
    
    if (this.count > this.kos) {
        // reset
        this.count = 0;
        // pick a random time to chnage again
        this.kos = Math.random() * 100;
        // pick a random direction
        this.d += (Math.random() * 90) - 45;
        // make sure this is within the range of a circle
        if (this.d>360) this.d-=360;
        if (this.d < 0) this.d+=360;
    }
    
    // 
    var a = $w.math.radians(this.d);
    this.x += (Math.cos(a) * Math.PI / 180) * this.speed;
    this.y += (Math.sin(a) * Math.PI / 180) * this.speed;
    $w.canvas.circle(this.i,this.x,this.y,this.r,this.color,this.op);
    
    // slowly fade the root into nothing
    this.r -= 0.0001;
    this.op -= 0.001;

}


//
runBlockAnimation();
var img = [];
var i,t;
var canvas;
function preload(){
    img[0] = loadImage("images/temp1.jpg");
    img[1] = loadImage("images/temp2.jpg");
}
function setup(){
    i = 0;
    t = second();
    canvas = createCanvas(800,800);
    canvas.parent('slideshow-holder');
}
function draw(){
    function slide(){	
        if (second() - t > 4 || t - second() > 59-4 ){
            i = i + 1;
            t = second();
            if (i == img.length){
                i = i - img.length;
            }
        }				
    }
    slide();
    image(img[i],0,0,800,800);  
}
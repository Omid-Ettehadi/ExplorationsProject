var img = [];
var i,t;
var canvas;
function preload(){
    img[0] = loadImage("images/temp1.jpg");
    img[1] = loadImage("images/temp2.jpg");
    img[2] = loadImage("images/temp3.jpg");
    img[3] = loadImage("images/temp4.jpg");
    img[4] = loadImage("images/temp5.jpg");
    img[5] = loadImage("images/temp6.jpg");
    img[6] = loadImage("images/temp7.jpg");
    img[7] = loadImage("images/temp8.jpg");
    img[8] = loadImage("images/temp9.jpg");
}
function setup(){
    i = 0;
    t = second();
    canvas = createCanvas(800,800);
    canvas.fill("white");
    canvas.parent('slideshow-holder');
}
function draw(){
    slide();
    var width = parseInt(img[i].width);
    var height = parseInt(img[i].height);
    
    if(width > 750){
        width = 750;
    }
    if(height > 750){
        height = 750;
    }
    
    var posX = (800 - width)/2;
    var posY = (800 - height)/2;
    image(img[i],posX,posY,width,height);  
}
function slide(){	
    if (second() - t > 4 || t - second() > 59-4 ){
        i = i + 1;
        t = second();
        if (i == img.length){
            i = i - img.length;
        }
        background(255,255,255);
    }				
}
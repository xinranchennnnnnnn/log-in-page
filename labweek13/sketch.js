let video;

function setup() {
  createCanvas(windowWidth, windowHeight);
  video = createCapture(VIDEO);
  video.size(width,height);
  video.hide();
    background(0);
}

function draw() {
video.loadPixels();
  for(let i =0;i<60; i++){
    let x = floor(random(video.width));
    let y = floor(random(video.height));
   
    let col = video.get(x,y); 
    
    noStroke();
    col[0]+=233;
    col[2]+=10; 
    fill( col[0],col[1],col[2],125);
    ellipse(x,y,random(13,40));
  }
}
let video;

function setup() {
  createCanvas(windowWidth, windowHeight);
  video = createCapture(VIDEO);
  video.size(video.width,video.height); // Xinran, could you reduce this size? That will help
  video.hide();
  background(0);
}

function draw() {
video.loadPixels();
  for(let i =0;i<60; i++){ // If you make this 10 instead of 60, that will make it appear more realtime
    let x = floor(random(video.width));
    let y = floor(random(video.height));
   
    let col = video.get(x,y); 
    
    noStroke();
    col[0]+=233;
    col[2]+=10; 
    fill( col[0],col[1],col[2],125);
    ellipse(x,y,random(13,14));
  }
}
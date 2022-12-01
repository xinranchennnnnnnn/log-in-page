let video;
let c;

function setup() {
  c = createCanvas(900, 450);
  video = createCapture(VIDEO);
  video.size(3*video.width, 3*video.height); // Xinran, could you reduce this size? That will help
  video.hide();
  background(0);

  //saveCanvas('myCanvas', 'jpg');

  // all of the following are valid
  
}

function draw() {
  video.loadPixels();
  for (let i = 0; i < 10; i++) {
    // If you make this 10 instead of 60, that will make it appear more realtime
    let x = floor(random(video.width));
    let y = floor(random(video.height));
    let col = video.get(x, y);

    noStroke();
    col[0] += 233;
    col[2] += 10;
    fill(col[0], col[1], col[2], 125);
    ellipse(x, y, random(30, 40));
    

  }
}


function userSavesImage() {
  saveCanvas(c, "myCanvas", "jpg");
}


window.addEventListener("load", () => {
   let saveImageButton = document.getElementById("saveImage");
   saveImageButton.addEventListener("click",  () => {
    userSavesImage();
  })
})
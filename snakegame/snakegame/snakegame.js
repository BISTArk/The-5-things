let a = 25;
let n;
let boxes = [];
let flag = 0;
let score = 0;
let fx,fy,scoore;



function setup() {
  createCanvas(800, 800);
  textSize = a;
  let red = color(250, 0, 0);
  n = width / a;
  head = new block(0, 0, red, a);
  generate_food();

}



function draw() {
  background(0);
  if (flag % 30 === 0) {
    head.move();
    flag = 0;
  }
  head.inpu();
  head.show();

  if (abs(fx - head.x) < 1 && abs(fy - head.y) < 1) {
    generate_food();
    
    score++;
  }
  fill(0,250,0);


//food
square(fx *a,fy*a,a);



  flag++;
  scoore = 'score :'+score;
  fill(255);
  text(scoore,width-2*a-10,10);
  //console.log(width-(4*a));
}

function generate_food() {
  fx = floor(random(n-1));
  fy = floor(random(n-1));
}

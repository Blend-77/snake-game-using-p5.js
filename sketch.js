let snake;
let rez = 20;
let food;
let w;
let h;

function setup() {
  createCanvas(400,400);
  w = floor(width/rez);
  h = floor(height/rez);
  snake = new Snake();
  frameRate(5);
  foodL();
}

function foodL() {
  let x = floor(random(w));
  let y = floor(random(h));
  food = createVector(x, y);
}

function keyPressed() {
  if (key === 'a') {
    snake.setDir(-1, 0);
  } else if (key === 's') {
    snake.setDir(0,1)
  } else if (key === 'd') {
    snake.setDir(1,0)
  } else if (key === 'w') {
    snake.setDir(0,-1)
  }
}

function draw() {
  scale(rez);
  background(220);
  if (snake.eat(food)) {
    foodL();
  }
  snake.update();
  snake.show(255,255,255);

  noStroke();
  fill(255, 0, 0);
  rect(food.x, food.y, 1,1)
}

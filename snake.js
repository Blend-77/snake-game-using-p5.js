class Snake {
  constructor() {
    this.body = [];
    this.body[0] = createVector(0,0)
    this.xdir = 0;
    this.L = 1;
    this.ydir = 0;
  }

  setDir(x, y) {
    this.xdir = x;
    this.ydir = y;
  }

  grow() {
    this.L++;
    this.body.push(createVector(0,0));
  }

  eat(pos) {
    let x = this.body[0].x;
    let y = this.body[0].y;
    if (x == pos.x && y == pos.y) {
      print("ATE FOOD");
      this.grow();
      return true;
    }
    return false;
  }

  EndGame() {
    background(255,0,0);
    noLoop();
  }

  checkLocation() {
    //nothing
    for (let i = -0; i < this.L; i++) {
      if (i != 0) {
        if (this.body[0].x == this.body[i].x && this.body[0].y == this.body[i].y) {
          this.EndGame()
        }
      }
    }
  }

  update() {
    let prevLX = this.body[0].x;
    let prevLY = this.body[0].y;
    let tempx;
    let tempy;
    this.body[0].x += this.xdir;
    this.body[0].y += this.ydir;
    this.body[0].x = constrain(this.body[0].x, 0, w-1);
    this.body[0].y = constrain(this.body[0].y, 0, h-1);
    for (let i = 0; i < this.L; i++) {
      if (i != 0) {
        tempx = this.body[i].x;
        tempy = this.body[i].y;
        this.body[i].x = prevLX;
        this.body[i].y = prevLY;
        prevLX = tempx;
        prevLY = tempy;
      }
    }
    this.checkLocation();
  }

  show() {
    noStroke();
    fill(255,255,255);
    for (let i = 0; i < this.L; i++) {
      rect(this.body[i].x, this.body[i].y, 1,1)
    }
  }
}

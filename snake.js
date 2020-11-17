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
    this.len++;
    this.body.push(createVector());
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

  update() {
    this.body[0].x += this.xdir;
    this.body[0].y += this.ydir;
  }

  show() {
    noStroke();
    fill(255,255,255);
    rect(this.body[0].x, this.body[0].y, 1,1);
  }
}

class Snake {
  constructor() {
    this.body = [];
    this.body[0] = createVector(0,0)
  }

  update() {
    this.body[0].x += this.xdir;
    this.body[0].y += this.ydir;
  }
}

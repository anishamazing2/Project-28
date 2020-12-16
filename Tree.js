class Tree {
    constructor() {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(1050, 200, 0.001, 0.001,options);
      this.width = 300;
      this.height = 400;
      this.image = loadImage("tree.png")
      World.add(world, this.body);
    }
    display(){
      push();
      translate(this.body.position.x, this.body.position.y);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }   
  };
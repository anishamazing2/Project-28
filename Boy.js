class Boy {
    constructor() {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(305, 310, 0.001, 0.001,options);
      this.width = 150;
      this.height = 300;
      this.image = loadImage("boy.png")
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
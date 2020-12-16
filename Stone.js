class Stone {
    constructor() {
      //put false for isStatic after testing position and size
      var options = {
          isStatic: true,
          restitution: 0,
          friction: 1,
          density : 1.2
      }
      this.body = Bodies.rectangle(260, 242,20, 20,options);
      this.width = 30;
      this.height = 30;
      this.image = loadImage("stone.png")
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
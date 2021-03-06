class Dustbin {
    constructor(x, y, width, height) {
      var options = {
         isStatic:true
      }
      this.image=loadImage("dustbingreen.png")
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      //strokeWeight(4);
      //stroke("green");
      fill(0);
      image(this.image,0, 0);
      pop();
    }
  };
  
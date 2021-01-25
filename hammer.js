class Hammer {
    constructor(x, y) {
      var options = {
          'restitution':0.5,
          'friction':1.0,
          'density':2.0
      }
      this.body = Bodies.rectangle(x, y,200,80);
      this.width = 200;
      this.height = 80;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      pos.x=mouseX;
      pos.y=mouseY;
     var angle=this.body.angle;
      push();
      translate(pos.x, pos.y);
     rotate(angle);
      rectMode(CENTER);
      stroke("white")
      strokeWeight("10")
      fill("orange");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  
class Sand{
    constructor(x,y,radius){
        options={
            'restitution':1.3,
            'friction':5,
            'density':1.0
        }
        this.body=Bodies.circle(x,y,radius,options);
        this.radius=radius;
        Matter.Bodies.circle(x,y,radius);
        World.add(world,this.body)
    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER)
        strokeWeight("10");
        stroke("black");
        fill("red");
        circle(0,0,this.radius);
        pop();
      }
}
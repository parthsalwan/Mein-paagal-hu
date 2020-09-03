class Particle {
    constructor(x,y,radius) {
      var options = {
          restituition:0.4
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius=radius;
      this.colour=colour(random(0, 255), random(0,255), random(0, 255))
     
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;

      push();
      translate(pos.x,pos.y);
      rotate(angle);
      noStroke();
      fill(this.colour);
      ellipseMode(RADIUS)
     ellipse(0, 0, this.radius, this.radius);
    }
  };
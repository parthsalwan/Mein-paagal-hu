class Pinko {
    constructor(x,y,radius) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
     
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      for(var j=40;  j<=400; j=j+50){
            fill(255, 0, 255);
        pinkos.push(new Pinko(j, 75));
     }

     for(var j=15;  j<=10; j=j+50){
      fill(255, 0, 255);
  pinkos.push(new Pinko(j, 175));
}

    
      ellipse(pos.x, pos.y, this.radius);
    }
  };
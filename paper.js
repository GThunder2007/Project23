class Paper{
    constructor(x,y) {
     var options = {
       isStatic:false,
       restitution:0.3,
       friction:0.3,
       density:1.2
   }
 
     
     this.body = Bodies.circle(x,y,10, options);
     this.radius = 10;
 
     World.add(ourworld,this.body)
    }
 
    
    display(){
 
     var pos = this.body.position;
     var angle = this.body.angle;
     push();
     rotate(angle);
     translate(pos.x,pos.y)
     fill("magenta")
     ellipseMode(RADIUS);
     ellipse(0,0,this.radius,this.radius);
     pop();
 }
 
 
 
 
 
 
 
 
 }
class Paper { constructor(x,y) {
    var options = {
        isStatic: false,
        restitution: 0.3,
        friction: 0.5,
        density: 1
    }
    this.image = loadImage("Images/paper.png");
    this.body = Bodies.circle(x,y,20,options);
    this.radius = 70;
    World.add(world,this.body);
}
display() {
    imageMode(RADIUS)
    image(this.image,this.body.position.x, this.body.position.y, this.radius, this.radius);
    console.log(this.body.position);
}   
}
   
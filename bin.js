class Bin{
    constructor(x,y,width,height) {
        var options = {
            isStatic: true

        }
        
        this.image = loadImage("Images/dustbingreen.png");
        this.body = Bodies.rectangle(x,y,70,100,options);
        this.width = 20;
        this.height = 20;

        World.add(world, this.body);
    }

    display() {
        imageMode(CENTER);
       image(this.image,this.body.position.x, this.body.position.y, 70,100); 
    }
}
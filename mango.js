class Mango{
    constructor(x, y, width, height) {
        var options = {
            'isStatic':false,
            'restitution':0,
            'friction':1.0
        }

        this.body = Bodies.circle(x, y, width, height, options);
        this.width = width;
        this.height = height;
	    this.image = loadImage("Plucking mangoes/mango.png");
        World.add(world, this.body);
    }    
    
    display(){
        push();
        image(this.image, 0,0, this.width, this.height); 
        pop();  
    }

}
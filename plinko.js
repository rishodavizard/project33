class Plinko {
	constructor(x,y,r)

{  
    var options={

        isStatic : true
}

        this.x=x;
		this.y=y;
		this.r=r
        this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);
    
        }
	    display()
	    {
            push()
            rectMode(CENTER)
			strokeWeight(4);
			fill(255,0,255)
			ellipse(0,0,this.r, this.r);
			pop()
        }
    }
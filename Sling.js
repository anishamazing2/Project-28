class Sling{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            length: 30,
            stiffness: 0.01
        }
        this.pointB = pointB;
        
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    
    attach(body){
        this.sling.bodyA = body;
    }
    
    fly(){
        this.sling.bodyA = null;
    }
    

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB; 
            push ();
        
            stroke ("black");
            strokeWeight(7);
            line (pointA.x, pointA.y, pointB.x, pointB.y);
        
                    
                
            pop ();
        }
    }
    
} 

class Throw{
    constructor(body,anchor){
        var options = {
            bodyA:body,
            pointB: anchor,
            stiffness: 0.004,
            length: 1
        }
        this.bodyA=body;
        this.pointB=anchor;
        this.Throw = Constraint.create(options);
        World.add(world, this.Throw);
    }

    attach(body){
        this.Throw.bodyA=body;
    }

    fly(){
        this.Throw.bodyA=null;
    }


    display(){
        if(this.Throw.bodyA){
       var pointA=this.bodyA.position;
       var pointB=this.pointB;
       strokeWeight(3);
       line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
    
}
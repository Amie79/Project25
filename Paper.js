class Paper{

constructor(x,y,r){

    this.image = loadImage("paper.png");
var options={
    isStatic:false,
    restitution:0.3,
    friction:0.5,
    density:1.2
}

this.body=Body.circle(x,y,r,options);

World.add(world,this.body);
}

display(){
var pos=this.body.position;

rectMode(CENTER);
strokeWeight(5);
stroke("pink");
fill(255);
rect(x,y,r);


}

}
class dustbin{

constructor(x,y){

    this.image = loadImage("dustbingreen.png");
var options={
 isStatic=true
}

this.body=Body.rectangle(x,y,options);
World.add(world,this.body);
}

display(){
var pos=this.body.position;

rectMode(CENTER);
strokeWeight(5);
stroke("blue");
fill(255);
rect(x,y)
}
}


class Rect {

constructor(posistionX,posistionY) {
 	this.x = posistionX;
 	this.y = posistionY;
 	this.a=15;
 	this.b=15;
 	this.r=0;
 	this.xFluctuation=random(-2,2);
 	this.yFluctuation=random(-2,2);
 
}


show () {
	if (this.x > width*3/4 && this.y <  height/4 || this.x <  width/4  && this.y > height*3/4  ) {
		fill(55,55,random(100,255));
	} else if (this.x > width/2 && this.y >= height/2) {
		fill(random(100,255),55,55);
	} else if(this.x <= width/2 && this.y >= height/2){
		fill(55,random(100,255),55);
	} else if (this.x < width/2 && this.y <  height/2 ) {
		fill(random(100,255),random(100,255),random(100,255));
	} else {
		fill(255);
	}
	rect(this.x,this.y, this.a, this.b, this.r);
}

move() {
	this.x+=this.xFluctuation;
	this.y+=this.yFluctuation;
	if (this.x >= width || this.y >= height) {
		this.x=width/2;
		this.y=height/2;
	}
	this.rotate(PI/3.0,1);
}


rotate() {


}

repaint() {

}

clicked () {

	let d = dist(mouseX,mouseY,this.x,this.y);
	if (d<this.a) {
		this.r=this.a*2;
		this.xFluctuation;
	}
 	}

}
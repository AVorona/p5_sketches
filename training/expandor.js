 let bubble;

function setup () {
	createCanvas(600,400);
		bubble= new Bubble(300,200,50);


}

function draw() {
	background(50);
 bubble.show();

if (mouseX>300) {
	bubble.reverse(1)
} else {
	bubble.grow(0.5)
}



}


class Bubble {

constructor(posistionX,posistionY,radius) {
 	this.x = posistionX;
 	this.y = posistionY;
 	this.rad = radius;
 	this.fill= 0;
 	this.stroke=255;
 	this.strokeWeight=4;
}

show() {
	ellipse(this.x,this.y,this.rad*2, this.rad*2);
		if (this.rad > 200) {
		noStroke();
	} 
	fill(this.fill);
	strokeWeight(this.strokeWeight);
	stroke(this.stroke);
}

grow(rate) {
	this.stroke=255;
 	this.strokeWeight+=1;
	this.fill=0;
	this.rad+=rate;

}

reverse (rate) {
	this.stroke=0;
 	this.strokeWeight+=1;
	this.fill=255;
	this.rad-=rate;
}

}
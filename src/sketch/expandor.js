export default function expandor(e) {

	if(e) console.log(true)
 let bubble;
const width=600;
const height=600;

e.setup = () => {

let myCanvas =	e.createCanvas(width,height);

		myCanvas.parent('container');

		bubble= new Bubble(300,200,50);

}

e.draw = () => {
	
	e.background(50);
 bubble.show();

if (e.mouseX>300) {
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
	e.ellipse(this.x,this.y,this.rad*2, this.rad*2);
		if (this.rad > 200) {
		e.noStroke();
	} 
	e.fill(this.fill);
	e.strokeWeight(this.strokeWeight);
	e.stroke(this.stroke);
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
}

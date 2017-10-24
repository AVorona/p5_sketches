export default function vp_bubbles() {
	
 let bubbles=[];

function setup () {
	createCanvas(600,400);
		bubble= new Bubble(300,200,50);

}

function mouseDragged() {
	bubbles.push(new Bubble(mouseX,mouseY));
}




// function mousePressed() {
// 	bubbles.repaint();
// }

function draw() {
	background(50);

for(let i=0; i<bubbles.length; i++) {
	bubbles[i].show();
	 bubbles[i].move();
}


}


class Bubble {

constructor(posistionX,posistionY) {
 	this.x = posistionX;
 	this.y = posistionY;


 	

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
	rect(this.x,this.y, 15, 15);
}

move() {
	this.x+=random(-2,2);
	this.y+=random(-2,2);
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



}
}

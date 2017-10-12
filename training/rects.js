 let rectas=[];

function setup () {
	createCanvas(600,400);
		recta= new Recta(300,200,50);

}

function mouseDragged() {
	rectas.push(new Recta(mouseX,mouseY));
}




 function mousePressed() {

 	for (let j=0; j<rectas.length; j++) {
 		if(rectas[j].isFinished()) {
 			 	rectas.splice(j,1)
 		}

 	}

 }

function draw() {
	background(50);

for(let i=0; i<rectas.length; i++) {
	rectas[i].show();
	 rectas[i].move();
}


}

// Multiply both sides by r
// y	=	r	 sin 	θ 
// By similar means we find that
// x	=	r	 cos 	θ


// class circle {
// 	constructor() {
// 		this.r=40;

// 	}
// }


class Recta {

constructor(posistionX,posistionY) {
 	this.x = posistionX;
 	this.y = posistionY;
 	this.a=15;
 	this.b=15;
 	this.r=0;
 	this.xFluctuation=random(-2,2);
 	this.yFluctuation=random(-2,2);
 	this.life=true;
 	

}


show (fillColor) {
		rect (this.x,this.y,this.a,this.b,this.r);
		noStroke();
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
	
}

move() {
	this.x+=this.xFluctuation;
	this.y+=this.yFluctuation;
	if (this.x >= (width - this.a) || this.y >=(height - this.b )) {
	 	this.xFluctuation=0;
	 	this.x-=0;
	 	this.y-=0;
 		this.yFluctuation=0;
 	}
if (this.x <= 0 || this.y <=0) {
	 	this.xFluctuation=0;
	 	this.x-=0;
	 	this.y-=0;
 		this.yFluctuation=0;
	}
	
}


rotate() {


}

repaint() {

}

isFinished () {

	let d = dist(mouseX,mouseY,this.x,this.y);
	if (d<this.a) {
			return true
	} else {
		return false
	}
	
 	}

}
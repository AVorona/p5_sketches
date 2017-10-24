 export default function vp_rectas (r) {
 	
 let rectas=[];
const width=600;
const height=600;
r.setup = () => {
	let myCanvas = r.createCanvas(width,height);

	myCanvas.parent(container);
		r.recta= new Recta(300,200,50);

}

r.mouseDragged = () => {
	rectas.push(new Recta(r.mouseX,r.mouseY));
}




 r.mousePressed = () => {

 	for (let j=0; j < rectas.length; j++) {
 		if(rectas[j].isFinished()) {
 			 	rectas.splice(j,1)
 		}

 	}

 }

r.draw = () =>{
	r.background(50);

for(let i=0; i < rectas.length; i++) {
	rectas[i].show();
	 rectas[i].move();

	 for ( let k=0; k < rectas.length; k++)
	 if(rectas[i].intersects(rectas[k]) && i !== k ) {
	 		// rectas[k].stop();
	 		rectas[i].stop();
	 }
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
 	this.xFluctuation=r.random(-2,2);
 	this.yFluctuation=r.random(-2,2);
 	this.life=true;
 	

}


show (fillColor) {
		r.rect (this.x,this.y,this.a,this.b,this.r);
		r.noStroke();
	if (this.x > width*3/4 && this.y <  height/4 || this.x <  width/4  && this.y > height*3/4  ) {
		r.fill(55,55,r.random(100,255));
	} else if (this.x > width/2 && this.y >= height/2) {
		r.fill(r.random(100,255),55,55);
	} else if(this.x <= width/2 && this.y >= height/2){
		r.fill(55,r.random(100,255),55);
	} else if (this.x < width/2 && this.y <  height/2 ) {
		r.fill(r.random(100,255),r.random(100,255),r.random(100,255));
	} else {
		r.fill(255);
	}
	
}

move() {
	this.x+=this.xFluctuation;
	this.y+=this.yFluctuation;

	
}

stop() {
		this.xFluctuation=0;
	 	this.x-=0;
	 	this.y-=0;
 		this.yFluctuation=0;
}

intersects(otherRect) {

let d = r.dist(this.x,this.y,otherRect.x,otherRect.y);
// console.log(d);
let borderIntersection = (this.x >= (width - this.a)) || (this.y >=(height - this.b )) || this.x <= 0 || this.y <=0;
let siblingsIntersection = (d < (this.a+otherRect.a)) || (d<(this.b+otherRect.b)) ;

console.log(d, this.a+otherRect.a);
	// check the distance to borders
	if (borderIntersection && siblingsIntersection) {
		// console.log(1);
		return true
} else if (borderIntersection) {
// console.log(3);
 		return true 
}





	return false

}







repaint() {

}

isFinished () {

	let d = r.dist(r.mouseX,r.mouseY,this.x,this.y);
	if (d<this.a) {
			return true
	} else {
		return false
	}
	
 	}

}
 }

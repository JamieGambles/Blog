
function setup() { 
	createCanvas(windowWidth, windowHeight);
	
}

function draw () {

	let centrex = windowWidth/2
	let centrey = windowHeight/2
	let rectsize = 100

	let mouseposX = mouseX - centrex
	let mouseposY = mouseY - centrey

	let recttopx1 = centrex - rectsize - mouseposX/20
	let recttopy1 = centrey + rectsize - mouseposY/20
	let recttopx2 = centrex - rectsize - mouseposX/20
	let recttopy2 = centrey - rectsize - mouseposY/20
	let recttopx3 = centrex + rectsize - mouseposX/20
	let recttopy3 = centrey - rectsize - mouseposY/20
	let recttopx4 = centrex + rectsize - mouseposX/20
	let recttopy4 = centrey + rectsize - mouseposY/20

	background(0)

	noFill()
	stroke(255)


beginShape();
vertex(recttopx1, recttopy1)
vertex(recttopx2, recttopy2)
vertex(recttopx3, recttopy3)
vertex(recttopx4, recttopy4)
endShape(CLOSE);

beginShape();
vertex(centrex - rectsize, centrey + rectsize)
vertex(centrex - rectsize, centrey - rectsize)
vertex(centrex + rectsize, centrey - rectsize)
vertex(centrex + rectsize, centrey + rectsize)
endShape(CLOSE);

beginShape();
vertex(recttopx1, recttopy1)
vertex(recttopx2, recttopy2)
vertex(centrex - rectsize, centrey - rectsize)
vertex(centrex - rectsize, centrey + rectsize)
endShape(CLOSE);

beginShape();
vertex(recttopx2, recttopy2)
vertex(recttopx3, recttopy3)
vertex(centrex + rectsize, centrey - rectsize)
vertex(centrex - rectsize, centrey - rectsize)
endShape(CLOSE);

beginShape();
vertex(recttopx3, recttopy3)
vertex(recttopx4, recttopy4)
vertex(centrex + rectsize, centrey + rectsize)
vertex(centrex + rectsize, centrey - rectsize)
endShape(CLOSE);

beginShape();
vertex(recttopx4, recttopy4)
vertex(recttopx1, recttopy1)
vertex(centrex - rectsize, centrey + rectsize)
vertex(centrex + rectsize, centrey + rectsize)
endShape(CLOSE);



ellipse(mouseX,mouseY,10,10);

}
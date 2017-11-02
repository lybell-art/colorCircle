var slider;
function setup()
{
	createCanvas(windowWidth, windowHeight);
	noStroke();
	colorMode(HSB,360,100,100);
	slider=createSlider(3,36,6);
	slider.position(10,10);
}
function draw()
{
	background(255);
	colorCircle(slider.value());
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function colorCircle(n)
{
	var circleRadius=min(width,height)*1/3;
	var rotateVector=createVector(circleRadius,0);
	var center=createVector(width/2,height/2);
	var p=createVector();
	var i, col;
	var r=TWO_PI/n;
	for(i=0;i<n;i++)
	{
		col=color(map(i,0,n,0,360),100,100);
		fill(col);
		beginShape();
		vertex(center.x,center.y);
		p=p5.Vector.add(rotateVector,center);
		vertex(p.x,p.y);
		rotateVector.rotate(r);
		p=p5.Vector.add(rotateVector,center);
		vertex(p.x,p.y);
		endShape(CLOSE);
	}
}

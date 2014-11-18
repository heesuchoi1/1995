var count;


function setup(){
	createCanvas(800, 900);

	count = 0;
}

function draw(){
	background(0);


	drawCircle(count,30);
    count=count+1;
    if(count>680){
	count=0;
	}
	
}

function drawCircle(x,y){
	noStroke();
	fill(255);
	ellipse(50,50,50,50);
}
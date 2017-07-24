var sketchProc=function(processingInstance){ with (processingInstance){
size(400, 400); 
frameRate(30);





//ProgramCodeGoesHere
var data = [
3, 5, 10
];
var mode = "standard";
var trimVal = 0.20;
var classNumber = 5;
var classWidth = 4;
var classStart = 40;
var numberArray = [
3,
5,
9,
5,
1];
var mean = function() {
	var cMean = 0;
	for(var t = 0; t < data.length; t++) {
		cMean+=data[t];
	}
	cMean/=data.length;
	return(cMean);
}
var sort = function() {
	for(var t = 0; t < data.length+1; t++) {
		for(var r = 0; r < data.length+1; r++) {
			if(data[r] > data[t]) {
				var g = data[r];
				data[r] = data[t];
				data[t] = g;
				
			}
		}
	}
};
var median = function() {
	sort();
	var cMedian = 0;
	if(floor(data.length/2)*2 === data.length) {
		cMedian = round(((data[data.length/2-1]+data[data.length/2])/2)*1000)/1000;
	}else {
		cMedian = data[ceil(data.length/2)-1];
	}
	return(cMedian);
};
var midRange = function() {

	sort();
	var cMidRange = 0;
	cMidRange+=data[data.length-1];
	cMidRange+=data[0];
	cMidRange/=2;
	return(cMidRange);
};
var ftod = function() {
	var u = 0;
	data = [];
	for(var n = 0; n < classNumber; n++) {
		for(var g = 0; g < numberArray[n]; g++) {
			data[u] = ((classStart+(classStart+classWidth))/2);
			u++;
		}
		classStart+=classWidth+1;
	}return(data);
};
var standardDeviation = function() {
	var result = 0;
	for(var h = 0; h < data.length; h++) {
		result=result+sq(data[h]-mean());
	}
	result/=data.length-1;
	if(mode === "standard" || mode === "coefficient") {
	result = sqrt(result);
	}
	if(mode === "coefficient") {
		return(result/mean()*100);
	}else {
		return(result);
	}
};
var range = function() {
	sort();
	return(data[data.length-1]-data[0]);
};
var trim = function() {
	var trimNumber = data.length*trimVal;
	for(var z = 0; z < trimNumber; z++) {
		data.pop();
		data.splice(0, 1);
	}
	return(data);
};
var mode = function() {
	sort();
return(data);
};
var drawNormal = function() {
	background(255);
	sort();
	translate(0, 400);
	strokeWeight(3);
	var tp = [];
	for(var zxc = 0; zxc < 17; zxc+=0.5) {
	tp.push([]);
	tp[zxc*2] = 0;
	for(var cvb = 0; cvb < data.length; cvb++) {
		if(data[cvb] === zxc+58) {
			tp[zxc*2]+=1;
		}
	};
	}
	for(var yu = 0; yu < tp.length; yu++) {
		point(yu*10, (-tp[yu])*80);
	}
	/*line((mean()-58)*20, -400, (mean()-58)*20, 0);
	text("MEAN", 200, -390);
	mode = "standard";
	line((mean()-58)*20+standardDeviation()*20, -400, (mean()-58)*20+standardDeviation()*20, 0);
	line((mean()-58)*20-standardDeviation()*20, -400, (mean()-58)*20-standardDeviation()*20, 0);
	line((mean()-58)*20-standardDeviation()*40, -400, (mean()-58)*20-standardDeviation()*40, 0);
	line((mean()-58)*20+standardDeviation()*40, -400, (mean()-58)*20+standardDeviation()*40, 0);
	fill(255, 0, 0, 100);
	rectMode(LEFT, TOP);
	rect((mean()-58)*20+standardDeviation()*20, -400, -standardDeviation()*20, 400);
	rect((mean()-58)*20-standardDeviation()*20, -400, standardDeviation()*20, 400);
	fill(255, 255, 0, 100);
	rect((mean()-58)*20-standardDeviation()*40, -400, standardDeviation()*20, 400);
	rect((mean()-58)*20+standardDeviation()*40, -400, -standardDeviation()*20, 400);
	rectMode(CENTER, CENTER);*/
	var canvas = document.getElementById("canvas");
	var dataURL = canvas.toDataURL();
	
	println(dataURL);
	println(dataURL);
};
var fiveSumm = function() {
	sort();
	if(0.25*data.length===floor(0.25*data.length)) {
		var mn = data[0.25*data.length+1];
	}else{
		var mn = data[ceil(0.25*data.length)];
	}
	if(0.75*data.length===floor(0.75*data.length)) {
		var mno = data[0.75*data.length+1];
	}else{
		var mno = data[ceil(0.75*data.length)];
	}
	return([data[0], mn, median(), mno, data[data.length-1]]);
};
var drawBoxPlot = function() {
	pushMatrix();
	translate(10, 0);
	background(255);
	sort();
	line((fiveSumm()[0]-fiveSumm()[0])*20, 50, (fiveSumm()[4]-fiveSumm()[0])*20, 50);
	line((fiveSumm()[0]-fiveSumm()[0])*20, 25, (fiveSumm()[0]-fiveSumm()[0])*20, 75);
	line((fiveSumm()[4]-fiveSumm()[0])*20, 25, (fiveSumm()[4]-fiveSumm()[0])*20, 75);
	line((fiveSumm()[2]-fiveSumm()[0])*20, 25, (fiveSumm()[2]-fiveSumm()[0])*20, 75);
	line((fiveSumm()[1]-fiveSumm()[0])*20, 25, (fiveSumm()[1]-fiveSumm()[0])*20, 75);
	line((fiveSumm()[3]-fiveSumm()[0])*20, 25, (fiveSumm()[3]-fiveSumm()[0])*20, 75);
	text(fiveSumm()[0], (fiveSumm()[0]-fiveSumm()[0])*20, 80);
	text(fiveSumm()[4], (fiveSumm()[4]-fiveSumm()[0])*20, 80);
	text(fiveSumm()[1], (fiveSumm()[1]-fiveSumm()[0])*20, 80);
	text(fiveSumm()[2], (fiveSumm()[2]-fiveSumm()[0])*20, 80);
	text(fiveSumm()[3], (fiveSumm()[3]-fiveSumm()[0])*20, 80);
	fill(0, 0, 255, 100);
	rectMode(LEFT, TOP);
	rect((fiveSumm()[1]-fiveSumm()[0])*20, 25, (fiveSumm()[3]-fiveSumm()[0])*20-(fiveSumm()[1]-fiveSumm()[0])*20, 50);
	rectMode(CENTER, CENTER);
	popMatrix();
	var canvas = document.getElementById("canvas");
	var dataURL = canvas.toDataURL();
	
	println(dataURL);
	println(dataURL);
};

rectMode(CENTER, CENTER);
textAlign(CENTER, CENTER);
var pressed = "";
var button = function(t, x, y) {
	this.t = t;
	this.x = x;
	this.y = y;
    pushMatrix();
    fill(200);
    rect(this.x, this.y, 80, 40);
	fill(0);
	text(this.t, this.x, this.y);
    if (mouseX >= this.x-40 && mouseX <= this.x+40 && mouseY >= this.y-20 && mouseY <= this.y+20) {
		mouseClicked = function() {
			this.t = t;
            pressed = this.t;
        }
    };
    popMatrix();
};

draw = function() {
	background(255, 255, 0);
	button("range", 100, 50);
	button("mean", 100, 100);
	button("median", 100, 150);
	button("mode", 100, 200);
	button("midrange", 100, 250);
	button("frequency to data", 200, 50);
	button("standard deviation", 200, 100);
	button("variance deviation", 200, 150);
	button("coefficient of variation", 200, 200);
	button("trim", 300, 50);
	button("draw normal", 300, 100);
	button("box plot", 300, 150);
	if(pressed === "mean") {
		println(mean());
		pressed = "";
	}else if(pressed === "median") {
		println(median());
		pressed = "";
	}else if(pressed === "midrange") {
		println(midRange());
		pressed = "";
	}else if(pressed === "frequency to data") {
		println(ftod());
		pressed = "";
	}else if(pressed === "standard deviation") {
		mode = "standard"
		println(standardDeviation());
		pressed = "";
	}else if(pressed === "variance deviation") {
		mode = "variance"
		println(standardDeviation());
		pressed = "";
	}else if(pressed === "coefficient of variation") {
		mode = "coefficient"
		println(standardDeviation());
		pressed = "";
	}else if(pressed === "range") {
		println(range());
		pressed = "";
	}else if(pressed === "trim") {
		println(trim());
		pressed = "";
	}else if(pressed === "mode") {
		println(mode());
		pressed = "";
	}else if(pressed === "draw normal") {
		drawNormal();
		pressed = "";
	}else if(pressed === "box plot") {
		drawBoxPlot();
		pressed = "";
	}
};
}};
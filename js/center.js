// window.scrollTo(window.innerWidth,window.innerHeight);
var c=document.getElementById("overlaidCanvas");
c.width = window.innerWidth*3;
c.height = window.innerHeight*3;
var ctx=c.getContext("2d");
ctx.lineWidth = 2;
// set line color
ctx.strokeStyle = '#ffffff';
var drawLine = function(svg1,svg2){
	ctx.beginPath();
	var svgRect0 = svg1.getBoundingClientRect();
	var svgRect1 = svg2.getBoundingClientRect();
	var x = svgRect0.left+(svgRect0.width/2);
	var y = svgRect0.top+(svgRect0.height/2);
	ctx.moveTo(x,y);
	x = svgRect1.left+(svgRect1.width/2);
	y = svgRect1.top+(svgRect1.height/2);
	ctx.lineTo(x,y);
	ctx.stroke();
}
var svgs = document.getElementsByTagName('svg');
var placeSvgs = function(){
	var maxLandWidth = 640;
	var maxLandHeight = 480;
	var numWidths = Math.floor((3*window.innerWidth)/maxLandWidth)
	var numHeights = Math.floor((3*window.innerHeight)/maxLandHeight)
	var usedArr = new Array(numWidths);
	for (var i = 0; i < numWidths; i++) {
    	usedArr[i] = new Array(numHeights);
    	for (var p = 0; p < usedArr[i].length; p++) {
    		usedArr[i][p] = false;
    	};
  	}
	var blockWidth = Math.floor((3*window.innerWidth)/numWidths);
	var blockHeight = Math.floor((3*window.innerHeight)/numHeights);
	for (var i = 0; i < svgs.length; i++) {
		svgs[i].style.position = "absolute";
		var rx = Math.floor(Math.random() * numWidths );
		var ry = Math.floor(Math.random() * numHeights );
		if(usedArr[rx][ry]==false){
			svgs[i].style.left = rx*blockWidth;
			svgs[i].style.top = ry*blockHeight;
			usedArr[rx][ry] = true;
		}
	};
	for (var k = 0; k < svgs.length; k++) {
		for (var i = 0; i < svgs.length; i++) {
			if(i!=k){
				drawLine(svgs[k],svgs[i]);
			}
		};
	};
}
placeSvgs();
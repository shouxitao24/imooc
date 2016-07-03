var can1;
var can2;

var ctx1;
var ctx2;

var canWidth;
var canHeight;

var lastTime;//上一帧的时间
var deltaTime;//两帧间隔

var ane;
var bgPic = new Image();
var fruit;

var mom;
var baby;

var mx;
var my;

var babyTail=[];
var babyEye=[];
var babyBody=[];

var momTail=[];
var momEye=[];
var momBodyOra=[];
var momBodyBlue=[];

var data;


document.body.onload=game;//js脚本的入口

function game(){
	init();
	lastTime=Date.now();
	deltaTime=0;
	
	gameloop();
}
function init(){
	
	//获得canvas context 获得画笔
	can1 = document.getElementById("canvas1");//fishes,dust,UI,circle
	ctx1 = can1.getContext("2d");
	can2 = document.getElementById("canvas2");//background,ane,fruits
	ctx2 = can2.getContext("2d");
	
	can1.addEventListener('mousemove',onMouseMove,false);
	
	bgPic.src="img/src/background.jpg"
	canWidth=can1.width;
	canHeight=can1.height;
	
	ane=new aneObj();
	ane.init();
	
	fruit=new fruitObj();
	fruit.init();
	
	mom = new momObj();
	mom.init();
	
	baby = new babyObj();
	baby.init();
	
	mx = canWidth*0.5;
	my = canHeight*0.5;
	
	for(var i = 0;i<8;i++){
		babyTail[i]=new Image();
		babyTail[i].src="img/src/babyTail"+i+".png";
	}
	for(var i=0;i<2;i++){
		babyEye[i]=new Image();
		babyEye[i].src="img/src/babyEye"+i+".png";	
	}
	for(var i=0;i<20;i++){
		babyBody[i]=new Image();
		babyBody[i].src="img/src/babyFade"+i+".png";
		}
		
	for(var i=0;i<8;i++){
		momTail[i]=new Image();
		momTail[i].src="img/src/bigTail"+i+".png";
		}
	for(var i=0;i<2;i++){
		momEye[i]=new Image();
		momEye[i].src="img/src/bigEye"+i+".png";
	}
	data =new dataObj();
	for(var i=0;i<8;i++){
		momBodyOra[i]=new Image();
		momBodyBlue[i]=new Image();
		momBodyOra[i].src="img/src/bigSwim"+i+".png";
		momBodyBlue[i].src="img/src/bigSwimBlue"+i+".png";
	}
	ctx1.font="30px Verdana";
	ctx1.textAlign="center";
}

function gameloop(){
	 window.requestAnimFrame(gameloop);//setInterval,setTimeout定死的。会有fps。
	 //当前绘制完成之后，根据机器的性能来确定间隔多长时间绘制下一帧，只能计算。
	 var now = Date.now();
	 deltaTime=now-lastTime;
	 lastTime=now;
	 if(deltaTime>40) deltaTime = 40;
	 
	 drawBackground();
	 ane.draw();
	 fruitMonitor();
	 fruit.draw();
	 ctx1.clearRect(0,0,canWidth,canHeight);
	 mom.draw();
	 baby.draw();
	 momFruitsCollision();
	 mombabyCollision();
	 
	 data.draw();
	
	 
}
function onMouseMove(e){
	if(e.offsetX ||e .layerX){
		mx=e.offsetX == undefined?e.layerX:e.offsetX;
		my=e.offsetY == undefined?e.layerY:e.offsetY;
		
	}
}

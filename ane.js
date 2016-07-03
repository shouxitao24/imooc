var aneObj=function()
{
	this.x=[];
	this.len=[];
}
aneObj.prototype.num=50;//prototype返回对象类型原型的使用
aneObj.prototype.init=function(){
	for(var i=0;i<this.num;i++){
		this.x[i]=i*16+Math.random()*20;//[0,1)海葵宽度
		this.len[i]=200+ Math.random()*50;
	}
}
aneObj.prototype.draw=function(){
	ctx2.save();
	ctx2.globalAlpha=0.6;
	ctx2.lineWidth=20;
	ctx2.lineCap="round";
	ctx2.strokeStyle="#3b154e";
	for(var i=0;i<this.num;i++){
		//beginPath起点,moveTo终点,lineTo,stroke画,strokeStyle线条样式,lineWidth宽度,lineCap结束端样式,globalAlpha透明度
		ctx2.beginPath();
		ctx2.moveTo(this.x[i],canHeight);
		ctx2.lineTo(this.x[i],canHeight-this.len[i]);
		ctx2.stroke();
	}
	ctx2.restore();//样式只在这之间起作用
}

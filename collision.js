//判断大鱼和果实的距离。
function momFruitsCollision(){
	for(var i = 0;i<fruit.num;i++){
		if(fruit.alive[i]){
			
			//calculate length;
			var l=calLength2(fruit.x[i],fruit.y[i],mom.x,mom.y);
			if(l<900){
				fruit.dead(i);//fruit eated
				data.fruitNum++;
				mom.momBodyCount++;
				if(mom.momBodyCount>7){
					mom.momBodyCount=7;
				}
				if(fruit.fruitType[i]=="blue"){
					data.double++;
				}//blue
			}
		}
	}
}
//mom baby collision
function mombabyCollision(){
	var l = calLength2(mom.x,mom.y,baby.x,baby.y);
	if(l<900){
		//baby recover
		baby.babyBodyCount=0;
		//date=>0
		mom.momBodyCount=0;
		//score update
		data.addScore();
	}
}

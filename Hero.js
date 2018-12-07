class Hero extends GameObject{
	constructor(container,x,y,width,height,velX,velY,targetX, targetY,bg,src){
		super(container,x,y,width,height,velX,velY,targetX, targetY,bg,src);
	}
	//부모의 클래스인 GameObject는 충돌검사로직이 없다..
	//당연한 거다.부모는 가장 기본적이고 일반적인 기능만 가져야 하므로..
	//메서드 업그레드하자!! 오버라이딩
	tick(){
		var hitCount=0;//닿았는지 여부를 알수있게 해주는 변수
		//움직임을 계산할 때마다 충돌체크 하자!!!
		//닿으면?? 
		//좌우로 움직이다가 닿으면 velX=0
		//위아래로 움직이다가 닿으면 velY=0
		//모든~~~벽돌을 대상으로 해서...
		//반복문에서는 어떤 벽돌이건 간에 한번이라도 닿았는지만 조사하자
		for(var i=0; i<blockArray.length;i++){
			var result=hitTest(this, blockArray[i], this.velX, this.velY);
			if(result){
				hitCount++;
			}
		}

		//아래의 조건은 닿았을때를 위한 코드이다...
		//따라서 hitCount > 0 때 적용하면 된다..
		if(hitCount>0){
			if(key==37 || key==39){
				this.velX=0;
				//this.x=this.x-this.velX;
			}
			if(key==38 || key==40){
				this.velY=0;
				//this.y=this.y-this.velY;
			}
		}else{
			this.x+=this.velX;
			this.y+=this.velY;
		}
	}
}








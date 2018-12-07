class Bullet extends GameObject{
	constructor(container,x,y,width,height,velX,velY,targetX, targetY,bg,src){
		super(container,x,y,width,height,velX,velY,targetX, targetY,bg,src);
	}
	//오버라이드!!!
	//화면밖으로 나가는 상황에 대한 판단은 부모 클래스의 tick() 에 없다
	//따라서 현재 내 현실에 적용할 수 없으므로 부모의 나한테 맞게
	//커스터마이징 해야 한다...오버라이딩!!!
	tick(){
		this.x=this.x+this.velX;
		this.y=this.y+this.velY;
		//this.x 값을 증가시켜나가다가, 적군과 충돌했다면 제거
		
		//적군을 무사히 피한경우, 화면밖으로 나가면 제거 
		if(this.x+this.width > screen.width){
			objectManager.removeObject(this);
		}
	}

}
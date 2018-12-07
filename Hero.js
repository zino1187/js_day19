class Hero extends GameObject{
	constructor(container,x,y,width,height,velX,velY,targetX, targetY,bg,src){
		super(container,x,y,width,height,velX,velY,targetX, targetY,bg,src);
	}
	//부모의 클래스인 GameObject는 충돌검사로직이 없다..
	//당연한 거다.부모는 가장 기본적이고 일반적인 기능만 가져야 하므로..
	//메서드 업그레드하자!! 오버라이딩
}
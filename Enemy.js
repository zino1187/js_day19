class Enemy extends GameObject{
	constructor(container,x,y,width,height,velX,velY,targetX, targetY,bg,src){
		super(container,x,y,width,height,velX,velY,targetX, targetY,bg,src);
	}		
	tick(){
		this.x=this.x+this.velX;
		this.y=this.y+this.velY;

		this.render();
	}
	render(){
		this.div.style.left=this.x+"px";		
		this.div.style.top=this.y+"px";
	}

}
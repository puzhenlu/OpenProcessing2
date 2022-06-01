var colors = "264653-2a9d8f-e9c46a-f4a261-e76f51".split("-").map(a=>"#"+a)
class Ball{
	constructor(args){  //接收下面參數的值 || 如果值沒傳成功的預設值
		this.r = args.r || random(150) //直徑
		this.p = args.p || {x:random(width),y:random(height)}  //位置
		this.v = {x:random(-1,1),y:random(-1,1)}  //速率
		this.a = args.a || 0.1
		this.color = random(colors)
	}
	draw()  //繪製
	{
		push()
			translate(this.p.x,this.p.y)
			fill(this.color)
			ellipse(0,0,this.r);
			ellipse(-this.r/2,-this.r/2,this.r/2)
			ellipse(this.r/2,-this.r/2,this.r/2)
			fill(255)  //眼白A
			arc(-20,-5,this.r/3,this.r/3,0,PI)  //(x座標,y座標,r的倍數半徑,r的倍數半徑,從0開始,畫半圓)
			arc(20,-5,this.r/3,this.r/3,0,PI)
			fill(0)  //瞳孔
			arc(20,-5,this.r/6,this.r/6,0,PI)
			arc(-20,-5,this.r/6,this.r/6,0,PI)
		pop()
	}
	update(){  //運作的動作
		this.p.x += this.v.x  //this.p.x = this.p.x + this.v.x
		this.p.y += this.v.y  //this.p.y = this.p.y + this.v.x
		this.v.x = this.v.x + this.a.x
		this.v.y = this.v.y + this.a.y
		this.v.x*=0.999
		this.v.y*=0.999
		if(this.p.y>height){
			this.v.y = -abs(this.v.y)
		}
	}
}

var ball
var balls = []
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	for(var i=0;i<100;i++){	//產生的球數
	ball= new Ball({r:100,p:{x:width/2,y:0},a:{x:0,y:0.5}})  //傳參數過去上面	 //產生一個新的Ball class元件
	balls.push(ball)
	}
}

function draw() {
	background(100)
	//for(var i =0;i<balls.length;i++){
		//let ball = balls[i]
	for(let ball of balls){
		ball.draw()  //呼叫class裡面的function
		ball.update()
	}
}
function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}
var starImg,bgImg;
var star, starBody;
//crea la variable para el sprite del hada y fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	//carga aquí la animación del hada
	fairyImg = loadAnimation("images/fairyImage1.png", "images/fairyImage2.png");
	fairyvoice = loadSound("sound/JoyMusic.mp3")
}

function setup() {
	createCanvas(600, 650);

	//escribe el código para reproducir el sonido fairyVoice
	fairyvoice.loop();



	//crea el sprite del hada, y agrega la animación para el hada
    fairy = createSprite(300,300,10,30);
	fairy.addAnimation("flying", fairyImg);
	fairy.scale = 0.2;

	star = createSprite(550,100);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(550 , 100 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);

	fairyBody = Bodies.circle(300,600,10);
		World.add(world, fairyBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  if(keyWentDown("LEFT_ARROW")){       
  fairy.velocityX=-2;
}

if (keyWentUp("LEFT_ARROW")) {
	fairy.velocityX=0;	
		  
	 }

if(keyWentDown("RIGHT_ARROW")){
fairy.velocityX=2;
}

if (keyWentUp("RIGHT_ARROW")) {
	fairy.velocityX=0;		  
	 }


	 if(keyDown("D")){
		starBody = Bodies.circle(550 , 100 , 5 , {restitution:0.5, isStatic:false});
	}
 
  //escribe aquí el código para detener la estrella en la mano del hada
  if(star.y > 270 && starBody.position.y > 270){
Matter.Body.setStatic(starBody, true);

  }

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}
	
}

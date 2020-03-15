const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
 var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17;

var log1,log2,log3,log4,log5;


function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,720,70,60);
    box2 = new Box(920,720,70,60);
    box3 = new Box(700,640,70,60);
    box4 = new Box(920,640,70,60);
    box5 = new Box(150,640,70,60);
    box6 = new Box(370,640,70,60);
    box7 = new Box(150,640,70,60);    
    box8 = new Box(370,640,70,60);
    box9 = new Box(500,480,70,60);
    box10 = new Box(600,480,70,60);
    box11 = new Box(550,402,70,60);
    box12 = new Box(1060,320,70,60);
    box13 = new Box(1060,380,70,60);
    box14 = new Box(1060,440,70,60);
    box15 = new Box(1060,300,150,60);
    box16 = new Box(70,720,70,210);
    box17 = new Box(70,500,150,60);
    ground = new Ground(600,height,1200,20)
    log1 = new Log(810,660,300,PI/2);
    log2 = new Log(810,580,300,PI/2);
    log3 = new Log (260,660,300,PI/2);
    log4 = new Log (260,580,300,PI/2);
    log5 = new Log(530,490,300,PI/2);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    ground.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    log5.display();
    box16.display();
    box17.display();
}
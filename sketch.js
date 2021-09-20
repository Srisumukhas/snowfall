const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;

var world;
var engine;
var canvas;
var mouse_Constraint;
var bg;
var snow = [];


function preload() {
  bg = loadImage("snow1");
 
}


function setup() {
  canvas = createCanvas(1500, 800);

 
  engine = Engine.create();
  world = engine.world;

}


function draw() {
  
  background(bg);

  Engine.update(engine);

  


  if (frameCount % 30 === 0) {
    snow.push(new Snow(random(1000 / 2 - 350, 1000 / 2 + 350), -10, 10));
  }

  for (var i = 0; i < snow.length; i++) {

    snow[i].display();
  }

  drawSprites();
}
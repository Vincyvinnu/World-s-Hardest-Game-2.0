var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


var car1,car2,car3,car4;
var boundary1,boundary2;
var sam;
var life=0;

boundary1 = createSprite(190,110,430,3);
boundary2 =createSprite(190,270,430,3);

car1 = createSprite(100,140,10,10);
car1.shapeColor="red";
car2 = createSprite(210,135,10,10);
car2.shapeColor="red";
car3 = createSprite(170,240,10,10);
car3.shapeColor="red";
car4 = createSprite(280,250,10,10);
car4.shapeColor="red";

sam= createSprite(20,200,15,15);
sam.shapeColor="green";

car1.velocityY=5;
car2.velocityY=-4;
car3.velocityY=5;
car4.velocityY=-4;

function draw() {
  background("white");
  textSize(20);
  text("Lives: " + life,200,100);
  fill("skyblue");
  rect(0,120,50,140);
  fill("yellow");
  rect(339,120,50,140);

car1.bounceOff(boundary2);
car1.bounceOff(boundary1);
car2.bounceOff(boundary2);
car2.bounceOff(boundary1);
car3.bounceOff(boundary2);
car3.bounceOff(boundary1);
car4.bounceOff(boundary2);
car4.bounceOff(boundary1);

if (keyDown("left")){
  sam.x=sam.x-2;
}
if (keyDown("right")){
  sam.x=sam.x+2;
}

if (sam.isTouching(car1)|| 
sam.isTouching(car2)||
sam.isTouching(car3)||
sam.isTouching(car4))

{
sam.x=20;
sam.y=200;
life=life +1;
}



drawSprites();
  
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};

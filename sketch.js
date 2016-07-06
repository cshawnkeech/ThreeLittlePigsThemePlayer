var helpersTheme = new buzz.sound( "audioExamples/helpersTheme", {
    formats: [ "ogg", "mp3", "m4a", "wav" ]
});

//var helpersTheme = new buzz.sound("audioExamples/helpersTheme.wav");
var pig;
var percent;


function setup() {
  createCanvas(windowWidth,windowHeight);


  pig = new Piggy();
  //pig.display();
} // end setup

function draw() {
  percent = helpersTheme.getPercent();
  background(45);

  //testing text
  push();
  fill(245);
  text(helpersTheme.isPaused(), 30, 30);
  text(percent, 30, 50);
  text(pig.headtilt, 30, 70);
  text(pig.headtilt % TWO_PI, 30, 90)
  pop();
  //end testing text


  pig.display();
  if (helpersTheme.isPaused() === false && percent > 0) {
    pig.headtilt += 0.025;
  } else if (helpersTheme.isPaused() || percent === 0) {
    if (pig.headtilt % TWO_PI > 0) {
      pig.headtilt = pig.headtilt % TWO_PI;
      pig.headtilt -= 0.025;
    } else if (pig.headtilt < 0) {
      pig.headtilt = 0;
    }

  }

} // end draw



function mousePressed() {
  var mouseDistance = dist(mouseX, mouseY, width/2, height/2);
  if (mouseDistance < 40) {
    helpersTheme.togglePlay();
  } else if (mouseDistance > 40 && helpersTheme.isEnded() === false) {
    helpersTheme.stop();
  }

}//end mousePressed



/*
var mySound = new buzz.sound( "/sounds/myfile", {
    formats: [ "ogg", "mp3", "aac" ]
});

mySound.play()
    .fadeIn()
    .loop()
    .bind( "timeupdate", function() {
       var timer = buzz.toTimer( this.getTime() );
       document.getElementById( "timer" ).innerHTML = timer;
    });

*/

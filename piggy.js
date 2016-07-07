

//Piggy constructor
function Piggy() {
  this.red = 235;
  this.green = 181;
  this.blue = 227;
  this.alpha = 240;
  this.xTranslate = width/3 ;
  this.yTranslate = height/2;
  this.rotateFactor = 0;
  this.scaleFactor = 2;

  this.display = function() {
    push()

    translate(this.xTranslate, this.yTranslate);
    scale(this.scaleFactor);
    rotate(this.rotateFactor);

    // helper theme circle
    fill(this.red, this.green, this.blue , this.alpha);

    //ears
    triangle(-20 ,-45, -28, -29, -12, -37); //left
    push();
    scale(-1, 1);
    triangle(-20 ,-45, -28, -29, -12, -37);
    pop();

    //head
    ellipse(0, 0, 80, 80);
    //nose
    ellipse(0, 0, 20, 14);
    //nostrils
    stroke(219, 31, 197, 200);
    ellipse(3,0, 3, 5);
    ellipse(-3,0, 3, 5);

    //eyes
    stroke(0);
    fill(56, 56, 56);
    ellipse(-9,-12, 6, 8);
    ellipse(9,-12, 6, 8);


    //mouth
    noFill();
    strokeWeight(1);
    arc(0, 11, 13, 10, 0, 160);

    pop();
  }//end this.display

  this.headBob = function() {
    this.rotateFactor = this.rotateFactor++;
  }// end this.headBob

  this.playTheme = function() {
    var mouseDistance = dist(mouseX, mouseY, this.xTranslate, this.yTranslate);
    if (mouseDistance < 40 * this.scaleFactor) {
      helpersTheme.togglePlay();
    } else if (mouseDistance > 40 * this.scaleFactor && helpersTheme.isEnded() === false) {
      helpersTheme.stop();
    }

  }//end this.playTheme

  this.spinCheck = function() {
    if (helpersTheme.isPaused() === false && percent > 0) {
      this.rotateFactor += 0.025;
    } else if (helpersTheme.isPaused() || percent === 0) {
      if (this.rotateFactor % TWO_PI > 0) {
        this.rotateFactor = this.rotateFactor % TWO_PI;
        this.rotateFactor -= 0.025;
      } else if (this.rotateFactor < 0) {
        this.rotateFactor = 0;
      }
    }
  } // end this.spinCheck


} // end Piggy constructor

//Wolf constructor
function Wolf() {
  this.red = 235;
  this.green = 181;
  this.blue = 227;
  this.alpha = 200;
  this.xTranslate = 2 * width/ 3;
  this.yTranslate = height/2;
  this.scaleFactor = 0.80;
  this.rotateFactor = 0;

  this.display = function() {

    push();//begins wolf
    translate(this.xTranslate, this.yTranslate);
    scale(this.scaleFactor);
    rotate(this.rotateFactor);

    strokeWeight(2);

    fill(176, 176, 176);
    quad(-100, -80, 100, -80, 20, 80, -20, 80);

    fill(230, 225, 225);
    quad(-93, -75, 93, -75, 73, -36, -73, -37);
    quad(-20, 80, 20, 80, 14, 92, -14, 92);

    //muzzle
    stroke(161, 152, 152);
    fill(176, 176, 176, 200);
    quad(-10, 0, 10, 0, 19, 80, -18, 80);

    stroke(0, 0, 0);
    fill(176, 176, 176);
    angleMode(DEGREES);
    arc(0, 20, 200, 200, 218, 323);
    angleMode(RADIANS);

    //eyes
    fill(168, 151, 151, 100);
    triangle(-50, -26, -10, -13, -21, 1);
    push(); //begins second eye
    scale(-1, 1);
    triangle(-50, -26, -10, -13, -21, 1);
    pop(); //ends second eye

    pop(); //ends wolf
  } //ends this.display


    this.headBob = function() {
      this.rotateFactor = this.rotateFactor++;
    }// end this.headBob

    this.playTheme = function() {
      var mouseDistance = dist(mouseX, mouseY, this.xTranslate, this.yTranslate);
      if (mouseDistance < 100 * this.scaleFactor) {
        wolvesTheme.togglePlay();
      } else if (mouseDistance > 100 * this.scaleFactor && wolvesTheme.isEnded() === false) {
        wolvesTheme.stop();
      }

    }//end this.playTheme

    this.spinCheck = function() {
      if (wolvesTheme.isPaused() === false && wolvesPercent > 0) {
        this.rotateFactor += 0.025;
      } else if (wolvesTheme.isPaused() || wolvesPercent === 0) {
        if (this.rotateFactor % TWO_PI > 0) {
          this.rotateFactor = this.rotateFactor % TWO_PI;
          this.rotateFactor -= 0.025;
        } else if (this.rotateFactor < 0) {
          this.rotateFactor = 0;
        }
      }
    } // end this.spinCheck




}//end wolf constructor

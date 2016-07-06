//Piggy constructor


function Piggy() {
  this.red = 235;
  this.green = 181;
  this.blue = 227;
  this.alpha = 240;
  this.xTranslate = width/2 ;
  this.yTranslate = height/2;
  this.headtilt = 0;
  this.display = function() {
    push()

    translate(this.xTranslate, this.yTranslate);

    rotate(this.headtilt);

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
    this.headtilt = this.headtilt++;
  }// end this.headBob

} // end Piggy constructor

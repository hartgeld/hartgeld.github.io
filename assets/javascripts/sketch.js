
var sketch = function( p ) {

  var x = 0;
  var y = 0;
  var px = 0;
  var py = 0;
  var easing = 0.09;

  p.setup = function() {
    p.createCanvas(p.windowWidth-15, p.windowHeight-15);
  };

  p.draw = function() {
    p.background(255,10);
    var targetX = p.mouseX;
    x += (targetX - x) * easing;
    var targetY = p.mouseY;
    y += (targetY - y) * easing;
    var weight = p.dist(x, y, px, py);
    p.stroke(255,204,0);
    p.strokeWeight(weight);
    p.line(x, y, px, py);
    py = y;
    px = x;
  }
};

/*
var navSketch = function( p ) {

  p.setup = function() {
    p.createCanvas(outerWidth/6, (outerWidth/6)*0.87);
    console.log(outerWidth/6);
  };

  p.draw = function() {
    
    //p.background(0);
    //p.ellipseMode(CORNER);
    p.smooth();
    p.fill(0);
    p.ellipse(p.width/2,p.height/2,100, 100);
  }
};
*/

window.onload = function() {
  
  var containerNode = document.getElementById( 'myStage' );
  var myp5 = new p5(sketch, containerNode);
/*
  var containerNodeNav = document.getElementById( 'myNav' );
  var myp5Nav = new p5(navSketch, containerNodeNav);

  var myDiv = document.getElementById('myLogoDimensions');
    var myLogoWidth = myDiv.style.width;
    console.log(myLogoWidth);
*/
};


/*
window.onload = function() {
  
  var myp5Nav = new p5(navSketch, containerNodeNav);
};
*/
function draw() {
  var ctx = document.getElementById('helloCanvas').getContext('2d');
  var shadow = document.getElementById('shadows').getContext('2d');
  var transform = document.getElementById('transform').getContext('2d');
  var compos = document.getElementById('compos').getContext('2d');
  // fillText(text, x, y, maxWidth)
  // strokeText(text, x, y, maxWidth)
  /*
  *   'HELLO CANVAS' - text
  *   30 - x
  *   125 and 50 - y
  *   400 - maxWidth
  */
  ctx.fillStyle = '#1740a7';
  ctx.font = 'italic bold 56px Arial, sans-serif';
  ctx.fillText('HELLO CANVAS', 30, 125, 400);
  ctx.textAlign = 'start'; // start, end, left, right, center
  ctx.textBaseline = 'handing'; //top, middle, bottom, handing, alphabetic, ideographic
  ctx.lineWidth = 3;
  ctx.strokeText('HELLO CANVAS', 30, 50);
  //END FIRST CANVAS DRAWING

   //SHADOWS IN CANVAS
   shadow.fillStyle = '#a827b8';
   shadow.fillRect(50, 50, 100, 100);
   shadow.shadowColor = 'rgba(0,0,0,1)';
   shadow.shadowOffsetX = 2;
   shadow.shadowOffsetY = 2;
   shadow.shadowBlur = 3;
   shadow.fillRect(200, 50, 100, 100);
   //END SHADOWS IN CANVAS

   //TRANSFORMATION EFFECTS
   transform.fillStyle = '#219f90';
   transform.fillRect(50, 50, 100, 100);
   transform.setTransform(1, 0.2, 0.2, 1, 30, -20);
   // transform(xScale, ySkew, xSkew, yScale, xTrans, yTrans)
   // Default transform matrix is (1, 0, 0, 1, 0, 0)

  //  transform.translate(0, 50);

  //  transform.rotate(0.12);

  //  transform.scale(.5, .5); //first(X)__second(Y)__default scale is 1, 1
   transform.fillRect(200, 50, 100, 100);
   transform.fillRect(350, 50, 100, 100);
   //END TRANSFORMATION EFFECTS

   //GLOBAL COMPOSITING
   // globalAlpha = 0.0 - 1.0;
   // globalCompositeOperation = source-atop || source-in || source-out || source-over (default) || destination-atop || destination-in || destination-out || destination-over || lighter || copy || xor
   compos.globalAlpha = 1; //TRANSPARENT LEVEL
   compos.fillStyle = '#E91E63';
   compos.fillRect(20, 20, 100, 100);

   compos.globalCompositeOperation = "xor";

   compos.fillStyle = '#64DD17';
   compos.fillRect(50, 50, 100, 100);

   //END GLOBAL COMPOSITING
}
window.onload = draw;

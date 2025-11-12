var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
canvas.width=250;
canvas.height=250;
var circlesNum=500;
var circles=[];
var gravity=0.5;

function Circle(x,y,dx,dy,radios){
  this.x=x;
  this.y=y;
  this.dx=dx;
  this.dy=dy;
  this.radios=radios;
  
this.draw= function()
{ ctx.beginPath();
ctx.arc(this.x, this.y,this.radios, 0, 2 * Math.PI);
ctx.strokeStyle = "red";
ctx.stroke();
ctx.fillStyle="blue"
ctx.fill();
ctx.closePath();
 } 
 
this.move= function(){
   if (this.x + this.radios > canvas.width || this.x - this.radios < 0) {
  this.x=canvas.width-this.radios;
  this.dx = -this.dx;
  
}
if (this.y + this.radios > canvas.height || this.y - this.radios < 0) {
  this.y=canvas.height-this.radios;
  this.dy = -this.dy;
};

this.x += this.dx;
this.y += this.dy;
   this.draw();
 
}
// this.draw()
}

 function update() {
  for(let i=0;i<circlesNum;i++){
  var x = Math.floor(Math.random() * canvas.width);
  var dx = 3;
  var y = Math.floor(Math.random() * canvas.height);
  var dy = 2;
  var radios = 2;
  circles.push(new Circle(x,y,dx,dy,radios))}};
  


function animate(){
ctx.clearRect(0, 0, canvas.width, canvas.height);
for(let i=0;i<circles.length;i++){
  circles[i].move();
 }
 requestAnimationFrame(animate);
}


update();
animate();


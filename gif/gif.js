const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");
let totalParticleNumber = 150;

class Particle{
    constructor() {
      this.x = Math.random() * (500 - 0) + 0;
      this.y = Math.random() * (400 - 0) + 0;
      this.r = 20;
    }
  
    bubble() {
      c.beginPath();
      c.fillStyle = "#ebd9fc";
      c.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      c.fill();
  
    }
  
    move() {
      this.x += Math.random() * (1 - -1) + -1;
      this.y += Math.random() * (1 - -1) + -1;
    }
}

  const particleArr = [];
  for (let i = 0; i < totalParticleNumber; i++) 
  {
    const obj = new Particle();
    particleArr.push(obj);
  }
  
  
  // game loop
  function animate() 
  {
  
    c.clearRect(0, 0, 500, 350);
  
    for (let i = 0; i < totalParticleNumber; i++)
    {
      particleArr[i].bubble();
     
      particleArr[i].move();
    }
  
    requestAnimationFrame(animate);
  }
  
  animate();
class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smoke= loadImage("sprites/smoke.png");
    this.trajectory=[]
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    
    super.display();
    if(this.body.velocity.x>10 && this.body.position.x>200){
    var position=[this.body.position.x,this.body.position.y]
    this.trajectory.push(position);
    }
    //this.trajectory = [[100,200],[110,210],[115,215]];
    //this.trajectory[0][0], this.trajectory[0][1]
    //this.trajectory[1][0], this.trajectory[1][1]
    //this.trajectory[2][0], this.trajectory[2][1]

    for(var i = 0; i<this.trajectory.length; i++){
      image(this.smoke,this.trajectory[i][0],this.trajectory[i][1]);
    }

  }
}

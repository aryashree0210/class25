class Bird extends BaseClass{

    constructor(x,y){

      //In child class constructoe - invoke parent class constructor - keyword used to invoke parent - super. 
      super(x,y,50,50);
      this.image = loadImage('sprites/bird.png');
    }

    display(){
      this.body.position.x = mouseX;
      this.body.position.y=mouseY;
      super.display();
    }
    
  };
  
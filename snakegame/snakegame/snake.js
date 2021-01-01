class block {
  constructor(x, y, col,a) {
    this.x = x;
    this.y = y;
    this.a = a;
    this.dir =0;
    this.col = col;
    this.pcv = 1;
    this.pch = 1;
  }

  inpu() {
    if (keyIsPressed === true) {
      if (keyCode === 87 && this.pcv) {
        this.dir = 1;//up 'w'
        this.pcv = 0;
        this.pch = 1;
      }else if( keyCode === 68 && this.pch){
        this.dir = 2;//right 'd'
        this.pcv = 1;
        this.pch = 0;
      }else if(keyCode == 65 && this.pch){
        this.dir = 3;//left 'a'
        this.pcv = 1;
        this.pch = 0;
      }else if(keyCode === 83 && this.pcv){
        this.dir = 4;//down 's'
        this.pcv = 0;
        this.pch = 1;
      }
    }
  }

move(){
    //move it
    if(this.dir === 1){
      this.y-=1;
    }else if(this.dir === 2){
      this.x+=1;
    }else if(this.dir === 3){
      this.x-=1;
    }else if(this.dir === 4){
      this.y+=1;
    }
  }

  show() {
    fill(this.col);
    square(this.x * this.a,this.y * this.a, this.a);
  }
}

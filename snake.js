(function(root){
  Beast = root.Beast = (root.Beast || {})

  Snake = Beast.Snake = function(){
    this.dir = "N";

    this.segments = [];
  };

  Snake.prototype.move = function(){

  };

  Snake.prototype.turn = function(){

  };

  Coord = Beast.Coord = function(){};


  Board = Beast.Board = function(){
    this.snake = new Snake(this);

  };

  Board.prototype.render = function(){

  };

})(this);
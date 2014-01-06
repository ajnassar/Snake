(function(root){
  SG = root.SG = (root.SG  || {})

  Snake = SG.Snake = function(board){
    this.dir = "N";
    var start = [20/2, 20/2]
    this.segments = [start];
  };

  Snake.prototype.move = function(){

  };

  Snake.prototype.turn = function(){

  };

  Coord = SG.Coord = function(){};


  Board = SG.Board = function(dimension){
    this.snake = new Snake(this);
    this.dimension = dimension;
    this.grid = []

    for(var i = 0; i < dimension; i++){
      this.grid.push([]);
      for(var j = 0; j < dimension; j++){
        this.grid[i].push("");
      }
    }
  };


})(this);
(function(root){
  var SG = root.SG = (root.SG || {});

  var View = SG.View = function(){
    this.board = new SG.Board(20);
    this.renderBoard();
    this.renderSnake();
    console.log(this.board);
  }

  View.prototype.renderBoard = function(){
    for(var i = 0; i < 20 ;i++ ){
      $('#grid').append("<div id = 'row"+ i +"' class ='row'></div>");
      for(var j = 0; j < 20 ;j++ ){
        $('#row' + i).append("<div id = 'cell"+ j +"' class = 'cell'></div>")
      }
    }

  }

  View.prototype.renderSnake = function(){
    var position = this.board.snake.segments
  }


})(this);
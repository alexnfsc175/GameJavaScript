function Game(options){
    if(!(this instanceof Game))
        return new Game(options);
    this._config(options);
    // while(!this.stoped()){
    //     this.update();
    //     this.draw();
    // }
}

Game.prototype._config = function ( options ){
    let self = this;
    options = options || {};
    this.name = options.name;
    this.fps = options.fps;
    this.width = options.width;
    this.height = options.height;
    this.i = 0;
}

Game.prototype.draw = function(context){
    var self = this;
    // console.log('draw');
    this.context.clearRect(0, 0, this.width, this.height);
    this.player.draw(this.context);
}

Game.prototype.update = function(){
    // console.log('update');
}

Game.prototype.run = function() {
    var self = this;
    this.loops = 0;
    this.skipTicks = 1000 / this.fps;
    this.maxFrameSkip = 10,
    this.nextGameTick = this.nextGameTick ? this.nextGameTick : (new Date).getTime();
    this.lastGameTick;


      while ((new Date).getTime() > this.nextGameTick) {
        self.update();
        self.nextGameTick += self.skipTicks;
        self.loops++;      
      }
      if (this.loops) self.draw();
 
  };

Game.prototype.stoped = function(){
    if(this.i > 1001)
        return true;
    ++this.i;
    return false;
}

Game.prototype.start = function() {
    let self = this;
    this.canvas = document.createElement("canvas");
    this.canvas.width = this.width;
    this.canvas.height = this.height;

    this.context = this.canvas.getContext("2d");

    document.body.appendChild(this.canvas);

    this.player = new Player(this.context);

    this._onEachFrame(this.run.bind(this));
  };

Game.prototype._onEachFrame = (function(cb){
    let self = this;
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame;
    
    if (requestAnimationFrame) {
        return function(cb) {
        var _cb = function() { cb(); requestAnimationFrame(_cb); }
        _cb();
        };
    } else {
        return function(cb) {
        setInterval(cb, 1000 / self.fps);
        }
    }
})();



//////////////

// var Game = {
//     fps: 60,
//     width: 640,
//     height: 480
//   };

//   Game._onEachFrame = (function() {
//     var requestAnimationFrame = window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;

//     if (requestAnimationFrame) {
//      return function(cb) {
//         var _cb = function() { cb(); requestAnimationFrame(_cb); }
//         _cb();
//       };
//     } else {
//       return function(cb) {
//         setInterval(cb, 1000 / Game.fps);
//       }
//     }
//   })();
  
//   Game.start = function() {
//     Game.canvas = document.createElement("canvas");
//     Game.canvas.width = Game.width;
//     Game.canvas.height = Game.height;

//     Game.context = Game.canvas.getContext("2d");

//     document.body.appendChild(Game.canvas);

//     Game.player = new Player();

//     Game._onEachFrame(Game.run);
//   };
  
//   Game.run = (function() {
//     var loops = 0, skipTicks = 1000 / Game.fps,
//         maxFrameSkip = 10,
//         nextGameTick = (new Date).getTime(),
//         lastGameTick;

//     return function() {
//       loops = 0;

//       while ((new Date).getTime() > nextGameTick) {
//         Game.update();
//         nextGameTick += skipTicks;
//         loops++;
//       }

//       if (loops) Game.draw();
//     }
//   })();
  
//   Game.draw = function() {
//     Game.context.clearRect(0, 0, Game.width, Game.height);
//     Game.player.draw(Game.context);
//   };
  
//   Game.update = function() { };
  
  window.addEventListener('keydown', function(event) {
    switch (event.keyCode) {
      case 37: // Left
        a.player.moveLeft();
      break;

      case 38: // Up
        a.player.moveUp();
      break;

      case 39: // Right
        a.player.moveRight();
      break;

      case 40: // Down
        a.player.moveDown();
      break;
    }
  }, false);
  
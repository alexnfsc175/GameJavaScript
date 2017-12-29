function Controls(options) {
    if (!(this instanceof Controls))
        return new Controls(options);
    this._config(options);
}

Controls.prototype._config = function (options) {
    let self = this;
    this.keys = new Keys()
    options = options || {};
}

Controls.prototype.listener = function( listen ){
    let self = this;
    window.addEventListener( 'keydown' , function (event) {
        switch (event.keyCode) {
            case self.keys.LEFT: // Left
                listen.moveLeft();
                break;
    
            case self.keys.UP: // Up
                listen.moveUp();
                break;
    
            case self.keys.RIGHT: // Right
                listen.moveRight();
                break;
    
            case self.keys.DOWN: // Down
                listen.moveDown();
                break;
        }
    }, false);
}

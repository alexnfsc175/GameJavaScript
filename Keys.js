function Keys(options) {
    if (!(this instanceof Keys))
        return new Keys(options);
    this._config(options);
}

Keys.prototype.LEFT = 37;
Keys.prototype.UP = 38;
Keys.prototype.RIGHT = 39;
Keys.prototype.DOWN = 40;

Keys.prototype._config = function (options) {
    let self = this;
    options = options || {};
}



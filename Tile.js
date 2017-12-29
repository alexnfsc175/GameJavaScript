function Tile(options) {
    var self = this;

    this.image = options.image;
	this.type = options.type;
	//tile types
	NORMAL = 0;
    BLOCKED = 1;
    
    this._config();
}

Tile.prototype._config = function(){
    if(!this.image || this.type)
        throw new Error('Missing parameter image or type');
    let image = new Image();
    image.src = this.image;
    this.image = image;
    this.image.ready = false;
    this.image.onload = this._setAssetReady.bind(this);
}

Tile.prototype._setAssetReady = function () {
    this.image.ready = true;
}
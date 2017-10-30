function Sprite(options) {
    var self = this;

    this.frameIndex = 0;
    this.tickCount = 0;
    this.ticksPerFrame = options.ticksPerFrame || 0;
    this.numberOfFrames = options.numberOfFrames || 1;
    this.col = options.col || 0;
    this.velocity = options.velocity || 0.01;
    this.scale = options.scale || 1;

    this.context = options.context;
    this.width = options.width;
    this.height = options.height;
    this.image = options.image;
    this.x = 0;
    this.y = 0;
    this._config();
}

Sprite.prototype._config = function () {
    var self = this;
    if (typeof this.image == "string") {
        let image = new Image();
        image.src = this.image;
        this.image = image;
        this.image.ready = false;
        this.image.onload = this._setAssetReady.bind(this);
    }
}

Sprite.prototype.setHeight = function(value){
    this.height = value;
}

Sprite.prototype.setWidth = function(value){
    this.width = value;
}

Sprite.prototype.setTicksPerFrame = function(value){
    this.ticksPerFrame = value;
}

Sprite.prototype._setAssetReady = function () {
    this.image.ready = true;
}


Sprite.prototype.update = function () {
    var self = this;
    this.tickCount += 1;

    if (this.tickCount > this.ticksPerFrame) {
        self.tickCount = 0;
        // If the current frame index is in range
        if (self.frameIndex < self.numberOfFrames - 1) {
            // Go to the next frame
            self.frameIndex += 1;
        } else {
            self.frameIndex = 0;
        }
    }
};

Sprite.prototype.setAnimation = function (col) {
    this.col = col;
}
Sprite.prototype.moveLeft = function () {
    this.x -= this.width * this.velocity;
}
Sprite.prototype.moveRight = function () {
    this.x += this.width * this.velocity;
}
Sprite.prototype.moveUp = function () {
    this.y -= this.height * this.velocity;
}
Sprite.prototype.moveDown = function () {
    this.y += this.height * this.velocity;
    // this.y += this.CHAR_WIDTH * 0.085;
}
Sprite.prototype.draw = function () {
    var self = this;
    this.context.clearRect(0, 0, this.width, this.height);

    // Draw the animation
    if (this.image.ready)
        this.context.drawImage(
            this.image,
            this.frameIndex * this.width / this.numberOfFrames,
            this.height * this.col,
            this.width / this.numberOfFrames,
            this.height,
            this.x,
            this.y,
            this.width * this.scale / this.numberOfFrames,
            this.height * this.scale);
}
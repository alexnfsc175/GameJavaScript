function Animation(context, spritesheet, frameSpeed, startFrame, endFrame) {
    let self = this;
    this.animationSequence = []; // array holding the order of the animation
    this.currentFrame = 0; // the current frame to draw
    this.counter = 0;
    this.context = context; 
    this.spritesheet = spritesheet;
    this.frameSpeed = frameSpeed; // keep track of frame rate
    this.hideCollisionBox = true;

    // start and end range for frames
    for (let frameNumber = startFrame; frameNumber <= endFrame; frameNumber++)
        this.animationSequence.push(frameNumber);
}

/**
 *  Update the animation
 */
Animation.prototype.update = function () {
    // update to the next frame if it is time
    if (this.counter == (this.frameSpeed - 1))
        this.currentFrame = (this.currentFrame + 1) % this.animationSequence.length;

    // update the counter
    this.counter = (this.counter + 1) % this.frameSpeed;
}

/**
 * Draw the current frame
 * @param {integer} x - X position to draw
 * @param {integer} y - Y position to draw
 */
Animation.prototype.draw = function (x, y) {
    // get the row and col of the frame
    let row = Math.floor(this.animationSequence[this.currentFrame] / this.spritesheet.framesPerRow);
    let col = Math.floor(this.animationSequence[this.currentFrame] % this.spritesheet.framesPerRow);

    if (!this.hideCollisionBox) {

        this.context.strokeStyle = "#ff0000";
        this.context.lineWidth = 2;
        this.context.strokeRect(x, y, this.spritesheet.frameWidth, this.spritesheet.frameHeight);

        this.context.font = "12px Arial";
        this.context.fillText(`X: ${x.toFixed(2)} Y: ${y.toFixed(2)}`, x + 3, y + 13);
        this.context.fillText(`w: ${this.spritesheet.frameWidth.toFixed(2)} h: ${this.spritesheet.frameHeight.toFixed(2)}`, this.spritesheet.frameWidth, this.spritesheet.frameHeight);
    }

    this.context.drawImage(this.spritesheet.image, col * this.spritesheet.frameWidth, row * this.spritesheet.frameHeight, this.spritesheet.frameWidth, this.spritesheet.frameHeight, x, y, this.spritesheet.frameWidth, this.spritesheet.frameHeight);
}

Animation.prototype.showCollisionBox = function () {
    this.hideCollisionBox = false;
}
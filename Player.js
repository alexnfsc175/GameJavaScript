function Player(context, velocity) {
    this.x = 0;
    this.y = 100;
    this.stoped = true;
    this.context = context;
    this.velocity = velocity;

    // this.sprite = new Sprite({     context: context,     width: 216,     height:
    // 96,     image: 'img/spritesheet2.png',     numberOfFrames: 3, ticksPerFrame:
    // 1,     velocity:0.025,     scale: 2 }); this.sprite = new Sprite({ context:
    // this.context,     width: 864,     height: 140, image: 'img/character.png',
    //  numberOfFrames: 8,     ticksPerFrame: 0.9,  // velocity: 0.025,
    // velocity: velocity,     scale: 1 });
    this.sprite = new SpriteSheet('img/character.png', 108, 140);
    this.walkRight = new Animation(this.context, this.sprite, 8, 0, 7);
    this.walkLeft = new Animation(this.context, this.sprite, 8, 8, 15);
    this.animation = this.walkRight;
    this._setControls();
    // this.sprite = new Sprite({     context: context,     width: 2000,     height:
    // 248,     image: 'img/HorseSpriteSheetWhite.png',     numberOfFrames: 5,
    // ticksPerFrame: 0.9,     velocity: 0.030,     scale: 0.5 }); this.sprite = new
    // Sprite({     context: context,     width: 60,     height: 30,     image:
    // 'img/playersprites.gif',     numberOfFrames: 5,     ticksPerFrame: 1,
    // velocity:0.25,     scale: 3 });

}

Player.prototype.RUNNING_RIGHT = 0;
Player.prototype.RUNNING_LEFT = 1;

Player.prototype.draw = function (context) {
    // if (this.stoped){     this.sprite.setTicksPerFrame(6); this.sprite.update();
    // } if(this.notOnScreen()){     console.log('Fora da tela'); }
    // this.sprite.draw();

    this.animation.update();

    this.animation.draw(this.x, this.y);

    this.checkPosition();
};

Player.prototype.checkPosition = function () {

    if (this.x - this.sprite.frameWidth > this.context.canvas.width) 
        this.x = -this.sprite.frameWidth

    if (this.x + this.sprite.frameWidth < 0) 
        this.x = this.context.canvas.width;
    
    if (this.y - this.sprite.frameHeight > this.context.canvas.height) 
        this.y = -this.sprite.frameHeight;

    if (this.y + this.sprite.frameHeight < 0) 
        this.y = this.context.canvas.height;

}

Player.prototype.notOnScreen = function () {
    return this.x + this.context.canvas.width < 0 || this.y + this.context.canvas.height < 0;

}

Player.prototype.moveLeft = function () {

    // this.sprite.setAnimation(this.RUNNING_LEFT); this.sprite.update();
    // this.sprite.moveLeft(); console.table(this.sprite);
    this.animation = this.walkLeft;
    this.x -= 5 * this.velocity;
};

Player.prototype.moveRight = function () {

    // this.sprite.setAnimation(this.RUNNING_RIGHT); this.sprite.update();
    // this.sprite.moveRight(); console.table(this.sprite);
    this.animation = this.walkRight;
    this.x += 5 * this.velocity;
};

Player.prototype.moveUp = function () {

    // this.sprite.setAnimation(this.RUNNING_RIGHT); this.sprite.update();
    // this.sprite.moveUp(); console.table(this.sprite);
    this.y -= 5 * this.velocity;
};

Player.prototype.moveDown = function () {

    // this.sprite.setAnimation(this.RUNNING_LEFT); this.sprite.update();
    // this.sprite.moveDown(); console.table(this.sprite);
    this.y += 5 * this.velocity;
};

Player.prototype._setControls = function (controls) {
    this.controls = new Controls();
    this
        .controls
        .listener(this);

}

Player.prototype.showCollisionBox = function () {
    this
        .sprite
        .showCollisionBox();
}
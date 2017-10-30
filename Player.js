function Player(context) {
    this.x = 0;
    this.y = 100;
    this.stoped = true;

    // this.sprite = new Sprite({
    //     context: context,
    //     width: 216,
    //     height: 96,
    //     image: 'img/spritesheet2.png',
    //     numberOfFrames: 3,
    //     ticksPerFrame: 1,
    //     velocity:0.025,
    //     scale: 2
    // });
    this.sprite = new Sprite({
        context: context,
        width: 864,
        height: 140,
        image: 'img/character.png',
        numberOfFrames: 8,
        ticksPerFrame: 0.9,
        velocity: 0.020,
        scale: 3.5
    });
    // this.sprite = new Sprite({
    //     context: context,
    //     width: 2000,
    //     height: 248,
    //     image: 'img/HorseSpriteSheetWhite.png',
    //     numberOfFrames: 5,
    //     ticksPerFrame: 0.9,
    //     velocity: 0.030,
    //     scale: 0.5
    // });

    // this.sprite = new Sprite({
    //     context: context,
    //     width: 60,
    //     height: 30,
    //     image: 'img/playersprites.gif',
    //     numberOfFrames: 5,
    //     ticksPerFrame: 1,
    //     velocity:0.25,
    //     scale: 3
    // });
    
}


Player.prototype.draw = function (context) {
    if (this.stoped){
        this.sprite.setTicksPerFrame(6);
        this.sprite.update();
    }

    this.sprite.draw();
};


Player.prototype.moveLeft = function () {

    this.sprite.setAnimation(1);
    this.sprite.update();
    this.sprite.moveLeft();
    // console.table(this.sprite);
};

Player.prototype.moveRight = function () {

    this.sprite.setAnimation(0);
    this.sprite.update();
    this.sprite.moveRight();
    // console.table(this.sprite);
};

Player.prototype.moveUp = function () {

    this.sprite.setAnimation(0);
    this.sprite.update();
    this.sprite.moveUp();
    // console.table(this.sprite);
};

Player.prototype.moveDown = function () {

    this.sprite.setAnimation(1);
    this.sprite.update();
    this.sprite.moveDown();
    // console.table(this.sprite);
};
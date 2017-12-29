function TileMap(options) {
    //position
    this.x;
    this.y;

    // bounds
    this.xmin;
    this.ymin;
    this.xmax;
    this.ymax;

    this.tween;

    //map
    this.map = [][];
    this.tileSize;
    this.numRows;
    this.numCols;
    this.width;
    this.height;

    //tileset
    this.tileset;
    this.numTilesAcross;
    this.tiles = [][];

    // drawing
    this.rowOffset;
    this.colOffset;
    this.numRowsToDraw;
    this.numColsToDraw;
    this.GameHEIGHT;
    this.GameWIDTH;
    this._config();
}

TileMap.prototype._config = function () {
    this.numRowsToDraw = this.GameHEIGHT / this.tileSize + 2;
    this.numColsToDraw = this.GameWIDTH / this.tileSize + 2;
    this.tween = 0.07;

    let tileset = new Image();
    tileset.src = this.tileset;
    this.tileset = tileset;
    this.tileset.ready = false;
    this.tileset.onload = this._setAssetReady.bind(this);
}

TileMap.prototype._setAssetReady = function ( ){
    this.tileset = true;
} 

TileMap.prototype.loadTiles = function (){
    
    try{
        
        this.numTilesAcross = this.tileset.width / this.tileSize;
        this.tiles = new Tile[2][numTilesAcross];
        
        let subimage;
        for(let col = 0; col < this.numTilesAcross; col++ ){
            subimage = tileset.getSubimage(
                       col * tileSize, 
                       0, 
                       tileSize, 
                       tileSize
                     );
            tiles[0][col] = new Tile(subimage, Tile.NORMAL);
            subimage = tileset.getSubimage(
                       col * tileSize, 
                       tileSize, 
                       tileSize, 
                       tileSize
                     );
            tiles[1][col] = new Tile(subimage, Tile.BLOCKED);
            
        }
        
    }catch(Exception e){
        e.printStackTrace();
    }
}
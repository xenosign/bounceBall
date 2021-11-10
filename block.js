export class Block {
    constructor(stageWidth, stageHeight) {
        this.rand = Math.random();

        this.width = this.rand * stageWidth;
        this.height = this.rand * stageHeight / 8;
        
        this.x = Math.random() * (stageWidth - this.width);
        this.y = Math.random() * (stageHeight - this.height);
        
        this.maxX = this.x + this.width;
        this.maxY = this.y + this.height;
    }

    draw(ctx) {
        ctx.fillStyle = '#ff384e';
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fill();

    
    }
}
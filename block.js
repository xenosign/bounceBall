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

        ctx.fillStyle = '#190f3a';
        ctx.beginPath();
        ctx.moveTo(this.x, this.maxY);
        ctx.lineTo(this.x - this.width / 8, this.maxY + this.height * 1.5);
        ctx.lineTo(this.maxX - this.width / 8, this.maxY + this.height * 1.5);
        ctx.lineTo(this.maxX, this.maxY);
        ctx.fill();

        ctx.fillStyle = '#9d0919';
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x - this.width / 8, this.y + this.height * 1.5);
        ctx.lineTo(this.x - this.width / 8, this.y + this.height * 1.5 + this.height);
        ctx.lineTo(this.x, this.maxY);
        ctx.fill();
    }
}
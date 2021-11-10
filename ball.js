export class Ball {
    constructor(stageWidth, stageHeight, radius, speed, block) {
        this.radius = radius;
        this.vx = speed;
        this.vy = speed;

        const diameter = this.radius * 2;

        this.block = block;

        this.bool = true;

        

        while(this.bool) {
            this.x = radius + (Math.random() * (stageWidth - diameter));
            this.y = radius + (Math.random() * (stageHeight - diameter));    

            if (this.x >= block.x - radius && this.x <= block.x + block.width + radius && this.y >= block.y - radius && this.y <= block.y + block.height + radius) {
                this.bool = true;
            } else {
                this.bool = false;
            }
        }
    }

    draw(ctx, stageWidth, stageHeight, block) {
        this.x += this.vx;
        this.y += this.vy;
        
        this.bounceWindow(stageWidth, stageHeight);
        
        this.bounceBlock(block);

        ctx.fillStyle = '#fdd700';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
    }

    bounceWindow(stageWidth, stageHeight) {
        const minX = this.radius;
        const maxX = stageWidth - this.radius;
        const minY = this.radius;
        const maxY = stageHeight - this.radius;

        
        if (this.x <= minX || this.x >= maxX ) {
            this.vx *= -1;
            this.x += this.vx;            
        } else if (this.y <= minY || this.y >= maxY ) {
            this.vy *= -1;
            this.y += this.vy;
        } 

        
        
    }

    bounceBlock(block) {
        const blockLeft = block.x - this.radius;
        const blockRight = block.x + block.width + this.radius;
        const blockTop = block.y - this.radius;
        const blockBotttom = block.y + block.height + this.radius;
        
        
        if (this.x >= blockLeft && this.x <= blockRight && this.y >= blockTop && this.y <= blockBotttom) {
            const gapX1 = Math.abs(blockLeft - this.x);
            const gapX2 = Math.abs(this.x - blockRight);
            const gapY1 = Math.abs(blockTop - this.y);
            const gapY2 = Math.abs(this.y - blockBotttom);
            
            const minX = Math.min(gapX1, gapX2);
            const minY = Math.min(gapY1, gapY2);

            if (minX < minY) {
                this.vx *= -1;
                this.x += this.vx;
            } else {
                this.vy *= -1;
                this.y += this.vy;
                
            }
        }
    }
}
class Tree {
    /**
     * Fractal tree
     * @param {CanvasRenderingContext2D} ctx2d 
     * @param {Vector2} origin
     */
    constructor(ctx2d, origin, options = {
        branchLength: 100,
        levels: 10,
        leanFactor: 15,
        growthFactor: 0.8
    }) {
        this.ctx = ctx2d;
        this.origin = origin;
        this.cfg = options;
    }

    setConfig(config, value) {
        this.cfg[config] = value;
    }

    drawTree() {
        // Clear canvas
        this.ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        // Start tree
        this.drawBranch(this.cfg.levels, origin, 90, this.cfg.branchLength);
    }

    /**
     * Draws a tree branch in the tree's canvas context.
     * @param {number} level Branch level
     * @param {Vector2} origin Origin vector
     * @param {number} direction Direction in degrees
     * @param {number} subBranches Amount of sub branches
     */
    drawBranch(level, origin, direction, length) {
        // Branch existance conditions
        if (level < 1) return;
        level--;

        // Canvas context
        const ctx = this.ctx;
        
        // Branch properties
        const angle  = degToRad(direction);

        // Calculate end vector
        const target = new Vector2(
            origin.x + Math.cos(angle) * length,
            origin.y - Math.sin(angle) * length
        );
        
        // Make path
        ctx.beginPath();
        ctx.moveTo(origin.x, origin.y);
        ctx.lineTo(target.x, target.y);

        // Draw path
        this.ctx.stroke();

        // Make new branches
        const nextLean = this.cfg.leanFactor;
        const nextLength = length * this.cfg.growthFactor

        this.drawBranch(level, target, direction + nextLean, nextLength);
        this.drawBranch(level, target, direction - nextLean, nextLength);

        return target;
    }
}
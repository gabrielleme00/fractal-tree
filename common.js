const degToRad = degrees => degrees * (Math.PI / 180);

const radToVec2 = radians => {
    return new Vector2(
        +Math.round(Math.cos(radians)),
        -Math.round(Math.sin(radians))
    );
}

const degToVec2 = degrees => radToVec2(degToRad(degrees));

class Vector2 {
    /**
     * 2D Vector
     * @param {number} x Horizontal point
     * @param {number} y Vertical point
     */
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    static up = () => {
        return new Vector2(0, -1);
    }

    static down = () => {
        return new Vector2(0, 1);
    }

    static left = () => {
        return new Vector2(-1, 0);
    }

    static right = () => {
        return new Vector2(1, 0);
    }
}
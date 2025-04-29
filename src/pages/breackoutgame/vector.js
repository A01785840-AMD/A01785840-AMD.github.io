/**
 * Vector class for 2D position and velocity representation
 */
export class Vector {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    add(vector) {
        return new Vector(this.x + vector.x, this.y + vector.y);
    }

    subtract(vector) {
        return new Vector(this.x - vector.x, this.y - vector.y);
    }

    multiply(scalar) {
        return new Vector(this.x * scalar, this.y * scalar);
    }

    getMagnitude() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    normalize() {
        const magnitude = this.getMagnitude();
        if (magnitude === 0) return new Vector(0, 0);
        return new Vector(this.x / magnitude, this.y / magnitude);
    }

    setMagnitude(magnitude) {
        const normalized = this.normalize();
        return normalized.multiply(magnitude);
    }
}
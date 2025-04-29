import { Vector } from "@pages/breackoutgame/vector.js";
/**
 * Ball class represents the game ball
 */
export class Ball {
    constructor(x, y, radius = 8) {
        this.position = new Vector(x, y);
        this.velocity = new Vector(0, 0);
        this.radius = radius;
        this.color = '#ffffff';
        this.initialSpeed = 300;
        this.maxSpeed = 600;
    }


    launch() {

        const angle = (Math.random() * 120 - 60) * Math.PI / 180;
        this.velocity = new Vector(Math.cos(angle), -Math.sin(angle)).setMagnitude(this.initialSpeed);
    }


    reset(paddlePosition) {
        this.position = new Vector(paddlePosition.x, paddlePosition.y - this.radius - 5);
        this.velocity = new Vector(0, 0);
    }


    update(dt) {

        const movement = this.velocity.multiply(dt);
        this.position = this.position.add(movement);
    }


    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
    }
}

/**
 * Paddle class represents the player-controlled paddle
 */
export class Paddle {
    constructor(x, y, width = 100, height = 15) {
        this.position = new Vector(x, y);
        this.width = width;
        this.height = height;
        this.color = '#ffffff';
        this.speed = 500;
        this.velocity = new Vector(0, 0);
    }


    moveLeft() {
        this.velocity.x = -this.speed;
    }


    moveRight() {
        this.velocity.x = this.speed;
    }


    stop() {
        this.velocity.x = 0;
    }


    update(dt, canvasWidth) {

        this.position.x += this.velocity.x * dt;


        if (this.position.x < this.width / 2) {
            this.position.x = this.width / 2;
        } else if (this.position.x > canvasWidth - this.width / 2) {
            this.position.x = canvasWidth - this.width / 2;
        }
    }


    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(
            this.position.x - this.width / 2,
            this.position.y - this.height / 2,
            this.width,
            this.height
        );
    }


    get top() {
        return this.position.y - this.height / 2;
    }


    get left() {
        return this.position.x - this.width / 2;
    }


    get right() {
        return this.position.x + this.width / 2;
    }
}

/**
 * Block class represents a breakable block
 */
export class Block {
    constructor(x, y, width, height) {
        this.position = new Vector(x, y);
        this.width = width;
        this.height = height;
        this.color = '#ffffff';
        this.active = true;
    }


    draw(ctx) {
        if (!this.active) return;

        ctx.fillStyle = this.color;
        ctx.fillRect(
            this.position.x - this.width / 2,
            this.position.y - this.height / 2,
            this.width,
            this.height
        );
    }


    containsPoint(x, y) {
        if (!this.active) return false;

        return (
            x >= this.position.x - this.width / 2 &&
            x <= this.position.x + this.width / 2 &&
            y >= this.position.y - this.height / 2 &&
            y <= this.position.y + this.height / 2
        );
    }


    get boundaries() {
        return {
            left: this.position.x - this.width / 2,
            right: this.position.x + this.width / 2,
            top: this.position.y - this.height / 2,
            bottom: this.position.y + this.height / 2
        };
    }
}
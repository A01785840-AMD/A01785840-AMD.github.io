import { Ball, Block, Paddle } from "@pages/breackoutgame/game-objects.js";
import styles from '@pages/breackoutgame/breakout.module.css'

/**
 * Breakout Game
 * Main game logic and controller
 */
export default class BreakoutGame {
    constructor() {
        this.gameState = 'setup';
        this.lives = 3;
        this.level = 1;
        this.blocksDestroyed = 0;
        this.totalBlocks = 0;

        this.paddle = null;
        this.ball = null;
        this.blocks = [];

        this.lastTime = 0;
        this.animationFrameId = null;

        this.config = {
            rows: 7, columns: 13, blockPadding: 2
        };

        this.blockColors = ['#ff6b6b', '#ff8e72', '#ffdd57', '#48c774', '#4d7cff', '#9e7cff', '#00d1b2',];

        this.keys = {
            left: false, right: false
        };
    }

    init() {
        this.canvas = document.getElementById('gameCanvas');
        this.ctx = this.canvas.getContext('2d');

        this.canvas.width = 600;
        this.canvas.height = 500;

        document.addEventListener('keydown', this.handleKeyDown.bind(this));
        document.addEventListener('keyup', this.handleKeyUp.bind(this));


        this.canvas.addEventListener('mousemove', this.handleMouseMove.bind(this));
        this.canvas.addEventListener('touchmove', this.handleTouchMove.bind(this), { passive: false });


        document.getElementById('startButton').addEventListener('click', this.handleStartButton.bind(this));
        document.getElementById('pauseButton').addEventListener('click', this.togglePause.bind(this));
    }


    handleKeyDown(e) {
        if (e.key === 'ArrowLeft' || e.key === 'a') {
            this.keys.left = true;
        }
        if (e.key === 'ArrowRight' || e.key === 'd') {
            this.keys.right = true;
        }
        if (e.key === ' ' && (this.gameState === 'setup' || this.gameState === 'ready')) {
            this.launchBall();
        }
        if (e.key === 'p') {
            this.togglePause();
        }
    }


    handleKeyUp(e) {
        if (e.key === 'ArrowLeft' || e.key === 'a') {
            this.keys.left = false;
        }
        if (e.key === 'ArrowRight' || e.key === 'd') {
            this.keys.right = false;
        }
    }


    handleMouseMove(e) {
        if (this.gameState !== 'running' && this.gameState !== 'ready') return;

        const rect = this.canvas.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;


        this.paddle.position.x = mouseX;


        if (this.gameState === 'ready' && this.ball.velocity.getMagnitude() === 0) {
            this.ball.position.x = mouseX;
        }
    }


    handleTouchMove(e) {
        if (this.gameState !== 'running' && this.gameState !== 'ready') return;

        e.preventDefault();
        const rect = this.canvas.getBoundingClientRect();
        const touchX = e.touches[0].clientX - rect.left;

        this.paddle.position.x = touchX;

        if (this.gameState === 'ready' && this.ball.velocity.getMagnitude() === 0) {
            this.ball.position.x = touchX;
        }
    }

    handleStartButton() {
        if (['gameover', 'victory', 'setup', 'ready', 'running'].includes(this.gameState)) {
            const rowsInput = document.getElementById('rows');
            const columnsInput = document.getElementById('columns');

            this.config.rows = Math.max(1, Math.min(10, parseInt(rowsInput.value) || 7));
            this.config.columns = Math.max(1, Math.min(15, parseInt(columnsInput.value) || 13));

            rowsInput.value = this.config.rows;
            columnsInput.value = this.config.columns;

        }

        if (this.gameState === 'gameover' || this.gameState === 'victory' || this.gameState === 'setup') {
            this.resetGame();
        } else if (this.gameState === 'ready') {
               this.launchBall();
        } else if (this.gameState === 'paused') {
            this.resumeGame();
        } else if (this.gameState === 'running') {
            this.gameState = 'setup';

            this.cancelAnimation();
            document.getElementById('startButton').textContent = 'Start Game';
            this.resetGame();
        }
    }


    togglePause() {
        if (this.gameState === 'running') {
            this.pauseGame();
        } else if (this.gameState === 'paused') {
            this.resumeGame();
        }
    }


    pauseGame() {
        if (this.gameState === 'running') {
            this.gameState = 'paused';
            this.cancelAnimation();
            this.showMessage('PAUSED');
            document.getElementById('pauseButton').textContent = 'Resume';
        }
    }


    resumeGame() {
        if (this.gameState === 'paused') {
            this.gameState = 'running';
            this.hideMessage();
            this.lastTime = performance.now();
            this.startAnimation();
            document.getElementById('pauseButton').textContent = 'Pause';
        }
    }


    launchBall() {
        if (this.gameState === 'ready') {
            this.ball.launch();
            this.gameState = 'running';
            document.getElementById('startButton').textContent = 'Restart';
        }
    }

    run() {
        this.resetGame();
    }

    stop() {
        this.hideMessage();
        this.cancelAnimation();
    }

    resetGame() {
        this.lives = 3;
        this.level = 1;
        this.blocksDestroyed = 0;
        this.gameState = 'ready';

        this.updateUI();
        document.getElementById('startButton').textContent = 'Launch Ball';
        document.getElementById('pauseButton').textContent = 'Pause';
        this.hideMessage();

        this.initGameObjects();

        this.cancelAnimation();
        this.lastTime = performance.now();
        this.startAnimation();

        this.ball.reset(this.paddle.position);
    }

    initGameObjects() {
        this.paddle = new Paddle(this.canvas.width / 2, this.canvas.height - 30, 100, 15);
        this.ball = new Ball(this.canvas.width / 2, this.canvas.height - 50, 8);

        this.createBlocks();
    }

    createBlocks() {
        this.blocks = [];

        const blockWidth = (this.canvas.width - (this.config.columns + 1) * this.config.blockPadding) / this.config.columns;
        const blockHeight = 20;
        const startY = 50;

        for (let row = 0; row < this.config.rows; row++) {
            const color = this.blockColors[row % this.blockColors.length];

            for (let col = 0; col < this.config.columns; col++) {

                const x = this.config.blockPadding + col * (blockWidth + this.config.blockPadding) + blockWidth / 2;
                const y = startY + row * (blockHeight + this.config.blockPadding) + blockHeight / 2;


                const block = new Block(x, y, blockWidth, blockHeight);
                block.color = color;
                this.blocks.push(block);
            }
        }

        this.totalBlocks = this.blocks.length;
    }

    startAnimation() {
        this.animationFrameId = requestAnimationFrame(this.gameLoop.bind(this));
    }


    cancelAnimation() {
        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
            this.animationFrameId = null;
        }
    }


    gameLoop(timestamp) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        const deltaTime = (timestamp - this.lastTime) / 1000;
        this.lastTime = timestamp;
        const dt = Math.min(deltaTime, 0.033);

        this.update(dt);
        this.draw();

        this.animationFrameId = requestAnimationFrame(this.gameLoop.bind(this));
    }


    update(dt) {
        if (this.gameState !== 'running') {

            if (this.gameState === 'ready') {
                this.updatePaddleMovement(dt);


                this.ball.position.x = this.paddle.position.x;
                this.ball.position.y = this.paddle.top - this.ball.radius;
            }
            return;
        }


        this.updatePaddleMovement(dt);
        this.ball.update(dt);
        this.checkCollisions();


        if (this.blocksDestroyed >= this.totalBlocks) {
            this.victory();
        }
    }


    updatePaddleMovement(dt) {
        this.paddle.velocity.x = 0;

        if (this.keys.left) {
            this.paddle.moveLeft();
        }
        if (this.keys.right) {
            this.paddle.moveRight();
        }

        this.paddle.update(dt, this.canvas.width);
    }


    checkCollisions() {
        this.checkWallCollisions();
        this.checkPaddleCollision();
        this.checkBlockCollisions();
    }


    checkWallCollisions() {
        if (this.ball.position.x - this.ball.radius < 0) {
            this.ball.position.x = this.ball.radius;
            this.ball.velocity.x = Math.abs(this.ball.velocity.x);
        }

        if (this.ball.position.x + this.ball.radius > this.canvas.width) {
            this.ball.position.x = this.canvas.width - this.ball.radius;
            this.ball.velocity.x = -Math.abs(this.ball.velocity.x);
        }

        if (this.ball.position.y - this.ball.radius < 0) {
            this.ball.position.y = this.ball.radius;
            this.ball.velocity.y = Math.abs(this.ball.velocity.y);
        }

        if (this.ball.position.y + this.ball.radius > this.canvas.height) {
            this.loseLife();
        }
    }


    checkPaddleCollision() {
        const paddleTop = this.paddle.top;
        const paddleLeft = this.paddle.left;
        const paddleRight = this.paddle.right;

        if (this.ball.velocity.y > 0 && this.ball.position.y + this.ball.radius >= paddleTop && this.ball.position.y - this.ball.radius <= paddleTop + this.paddle.height && this.ball.position.x >= paddleLeft && this.ball.position.x <= paddleRight) {

            const impactPosition = (this.ball.position.x - this.paddle.position.x) / (this.paddle.width / 2);
            const bounceAngle = impactPosition * Math.PI / 3;

            const speed = this.ball.velocity.getMagnitude();
            this.ball.velocity.x = Math.sin(bounceAngle) * speed;
            this.ball.velocity.y = -Math.cos(bounceAngle) * speed;

            this.ball.velocity.x += (Math.random() - 0.5) * 20;
            this.ball.position.y = paddleTop - this.ball.radius;

            const newSpeed = Math.min(this.ball.maxSpeed, speed * 1.01);
            this.ball.velocity = this.ball.velocity.setMagnitude(newSpeed);
        }
    }


    checkBlockCollisions() {
        for (let i = 0; i < this.blocks.length; i++) {
            const block = this.blocks[i];

            if (!block.active) continue;

            const bounds = block.boundaries;

            if (this.checkCircleRectCollision(this.ball.position.x, this.ball.position.y, this.ball.radius, bounds.left, bounds.top, block.width, block.height)) {

                const dx = this.ball.position.x - block.position.x;
                const dy = this.ball.position.y - block.position.y;

                const absDX = Math.abs(dx) - block.width / 2;
                const absDY = Math.abs(dy) - block.height / 2;

                if (absDX > absDY) {
                    this.ball.velocity.x = dx > 0 ? Math.abs(this.ball.velocity.x) : -Math.abs(this.ball.velocity.x);
                } else {
                    this.ball.velocity.y = dy > 0 ? Math.abs(this.ball.velocity.y) : -Math.abs(this.ball.velocity.y);
                }

                block.active = false;
                this.blocksDestroyed++;
                this.updateUI();

                this.ball.velocity.x += (Math.random() - 0.5) * 10;

                break;
            }
        }
    }


    checkCircleRectCollision(circleX, circleY, radius, rectX, rectY, rectWidth, rectHeight) {
        const closestX = Math.max(rectX, Math.min(circleX, rectX + rectWidth));
        const closestY = Math.max(rectY, Math.min(circleY, rectY + rectHeight));

        const distanceX = circleX - closestX;
        const distanceY = circleY - closestY;
        const distanceSquared = distanceX * distanceX + distanceY * distanceY;

        return distanceSquared <= (radius * radius);
    }


    loseLife() {
        this.lives--;
        this.updateUI();

        if (this.lives <= 0) {
            this.gameOver();
        } else {

            this.ball.reset(this.paddle.position);
            this.gameState = 'ready';
            document.getElementById('startButton').textContent = 'Launch Ball';
        }
    }


    draw() {
        for (const block of this.blocks) {
            block.draw(this.ctx);
        }

        this.paddle.draw(this.ctx);
        this.ball.draw(this.ctx);
    }


    updateUI() {
        document.getElementById('blocks-destroyed').textContent = this.blocksDestroyed;
        document.getElementById('level').textContent = this.level.toString().padStart(2, '0');

        for (let i = 1; i <= 3; i++) {
            const lifeElement = document.getElementById(`life${i}`);
            if (i <= this.lives) {
                lifeElement.classList.remove(styles.lost);
            } else {
                lifeElement.classList.add(styles.lost);
                console.log("HEllo")
            }
        }
    }


    showMessage(message) {
        const messageElement = document.getElementById('game-message');
        messageElement.textContent = message;
        messageElement.style.display = 'block';
    }


    hideMessage() {
        const messageElement = document.getElementById('game-message');
        messageElement.style.display = 'none';
    }


    gameOver() {
        this.gameState = 'gameover';
        this.cancelAnimation();
        this.showMessage('GAME OVER');
        document.getElementById('startButton').textContent = 'New Game';
    }


    victory() {
        this.gameState = 'victory';
        this.cancelAnimation();
        this.showMessage('YOU WIN!');
        document.getElementById('startButton').textContent = 'New Game';
    }
}

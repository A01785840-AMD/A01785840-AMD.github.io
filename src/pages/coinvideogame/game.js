import imgCoinGold from "@pages/coinvideogame/goldCoin.jpg";
import imgCoinSilver from "@pages/coinvideogame/silverCoin.png";
import imgCharacterSpritesheet from "@pages/coinvideogame/sprites.png";


class Coin {
    constructor(x, y, img, frameSize = 32, frameCount = 8, frameDuration = 1 / 8) {
        this.x = x;
        this.y = y;
        this.img = img;

        this.frameWidth = frameSize;
        this.frameHeight = frameSize;
        this.frameCount = frameCount;
        this.frameDuration = frameDuration;

        this.frameIndex = 0;
        this.frameTimer = 0;
    }

    update(dt) {
        this.frameTimer += dt;
        if (this.frameTimer >= this.frameDuration) {
            this.frameTimer = 0;
            this.frameIndex = (this.frameIndex + 1) % this.frameCount;
        }
    }

    draw(ctx) {
        ctx.drawImage(
            this.img,
            this.frameIndex * this.frameWidth, 0,
            this.frameWidth, this.frameHeight,
            this.x, this.y,
            this.frameWidth, this.frameHeight
        );
    }
}

class Player {
    constructor(x, y, img) {
        this.img = img;
        this.x = x;
        this.y = y;
        this.width = 47;
        this.height = 64.5;
        this.speed = 100;

        this.direction = 0; // 0=up, 1=right, 2=down, 3=left
        this.frame = 0;
        this.frameCount = 3;
        this.frameTimer = 0;
        this.frameDuration = 1 / 6;
    }

    update(dt, input, canvasWidth, canvasHeight) {
        let dx = 0, dy = 0;

        if (input['arrowup'] || input['w']) {
            dy -= 1;
            this.direction = 0;
        }
        if (input['arrowright'] || input['d']) {
            dx += 1;
            this.direction = 1;
        }
        if (input['arrowdown'] || input['s']) {
            dy += 1;
            this.direction = 2;
        }
        if (input['arrowleft'] || input['a']) {
            dx -= 1;
            this.direction = 3;
        }

        const length = Math.hypot(dx, dy);
        if (length > 0) {
            dx /= length; dy /= length;
            this.x += dx * this.speed * dt;
            this.y += dy * this.speed * dt;

            this.x = Math.max(0, Math.min(this.x, canvasWidth - this.width));
            this.y = Math.max(0, Math.min(this.y, canvasHeight - this.height));

            this.frameTimer += dt;
            if (this.frameTimer >= this.frameDuration) {
                this.frameTimer = 0;
                this.frame = (this.frame + 1) % this.frameCount;
            }
        } else {
            this.frame = 1;
        }
    }

    draw(ctx) {
        ctx.drawImage(
            this.img,
            this.frame * this.width, this.direction * this.height,
            this.width, this.height,
            this.x, this.y,
            this.width, this.height
        );
    }
}


export default class GameCoin {
    constructor() {
        this.coinImage = new Image();
        this.imgCoinSilver = new Image();
        this.characterImage = new Image();

        this.coinImage.src = imgCoinGold;
        this.imgCoinSilver.src = imgCoinSilver;
        this.characterImage.src = imgCharacterSpritesheet;

        this.timestamp = 0;
        this.stopGame = false;
        this.win = false;

        this.coins = [];
        for (let i = 0; i < 10; i++) {
            this.coins.push(new Coin(
                Math.random() * (window.innerWidth - 32),
                Math.random() * (window.innerHeight - 32),
                (Math.floor(Math.random() * 3) === 0 ? this.coinImage : this.imgCoinSilver)
            ));
        }

        this.player = new Player(100, 100, this.characterImage);

        this.keys = {};
        window.addEventListener("keydown", e => this.keys[e.key.toLowerCase()] = true);
        window.addEventListener("keyup", e => this.keys[e.key.toLowerCase()] = false);
        window.addEventListener("resize", () => this.resize());
    }

    resize() {
        this.dimension = {
            width: window.innerWidth,
            height: window.innerHeight
        };
        this.canvas.width = this.dimension.width;
        this.canvas.height = this.dimension.height;
    }

    init() {
        this.canvas = document.getElementById('game');
        this.ctx = this.canvas.getContext('2d');
        this.resize();
    }

    run(timestamp) {
        const dt = (timestamp - this.timestamp) / 1000;
        this.timestamp = timestamp;

        this.update(dt || 0);
        this.draw();

        if (!this.stopGame) requestAnimationFrame(this.run.bind(this));
    }

    update(dt) {
        this.coins = this.coins.filter((coin) => {
            coin.update(dt);
            const collided = this.checkCollision(this.player, coin);
            return !collided;
        });

        this.player.update(dt, this.keys, this.canvas.width, this.canvas.height);

        if (this.coins.length === 0 && !this.win) {
            this.win = true;
        }
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = "#F6F8F7";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        for (const coin of this.coins) {
            coin.draw(this.ctx);
        }

        this.player.draw(this.ctx);

        if (this.win) {
            this.ctx.fillStyle = "#000";
            this.ctx.font = "bold 48px sans-serif";
            this.ctx.textAlign = "center";
            this.ctx.fillText("YOU WIN!!", this.canvas.width / 2, this.canvas.height / 2);
        }
    }

    checkCollision(player, coin) {
        return (
            player.x < coin.x + coin.frameWidth &&
            player.x + player.width > coin.x &&
            player.y < coin.y + coin.frameHeight &&
            player.y + player.height > coin.y
        );
    }

    resume() { this.stopGame = false; }
    stop() { this.stopGame = true; }
}

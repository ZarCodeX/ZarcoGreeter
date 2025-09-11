import { createCanvas, loadImage } from '@napi-rs/canvas';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function style1(user, guild, options = {}) {
    const canvas = createCanvas(1024, 450);
    const ctx = canvas.getContext('2d');

    const background = await loadImage(options.backgroundImage || path.join(__dirname, '../assets/images/bg.png'));
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    ctx.font = '100px "Bungee"';
    ctx.fillStyle = options.welcomeColor || '#FFFFFF';
    ctx.textAlign = 'center';
    ctx.fillText('WELCOME', canvas.width / 2, 120);

    const avatar = await loadImage(user.avatarURL);
    const avatarSize = 200;
    const avatarX = (canvas.width - avatarSize) / 2;
    const avatarY = 150;

    ctx.strokeStyle = options.avatarBorderColor || '#00A8FF';
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.arc(avatarX + avatarSize / 2, avatarY + avatarSize / 2, avatarSize / 2 + 5, 0, Math.PI * 2);
    ctx.stroke();

    ctx.save();
    ctx.beginPath();
    ctx.arc(avatarX + avatarSize / 2, avatarY + avatarSize / 2, avatarSize / 2, 0, Math.PI * 2);
    ctx.closePath();
    ctx.clip();
    ctx.drawImage(avatar, avatarX, avatarY, avatarSize, avatarSize);
    ctx.restore();

    ctx.font = '50px "Luckiest Guy"';
    ctx.fillStyle = options.usernameColor || '#FFFFFF';
    ctx.textAlign = 'center';
    ctx.fillText(user.username, canvas.width / 2, 400);

    return canvas.toBuffer('image/png');
}

export async function style2(user, guild, options = {}) {
    const canvas = createCanvas(1024, 450);
    const ctx = canvas.getContext('2d');

    const avatar = await loadImage(user.avatarURL);
    ctx.filter = 'blur(10px)';
    ctx.drawImage(avatar, -canvas.width/2, -canvas.height/2, canvas.width * 2, canvas.height * 2);
    ctx.filter = 'none';

    ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const avatarSize = 200;
    const avatarX = (canvas.width - avatarSize) / 2;
    const avatarY = 50;
    ctx.save();
    ctx.beginPath();
    ctx.arc(avatarX + avatarSize / 2, avatarY + avatarSize / 2, avatarSize / 2, 0, Math.PI * 2);
    ctx.closePath();
    ctx.clip();
    ctx.drawImage(avatar, avatarX, avatarY, avatarSize, avatarSize);
    ctx.restore();

    ctx.font = '70px "Bungee"';
    ctx.fillStyle = options.welcomeColor || '#FFFFFF';
    ctx.textAlign = 'center';
    ctx.fillText(`Welcome, ${user.username}!`, canvas.width / 2, 350);

    ctx.font = '40px "Luckiest Guy"';
    ctx.fillStyle = options.guildColor || '#B9BBBE';
    ctx.textAlign = 'center';
    ctx.fillText(`to ${guild}`, canvas.width / 2, 410);

    return canvas.toBuffer('image/png');
}

export async function style3(user, guild, options = {}) {
    const canvas = createCanvas(1024, 450);
    const ctx = canvas.getContext('2d');

    let background;
    try {
        background = options.backgroundImage
            ? await loadImage(options.backgroundImage)
            : await loadImage(path.join(__dirname, '../assets/images/bg.png'));
    } catch {
        background = await loadImage(path.join(__dirname, '../assets/images/bg.png'));
    }
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    const avatar = await loadImage(user.avatarURL);
    const avatarSize = 250;
    const avatarX = 50;
    const avatarY = (canvas.height - avatarSize) / 2;
    ctx.save();
    ctx.beginPath();
    ctx.arc(avatarX + avatarSize / 2, avatarY + avatarSize / 2, avatarSize / 2, 0, Math.PI * 2);
    ctx.closePath();
    ctx.clip();
    ctx.drawImage(avatar, avatarX, avatarY, avatarSize, avatarSize);
    ctx.restore();

    ctx.fillStyle = options.welcomeColor || '#FFFFFF';
    ctx.font = '60px "Bungee"';
    ctx.fillText('WELCOME', 350, 150);

    ctx.font = '80px "Luckiest Guy"';
    ctx.fillStyle = options.usernameColor || '#FFFFFF';
    ctx.fillText(user.username, 350, 250);

    ctx.font = '40px "Montserrat ExtraLight"';
    ctx.fillStyle = options.guildColor || '#FFFFFF';
    ctx.fillText(`to ${guild}`, 350, 320);

    return canvas.toBuffer('image/png');
}

export async function style4(user, guild, options = {}) {
    const canvas = createCanvas(1024, 450);
    const ctx = canvas.getContext('2d');

    let background;
    try {
        background = options.backgroundImage
            ? await loadImage(options.backgroundImage)
            : await loadImage(path.join(__dirname, '../assets/images/bg.png'));
    } catch {
        background = await loadImage(path.join(__dirname, '../assets/images/bg.png'));
    }
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    const avatar = await loadImage(user.avatarURL);
    const avatarSize = 200;
    const avatarX = (canvas.width - avatarSize) / 2;
    const avatarY = 100;
    ctx.save();
    ctx.beginPath();
    ctx.arc(avatarX + avatarSize / 2, avatarY + avatarSize / 2, avatarSize / 2, 0, Math.PI * 2);
    ctx.closePath();
    ctx.clip();
    ctx.drawImage(avatar, avatarX, avatarY, avatarSize, avatarSize);
    ctx.restore();

    ctx.font = '80px "Bungee"';
    ctx.fillStyle = options.usernameColor || '#FFFFFF';
    ctx.textAlign = 'center';
    ctx.fillText(user.username, canvas.width / 2, 380);

    return canvas.toBuffer('image/png');
}
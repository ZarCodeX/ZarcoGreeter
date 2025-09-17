import { style1, style2, style3, style4 } from '../src/index.mjs';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function main() {
    const user = {
        username: 'ZarCodeX',
        avatarURL: 'https://raw.githubusercontent.com/ZarCodeX/ZarCodeX/refs/heads/main/images/ZarCodeX%20(original).png', // Example avatar
    };

    const guild = 'ZarCodeX Community';

    try {
        // --- Basic Examples ---
        console.log('Generating basic examples...');
        const buffer1 = await style1(user, guild);
        fs.writeFileSync(path.join(__dirname, '..', 'assets', 'images', 'welcome-style1-basic.png'), buffer1);

        const buffer2 = await style2(user, guild);
        fs.writeFileSync(path.join(__dirname, '..', 'assets', 'images', 'welcome-style2-basic.png'), buffer2);

        const buffer3 = await style3(user, guild);
        fs.writeFileSync(path.join(__dirname, '..', 'assets', 'images', 'welcome-style3-basic.png'), buffer3);

        const buffer4 = await style4(user, guild);
        fs.writeFileSync(path.join(__dirname, '..', 'assets', 'images', 'welcome-style4-basic.png'), buffer4);
        console.log('✅ Generated basic examples (style1, style2, style3, style4).');

        // --- Customization Examples ---
        console.log('Generating customization examples...');

        // Example: Customizing colors in style1
        const s1_custom_colors = await style1(user, guild, {
            welcomeColor: '#00fff2ff',
            usernameColor: '#00ffddff',
            avatarBorderColor: '#00fff2ff', 
        });
        fs.writeFileSync(path.join(__dirname, '..', 'assets', 'images', 'welcome-style1-custom-colors.png'), s1_custom_colors);
        console.log('✅ Generated style1 with custom colors.');

        // Example: Customizing the background image in style1
        const s1_custom_bg = await style1(user, guild, {
            backgroundImage: 'https://raw.githubusercontent.com/ZarCodeX/ZarcoGreeter/refs/heads/main/assets/images/bg.png',
        });
        fs.writeFileSync(path.join(__dirname, '..', 'assets', 'images', 'welcome-style1-custom-bg.png'), s1_custom_bg);
        console.log('✅ Generated style1 with a custom background.');

        // Example: Customizing the background image in style2
        const s2_custom_bg = await style2(user, guild, {
            backgroundImage: 'https://raw.githubusercontent.com/ZarCodeX/ZarcoGreeter/refs/heads/main/assets/images/bg.png',
        });
        fs.writeFileSync(path.join(__dirname, '..', 'assets', 'images', 'welcome-style2-custom-bg.png'), s2_custom_bg);
        console.log('✅ Generated style2 with a custom background.');

        // Example: Customizing the background image in style3
        const s3_custom_bg = await style3(user, guild, {
            backgroundImage: 'https://raw.githubusercontent.com/ZarCodeX/ZarcoGreeter/refs/heads/main/assets/images/bg.png',
        });
        fs.writeFileSync(path.join(__dirname, '..', 'assets', 'images', 'welcome-style3-custom-bg.png'), s3_custom_bg);
        console.log('✅ Generated style3 with a custom background.');

        // Example: Customizing the background image in style4
        const s4_custom_bg = await style4(user, guild, {
            backgroundImage: 'https://raw.githubusercontent.com/ZarCodeX/ZarcoGreeter/refs/heads/main/assets/images/bg.png',
        });
        fs.writeFileSync(path.join(__dirname, '..', 'assets', 'images', 'welcome-style4-custom-bg.png'), s4_custom_bg);
        console.log('✅ Generated style4 with a custom background.');

        // Example: Fully customized style3
        const s3_fully_custom = await style3(user, guild, {
            backgroundImage: 'https://raw.githubusercontent.com/ZarCodeX/ZarcoGreeter/refs/heads/main/assets/images/bg.png',
            welcomeColor: '#69ffffff',
            usernameColor: '#FFFFFF',
            guildColor: '#ade4e6ff',
        });
        fs.writeFileSync(path.join(__dirname, '..', 'assets', 'images', 'welcome-style3-fully-custom.png'), s3_fully_custom);
        console.log('✅ Generated a fully customized style3 card.');

        // Example: Custom welcome text
        const s2_custom_text = await style2(user, guild, {
            text: 'Greetings',
        });
        fs.writeFileSync(path.join(__dirname, '..', 'assets', 'images', 'welcome-style2-custom-text.png'), s2_custom_text);
        console.log('✅ Generated style2 with custom text.');

    } catch (error) {
        console.error('Error generating welcome cards:', error);
    }
}

main();
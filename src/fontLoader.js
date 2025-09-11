import { GlobalFonts } from '@napi-rs/canvas';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function registerFonts() {
    const fontsDir = path.join(__dirname, '../assets/fonts');
    const fontFiles = fs.readdirSync(fontsDir);

    for (const fontFile of fontFiles) {
        const fontPath = path.join(fontsDir, fontFile);
        const fontName = path.basename(fontFile, path.extname(fontFile)).replace('-', ' ');
        GlobalFonts.registerFromPath(fontPath, fontName);
    }
}

export default registerFonts;
# ZarcoGreeter

ZarcoGreeter makes creating greeting card images in Node.js effortless and fully customizable.

![npm](https://img.shields.io/npm/v/zarcogreeter?style=for-the-badge) ![npm](https://img.shields.io/npm/l/zarcogreeter?style=for-the-badge) ![npm](https://img.shields.io/npm/dt/zarcogreeter?style=for-the-badge)

---

![Card](https://raw.githubusercontent.com/ZarCodeX/ZarcoGreeter/main/assets/images/card.png)

## 🌟 Features

- **Multiple Styles**: Choose from several pre-designed card styles.
- **Customizable**: Easily change colors and background images.
- **High Performance**: Built with `@napi-rs/canvas` for optimal speed.
- **Easy to Use**: Simple, intuitive API for generating cards programmatically.
- **ESM & CJS Support**: Use with both `import` and `require`.

## 🎨 Style Showcase

# 🟢 Background, colors, and text are customizable.

| Style 1 | Style 2 |
| :---: | :---: |
| ![Style 1](https://raw.githubusercontent.com/ZarCodeX/ZarcoGreeter/main/assets/images/welcome-style1-basic.png) | ![Style 2](https://raw.githubusercontent.com/ZarCodeX/ZarcoGreeter/main/assets/images/welcome-style2-basic.png) |

| Style 3 | Style 4 |
| :---: | :---: |
| ![Style 3](https://raw.githubusercontent.com/ZarCodeX/ZarcoGreeter/main/assets/images/welcome-style3-basic.png) | ![Style 4](https://raw.githubusercontent.com/ZarCodeX/ZarcoGreeter/main/assets/images/welcome-style4-basic.png) |

| Fully Customized |
| :---: |
| ![Customized](https://raw.githubusercontent.com/ZarCodeX/ZarcoGreeter/main/assets/images/welcome-style3-fully-custom.png) |

## 📦 Installation

```bash
npm install zarcogreeter
```

## 🚀 Usage

Here's a basic example of how to generate a welcome card using ES Modules:

```javascript
import { style1 } from 'zarcogreeter';
import fs from 'fs';

async function generateCard() {
    const user = {
        username: 'ZarCodeX',
        avatarURL: 'https://raw.githubusercontent.com/ZarCodeX/ZarCodeX/refs/heads/main/images/ZarCodeX%20(original).png',
    };

    const guild = 'My Awesome Server';

    const buffer = await style1(user, guild);
    fs.writeFileSync('welcome.png', buffer);
    console.log('Generated welcome card!');
}

generateCard();
```

## 🎨 Customization

You can customize the appearance of the cards by passing an options object to any style function.

### Custom Colors

```javascript
import { style3 } from 'zarcogreeter';

const buffer = await style3(user, guild, {
    welcomeColor: '#00FFFF', // Cyan
    usernameColor: '#00FFFF',
    guildColor: '#00FFFF',
});
```

### Custom Background Image

```javascript
import { style1 } from 'zarcogreeter';
import path from 'path';

const buffer = await style1(user, guild, {
    backgroundImage: path.join(__dirname, 'path/to/your/background.png'),
});
```

## 📚 API

The following style functions are available:

- `style1(user, guild, options)`
- `style2(user, guild, options)`
- `style3(user, guild, options)`
- `style4(user, guild, options)`

All functions return a `Promise` that resolves to a `Buffer` containing the PNG image data.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/ZarCodeX/ZarcoGreeter/issues).

## 📝 License

This project is [MIT](LICENSE) licensed.

## 👤 About the Author

- **Author**: ZarCodeX
- **Website**: [https://zarcodex.github.io](https://zarcodex.github.io)
- **Discord**: [https://discord.gg/6YVmxA4Qsf](https://discord.gg/6YVmxA4Qsf)
- **X (Twitter)**: [https://x.com/ZarCodeX](https://x.com/ZarCodeX)
- **GitHub Repo**: [https://github.com/ZarCodeX/ZarcoGreeter](https://github.com/ZarCodeX/ZarcoGreeter)

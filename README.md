# ZarcoGreeter

ZarcoGreeter makes creating greeting card images in Node.js effortless and fully customizable.

![npm](https://img.shields.io/npm/v/zarcogreeter?style=for-the-badge) ![npm](https://img.shields.io/npm/l/zarcogreeter?style=for-the-badge) ![npm](https://img.shields.io/npm/dt/zarcogreeter?style=for-the-badge)

---

![Card](https://raw.githubusercontent.com/ZarCodeX/ZarcoGreeter/main/assets/images/card.png)

## 🌟 Features

- **Multiple Styles**: Choose from several pre-designed card styles.
- **Customizable**: Easily change colors, text, and background images.
- **High Performance**: Built with `@napi-rs/canvas` for optimal speed.
- **Easy to Use**: Simple, intuitive API for generating cards programmatically.
- **ESM & CJS Support**: Use with both `import` and `require`.

## 🎨 Style Showcase

# 🟢 Background, colors, and text are customizable.

| Style 1 | Style 2 |
| :---: | :---: |
| ![Style 1](https://raw.githubusercontent.com/ZarCodeX/ZarcoGreeter/main/assets/images/welcome-style1-basic.png) | ![Style 2](https://raw.githubusercontent.com/ZarCodeX/ZarcoGreeter/main/assets/images/welcome-style2-basic.png) |
| Style 3 | Style 4 |
| ![Style 3](https://raw.githubusercontent.com/ZarCodeX/ZarcoGreeter/main/assets/images/welcome-style3-basic.png) | ![Style 4](https://raw.githubusercontent.com/ZarCodeX/ZarcoGreeter/main/assets/images/welcome-style4-basic.png) |

| Fully Customized |
| :---: |
| ![Customized](https://raw.githubusercontent.com/ZarCodeX/ZarcoGreeter/main/assets/images/welcome-style3-fully-custom.png) |

## 📦 Installation

```bash
npm install zarcogreeter
```

## 🚀 Usage & Examples

Below are some examples of how to use ZarcoGreeter. You can use either ES Modules (ESM) or CommonJS (CJS).

### Basic Usage (Style 1)

**ESM**
```javascript
import { style1 } from 'zarcogreeter';
import fs from 'fs';

async function generateCard() {
    const user = {
        username: 'ZarCodeX',
        avatarURL: 'https://raw.githubusercontent.com/ZarCodeX/ZarcoGreeter/refs/heads/main/assets/images/ZarCodeX%20(original).png',
    };
    const guild = 'My Awesome Server';

    const buffer = await style1(user, guild);
    fs.writeFileSync('welcome-style1-basic.png', buffer);
}

generateCard();
```

**CJS**
```javascript
const { style1 } = require('zarcogreeter');
const fs = require('fs');

async function generateCard() {
    const user = {
        username: 'ZarCodeX',
        avatarURL: 'https://raw.githubusercontent.com/ZarCodeX/ZarcoGreeter/refs/heads/main/assets/images/ZarCodeX%20(original).png',
    };
    const guild = 'My Awesome Server';

    const buffer = await style1(user, guild);
    fs.writeFileSync('welcome-style1-basic.png', buffer);
}

generateCard();
```

**Result:**

![Style 1 Basic](https://raw.githubusercontent.com/ZarCodeX/ZarcoGreeter/main/assets/images/welcome-style1-basic.png)

### Custom Background (Style 1)

**ESM**
```javascript
import { style1 } from 'zarcogreeter';
import fs from 'fs';

async function generateCard() {
    const user = {
        username: 'ZarCodeX',
        avatarURL: 'https://raw.githubusercontent.com/ZarCodeX/ZarcoGreeter/refs/heads/main/assets/images/ZarCodeX%20(original).png',
    };
    const guild = 'My Awesome Server';

    const buffer = await style1(user, guild, {
        backgroundImage: 'https://raw.githubusercontent.com/ZarCodeX/ZarcoGreeter/refs/heads/main/assets/images/bg.png',
    });
    fs.writeFileSync('welcome-style1-custom-bg.png', buffer);
}

generateCard();
```

**CJS**
```javascript
const { style1 } = require('zarcogreeter');
const fs = require('fs');

async function generateCard() {
    const user = {
        username: 'ZarCodeX',
        avatarURL: 'https://raw.githubusercontent.com/ZarCodeX/ZarcoGreeter/refs/heads/main/assets/images/ZarCodeX%20(original).png',
    };
    const guild = 'My Awesome Server';

    const buffer = await style1(user, guild, {
        backgroundImage: 'https://raw.githubusercontent.com/ZarCodeX/ZarcoGreeter/refs/heads/main/assets/images/bg.png',
    });
    fs.writeFileSync('welcome-style1-custom-bg.png', buffer);
}

generateCard();
```

**Result:**

![Style 1 Custom BG](https://raw.githubusercontent.com/ZarCodeX/ZarcoGreeter/main/assets/images/welcome-style1-custom-bg.png)

### Custom Background (Style 2)

**ESM**
```javascript
import { style2 } from 'zarcogreeter';
import fs from 'fs';

async function generateCard() {
    const user = {
        username: 'ZarCodeX',
        avatarURL: 'https://raw.githubusercontent.com/ZarCodeX/ZarcoGreeter/refs/heads/main/assets/images/ZarCodeX%20(original).png',
    };
    const guild = 'My Awesome Server';

    const buffer = await style2(user, guild, {
        backgroundImage: 'https://raw.githubusercontent.com/ZarCodeX/ZarcoGreeter/refs/heads/main/assets/images/bg.png',
    });
    fs.writeFileSync('welcome-style2-custom-bg.png', buffer);
}

generateCard();
```

**CJS**
```javascript
const { style2 } = require('zarcogreeter');
const fs = require('fs');

async function generateCard() {
    const user = {
        username: 'ZarCodeX',
        avatarURL: 'https://raw.githubusercontent.com/ZarCodeX/ZarcoGreeter/refs/heads/main/assets/images/ZarCodeX%20(original).png',
    };
    const guild = 'My Awesome Server';

    const buffer = await style2(user, guild, {
        backgroundImage: 'https://raw.githubusercontent.com/ZarCodeX/ZarcoGreeter/refs/heads/main/assets/images/bg.png',
    });
    fs.writeFileSync('welcome-style2-custom-bg.png', buffer);
}

generateCard();
```

**Result:**

![Style 2 Custom BG](https://raw.githubusercontent.com/ZarCodeX/ZarcoGreeter/main/assets/images/welcome-style2-custom-bg.png)

### Custom Background (Style 3)

**ESM**
```javascript
import { style3 } from 'zarcogreeter';
import fs from 'fs';

async function generateCard() {
    const user = {
        username: 'ZarCodeX',
        avatarURL: 'https://raw.githubusercontent.com/ZarCodeX/ZarcoGreeter/refs/heads/main/assets/images/ZarCodeX%20(original).png',
    };
    const guild = 'My Awesome Server';

    const buffer = await style3(user, guild, {
        backgroundImage: 'https://raw.githubusercontent.com/ZarCodeX/ZarcoGreeter/refs/heads/main/assets/images/bg.png',
    });
    fs.writeFileSync('welcome-style3-custom-bg.png', buffer);
}

generateCard();
```

**CJS**
```javascript
const { style3 } = require('zarcogreeter');
const fs = require('fs');

async function generateCard() {
    const user = {
        username: 'ZarCodeX',
        avatarURL: 'https://raw.githubusercontent.com/ZarCodeX/ZarcoGreeter/refs/heads/main/assets/images/ZarCodeX%20(original).png',
    };
    const guild = 'My Awesome Server';

    const buffer = await style3(user, guild, {
        backgroundImage: 'https://raw.githubusercontent.com/ZarCodeX/ZarcoGreeter/refs/heads/main/assets/images/bg.png',
    });
    fs.writeFileSync('welcome-style3-custom-bg.png', buffer);
}

generateCard();
```

**Result:**

![Style 3 Custom BG](https://raw.githubusercontent.com/ZarCodeX/ZarcoGreeter/main/assets/images/welcome-style3-custom-bg.png)

### Custom Background (Style 4)

**ESM**
```javascript
import { style4 } from 'zarcogreeter';
import fs from 'fs';

async function generateCard() {
    const user = {
        username: 'ZarCodeX',
        avatarURL: 'https://raw.githubusercontent.com/ZarCodeX/ZarcoGreeter/refs/heads/main/assets/images/ZarCodeX%20(original).png',
    };
    const guild = 'My Awesome Server';

    const buffer = await style4(user, guild, {
        backgroundImage: 'https://raw.githubusercontent.com/ZarCodeX/ZarcoGreeter/refs/heads/main/assets/images/bg.png',
    });
    fs.writeFileSync('welcome-style4-custom-bg.png', buffer);
}

generateCard();
```

**CJS**
```javascript
const { style4 } = require('zarcogreeter');
const fs = require('fs');

async function generateCard() {
    const user = {
        username: 'ZarCodeX',
        avatarURL: 'https://raw.githubusercontent.com/ZarCodeX/ZarcoGreeter/refs/heads/main/assets/images/ZarCodeX%20(original).png',
    };
    const guild = 'My Awesome Server';

    const buffer = await style4(user, guild, {
        backgroundImage: 'https://raw.githubusercontent.com/ZarCodeX/ZarcoGreeter/refs/heads/main/assets/images/bg.png',
    });
    fs.writeFileSync('welcome-style4-custom-bg.png', buffer);
}

generateCard();
```

**Result:**

![Style 4 Custom Background](https://raw.githubusercontent.com/ZarCodeX/ZarcoGreeter/main/assets/images/welcome-style4-custom-bg.png)

### Fully Customized (Style 3)

**ESM**
```javascript
import { style3 } from 'zarcogreeter';
import fs from 'fs';

async function generateCard() {
    const user = {
        username: 'ZarCodeX',
        avatarURL: 'https://raw.githubusercontent.com/ZarCodeX/ZarcoGreeter/refs/heads/main/assets/images/ZarCodeX%20(original).png',
    };
    const guild = 'My Awesome Server';

    const buffer = await style3(user, guild, {
        backgroundImage: 'https://raw.githubusercontent.com/ZarCodeX/ZarcoGreeter/refs/heads/main/assets/images/bg.png',
        welcomeColor: '#69ffffff',
        usernameColor: '#FFFFFF',
        guildColor: '#ade4e6ff',
    });
    fs.writeFileSync('welcome-style3-fully-custom.png', buffer);
}

generateCard();
```

**CJS**
```javascript
const { style3 } = require('zarcogreeter');
const fs = require('fs');

async function generateCard() {
    const user = {
        username: 'ZarCodeX',
        avatarURL: 'https://raw.githubusercontent.com/ZarCodeX/ZarcoGreeter/refs/heads/main/assets/images/ZarCodeX%20(original).png',
    };
    const guild = 'My Awesome Server';

    const buffer = await style3(user, guild, {
        backgroundImage: 'https://raw.githubusercontent.com/ZarCodeX/ZarcoGreeter/refs/heads/main/assets/images/bg.png',
        welcomeColor: '#69ffffff',
        usernameColor: '#FFFFFF',
        guildColor: '#ade4e6ff',
    });
    fs.writeFileSync('welcome-style3-fully-custom.png', buffer);
}

generateCard();
```

**Result:**

![Style 3 Fully Custom](https://raw.githubusercontent.com/ZarCodeX/ZarcoGreeter/main/assets/images/welcome-style3-fully-custom.png)

## 📚 API

The following style functions are available:

- `style1(user, guild, options)`
- `style2(user, guild, options)`
- `style3(user, guild, options)`
- `style4(user, guild, options)`

All functions return a `Promise` that resolves to a `Buffer` containing the PNG image data.

### `user` object

The `user` object must contain the following properties:

- `username` (string): The user's username.
- `avatarURL` (string): A URL to the user's avatar image.

### `guild` string

The `guild` string is the name of the server or community.

### `options` object

The `options` object is optional and can contain the following properties:

| Option | Type | Description | Default |
| :--- | :--- | :--- | :--- |
| `backgroundImage` | string | Path or URL to a custom background image. | Varies by style |
| `welcomeColor` | string | Hex color code for the welcome text. | `#FFFFFF` |
| `usernameColor` | string | Hex color code for the username text. | `#FFFFFF` |
| `guildColor` | string | Hex color code for the guild text. | Varies by style |
| `avatarBorderColor` | string | Hex color code for the avatar border. | `#00A8FF` (style1 only) |
| `text` | string | Custom welcome text. | `"WELCOME"` or `"Welcome"` |

Each style has a different character limit for the custom text:

-   **style1**: 15 characters
-   **style2**: 15 characters
-   **style3**: 20 characters

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/ZarCodeX/ZarcoGreeter/issues).

## 📝 License

This project is [MIT](LICENSE) licensed.

## 👤 About the Author

- **Author**: ZarCodeX
- **Website**: [https://zarcodex.github.io](https://zarcodex.github.io)
- **Discord**: [https://discord.gg/6YVmxA4Qsf](https://discord.gg/6YVmxA4Qsf)
- **X (Twitter)**: [https://x.com/ZarCodeX](https://x.com/ZarcoGreeter)
- **GitHub Repo**: [https://github.com/ZarCodeX/ZarcoGreeter](https://github.com/ZarCodeX/ZarcoGreeter)

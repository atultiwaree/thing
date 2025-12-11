# Ring 

<p align="center">
  <img src="./assets/banner.png" alt="Ring CLI" width="600"/>
</p>

<p align="center">
  <strong>A developer-friendly, terminal-first clipboard manager</strong>
</p>

<p align="center">
  Store snippets, filenames, or route names under custom keys and retrieve them remotely with a single command
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@atultiwaree/ring"><img src="https://img.shields.io/npm/v/@atultiwaree/ring.svg" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/@atultiwaree/ring"><img src="https://img.shields.io/npm/dm/@atultiwaree/ring.svg" alt="npm downloads"></a>
  <a href="https://github.com/atultiwaree/ring/blob/main/LICENSE"><img src="https://img.shields.io/npm/l/@atultiwaree/ring.svg" alt="license"></a>
</p>

---

## ✨ Features

- 📋 **Clipboard Sync** - Store and retrieve clipboard content from anywhere
- 🔑 **Key-Value Storage** - Organize snippets with custom identifiers
- ⚡ **Lightning Fast** - Simple commands, instant access
- 🌐 **Remote Access** - Access your clipboard from any machine
- 🛠️ **Developer-Friendly** - Built for developers, by developers

## 🚀 Installation
```bash
npm install -g @atultiwaree/ring
```

## 📖 Usage

### Store clipboard content

Copy any text to your clipboard, then:
```bash
ring copy <key>
```

**Example:**
```bash
# Copy some code, then:
ring copy api-endpoint

# Output: ✓ Stored in Ring - Use ring get api-endpoint to retrieve
```

### Retrieve stored content
```bash
ring get <key>
```

**Example:**
```bash
ring get api-endpoint

# Output: ✓ Copied to clipboard! Press Ctrl+V to paste.
```

## 💡 Use Cases

- **Code Snippets** - Store frequently used code blocks
- **API Keys** - Quick access to development keys
- **Route Names** - Save file paths and route definitions
- **Commands** - Store complex terminal commands
- **Configurations** - Keep config snippets handy

## 🎯 Quick Examples
```bash
# Store your database connection string
ring copy db-connection

# Retrieve it on another machine
ring get db-connection

# Store frequently used commands
ring copy docker-compose

# Access your webpack config
ring get webpack-config
```

## 🔮 Coming Soon

- 📁 **File Sharing** - Upload and share files across devices
- 📊 **History Management** - View and manage your stored items
- 🗂️ **Categories** - Organize snippets into folders
- 🔒 **Encryption** - Secure your sensitive data

## 🛠️ Commands

| Command | Description |
|---------|-------------|
| `ring copy <key>` | Store current clipboard content under a key |
| `ring get <key>` | Retrieve content and copy to clipboard |

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

MIT © [Atul Tiwaree](https://github.com/atultiwaree)

## 🐛 Issues

Found a bug? Have a feature request? Please [open an issue](https://github.com/atultiwaree/ring/issues).

## ⭐ Show your support

Give a ⭐️ if this project helped you!

---

<p align="center">Made with ❤️ by <a href="https://github.com/atultiwaree">Atul Tiwaree</a></p>

# URL-Snipper 🔗

A lightweight URL shortener web application built with **Node.js**, **Express**, **MongoDB**, and **Bootstrap 5**. Paste any long URL and get a short, shareable link in seconds.

---

## Features

- Shorten any long URL to a compact, unique link
- Redirect short links to their original destinations
- Clean, responsive UI built with Bootstrap 5 and Bootstrap Icons
- Persistent storage via MongoDB (Mongoose ODM)
- Unique short codes generated with nanoid
- Environment-based configuration with dotenv
- ES Module (ESM) codebase (`"type": "module"`)

---

## Tech Stack

| Layer      | Technology                          |
|------------|-------------------------------------|
| Runtime    | Node.js                             |
| Framework  | Express v5                          |
| Database   | MongoDB via Mongoose v8             |
| Short ID   | nanoid v5                           |
| Frontend   | Bootstrap 5.3 + Bootstrap Icons 1.11 |
| Config     | dotenv                              |
| Dev Tool   | nodemon                             |

---

## Project Structure

```
URL-Snipper/
├── config/          # Database connection setup
├── models/          # Mongoose schema/models (URL model)
├── public/          # Static assets (CSS, JS, images)
├── routes/          # Express route handlers
├── utils/           # Helper/utility functions
├── app.js           # Application entry point
├── package.json
└── .gitignore
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- [MongoDB](https://www.mongodb.com/) (local instance or MongoDB Atlas)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/jaykumar14921/URL-Snipper.git
   cd URL-Snipper
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment variables**

   Create a `.env` file in the project root:

   ```env
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/url-snipper
   ```

   > Replace `MONGO_URI` with your MongoDB Atlas connection string if using a cloud database.

4. **Start the development server**

   ```bash
   npx nodemon app.js
   ```

   Or run directly with Node:

   ```bash
   node app.js
   ```

5. **Open in your browser**

   ```
   http://localhost:3000
   ```

---

## Usage

1. Paste a long URL into the input field on the homepage.
2. Click **Shorten** to generate a short link.
3. Copy the short URL and share it anywhere.
4. Visiting the short URL redirects the user to the original destination.

---

## Environment Variables

| Variable    | Description                          | Default                              |
|-------------|--------------------------------------|--------------------------------------|
| `PORT`      | Port the server listens on           | `3000`                               |
| `MONGO_URI` | MongoDB connection string            | `mongodb://localhost:27017/url-snipper` |

---

## Scripts

| Command               | Description                          |
|-----------------------|--------------------------------------|
| `node app.js`         | Start the server                     |
| `npx nodemon app.js`  | Start the server with auto-reload    |

---

## Dependencies

```json
{
  "express": "^5.1.0",
  "mongoose": "^8.13.2",
  "nanoid": "^5.1.5",
  "dotenv": "^16.5.0",
  "bootstrap": "^5.3.5",
  "bootstrap-icons": "^1.11.3",
  "@popperjs/core": "^2.11.8",
  "path": "^0.12.7"
}
```

---

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add your feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## License

This project is licensed under the **MIT License**.

---

## Author

**jaykumar14921** — [GitHub Profile](https://github.com/jaykumar14921)

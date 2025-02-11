# URL Shortener

A simple URL shortener application built with **Node.js**, **Express.js**, and **EJS** for templating.

## Features
- Submit a long URL to generate a short URL.
- View a list of generated URLs.
- Track visit history length.
- Simple and clean UI using **CSS**.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/Dosti13/url-shortener.git
   cd url-shortener
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Run the server:
   ```sh
   node server.js
   ```
   or, if using nodemon:
   ```sh
   nodemon server.js
   ```

4. Open the browser and visit:
   ```
   http://localhost:4000
   ```

## Project Structure
```
url-shortener/
url-shortener/
│-- views/
│   ├── index.ejs   # Main EJS template
│-- routes/
│   ├── urlRoutes.js # Routes for handling URL requests
│   ├── staticRoutes.js # Routes for serving static files
│-- controllers/
│   ├── urlController.js # Logic for handling requests
│-- models/
│   ├── urlModel.js # Database schema and model
│-- db/
│   ├── database.js # Database connection setup
│-- server.js       # Express server
│-- package.json    # Project dependencies
│-- README.md       # Project documentation
```

## Usage
1. Enter a long URL in the input field and click "Submit".
2. A shortened URL will be generated.
3. The table displays all generated URLs with their visit history.

## Technologies Used
- **Node.js**
- **Express.js**
- **EJS** (Embedded JavaScript)
- **CSS** (for styling)

## License
This project is open-source and available under the **MIT License**.


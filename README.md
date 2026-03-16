# SakhiSell

SakhiSell is a women-focused marketplace platform where women entrepreneurs can sell handmade or homemade products and buyers can browse listings.

## Tech Stack

- Backend: Node.js, Express.js, MongoDB (Mongoose), bcrypt, express-session
- Frontend: EJS, HTML, CSS, Vanilla JavaScript

## Run Locally

1. Install dependencies:

```bash
npm install
```

2. Ensure MongoDB is running locally on `mongodb://127.0.0.1:27017`, or create a `.env` file with your own connection string:

```env
PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/sakhisell
SESSION_SECRET=replace-with-a-strong-secret
```

3. Start the dev server:

```bash
npm start
```

4. Open:

`http://localhost:3000`

## Project Structure

```text
server.js
models/
  User.js
  Product.js
routes/
  authRoutes.js
  productRoutes.js
controllers/
  authController.js
  productController.js
middleware/
  authMiddleware.js
views/
  home.ejs
  login.ejs
  signup.ejs
  dashboard.ejs
  products.ejs
  productDetails.ejs
  addProduct.ejs
  editProduct.ejs
public/
  css/style.css
  js/script.js
```

## Implemented Features

- Authentication with signup/login/logout
- Password hashing with bcrypt
- Duplicate email prevention
- Session-based auth using express-session
- Role-based dashboard (seller and buyer)
- Seller product CRUD (add/edit/delete)
- Buyer product browsing and details
- Search and category filter on product listings
- Responsive UI with card-based marketplace layout

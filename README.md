# 🛠️ ShoppyGlobe Backend - E-commerce REST API

This repository contains the **backend API** for the ShoppyGlobe e-commerce application, built using **Node.js**, **Express**, **MongoDB**, **Nodemon**, **Dotenv**, **CORS** and **JWT** authentication.

> **Author:** Shivam Mishra  
> **Email:** shivam.m4464@gmail.com  
> **GitHub Repo:** [https://github.com/ShivamMishraa25/backendShoppyGlobe]
> **Course:** Part of Internshala’s PGC Full Stack Development Program

---

## 📦 Features

- ✅ User Registration & Login (with JWT authentication)
- ✅ Protected Cart API (Add, Update, Delete items)
- ✅ Product CRUD APIs (fetch all products, single product)
- ✅ MongoDB integration using Mongoose
- ✅ Input validation and error handling
- ✅ Tested using ThunderClient

---

## 🗂️ Folder Structure

```
backendShoppyGlobe/
├── controllers/
│   ├── userController.js
│   ├── cartController.js
│   └── productController.js
├── models/
│   ├── user.model.js
│   ├── product.model.js
│   └── cart.model.js
├── routes/
│   ├── user.routes.js
│   ├── cart.routes.js
│   └── product.routes.js
├── middleware/
│   ├── authMiddleware.js
├── .env
├── README.md
├── .gitignore
├── screenShots.pdf
├── server.js
└── package.json
```

---

## 📡 API Endpoints

### 🛍 Products

- `GET /products` – Get all products
- `GET /products/:id` – Get single product by ID

### 🛒 Cart (Protected Routes)

- `POST /cart` – Add item to cart
- `PUT /cart/:id` – Update quantity
- `DELETE /cart/:id` – Remove from cart
- `GET /cart` – View user's cart

### 🔐 Authentication

- `POST /register` – Register new user
- `POST /login` – Login and receive JWT

---

## 🔐 JWT Protection

- All cart routes are protected using JWT middleware.
- Pass the token in headers as:  
  `Authorization: JWT <your_token_here>`

---

## 🚀 Getting Started Locally

```bash
git clone https://github.com/ShivamMishraa25/backendShoppyGlobe.git
cd backendShoppyGlobe
npm install
npm start
```

Create a `.env` file:

```env
JWT_SECRET=your_jwt_secret
```

---

## 📷 ThunderClient Testing

All endpoints were tested in **ThunderClient**. Add screenshots in the repo if required.

---

## 🧑‍💻 Developed By

**Shivam Mishra**  
📧 shivam.m4464@gmail.com  
Built as part of **Internshala’s PGC Full Stack Development Program**

---

## ✅ License

This project is open-source and available for learning purposes.


# PS: To use the /cart API:

POST /cart
Send the userId in the dynamic URL and productId in the request body.

Example:

# POST /cart:123user
{
  "productId": "123product"
}
PUT /cart
When using the PUT method, send the productId and increaseQuantity in the request body.

Example:

# PUT /cart:123user
{
  "productId": "123product",
  "increaseQuantity": 5
}
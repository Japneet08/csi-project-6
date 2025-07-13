# 🛠️ Inventory Management REST API

**ProductVault** is a RESTful API built with **Node.js**, **Express**, and **MongoDB** that allows you to manage product inventory efficiently. It supports full CRUD (Create, Read, Update, Delete) operations and is designed with clean architecture and modularity in mind.

---

## 🚀 Features

- 📦 Create, Read, Update, and Delete products
- 🧱 MongoDB-based storage using Mongoose
- ⚙️ Organized with MVC architecture
- 🌐 Cross-origin resource sharing (CORS) enabled
- 📤 Easily testable with Postman or cURL
- 🔒 Ready to be extended with authentication (JWT)

---

## 📂 Project Structure

productvault-api/
│
├── controllers/
│ └── product.controller.js # Logic for CRUD operations
├── models/
│ └── product.model.js # Mongoose product schema
├── routes/
│ └── product.route.js # API route handlers
├── db/
│ └── db.js # MongoDB connection setup
├── .env # Environment variables
├── server.js # Main entry point
├── package.json
└── README.md


---

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/productvault-api.git
cd productvault-api
2. Install Dependencies
bash
Copy
Edit
npm install
3. Set Up Environment Variables
Create a .env file in the root and add:


4. Run the Server

npx nodemon server.js
The server will run on http://localhost:3000.

🔗 API Endpoints
Base URLhttp://localhost:5000/api/products


Endpoints Table
Method	Endpoint	Description
POST	/api/products	Create a new product
GET	/api/products	Fetch all products
GET	/api/products/:id	Get product by ID
PUT	/api/products/:id	Update product by ID
DELETE	/api/products/:id	Delete product by ID



Sample Product Object



{
  "name": "Wireless Mouse",
  "description": "Ergonomic mouse",
  "price": 799,
  "quantity": 30,
  "category": "Electronics"
}
🧪 Testing the API
1. Using Postman
Create a new collection

Use the base URL: http://localhost:3000/api/products

Send POST/GET/PUT/DELETE requests as required

Set Content-Type: application/json for body requests
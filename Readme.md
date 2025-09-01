# Backend for a social Media platform

**A brief one-liner**  
A Node.js and Express-based backend project showcasing basic REST API development with a clean and modular structure



## 📌 About  

This project is a **backend service built with Node.js and Express**.  
It provides a clean and modular structure for developing RESTful APIs, including:  

- Well-organized routes and middleware  
- Basic CRUD operations support  
- Easy integration with databases  
- Scalable foundation for future enhancements  

The main goal of this project is to serve as both a **learning foundation** and a **starter template** for building more advanced backend systems.

## 🛠 Tech Stack  

- **Runtime:** Node.js  
- **Framework:** Express.js  
- **Language:** JavaScript  
- **Package Manager:** npm  
- **Version Control:** Git & GitHub  
- **Environment Management:** dotenv (for configuration)  
- **Database:** MongoDB

## 🚀 Features / API Endpoints  

This backend provides authentication and user account management features with secure JWT-based access.  

### 👤 Authentication & User Management  

| Method | Endpoint              | Description                           | Auth Required |
|--------|-----------------------|---------------------------------------|---------------|
| POST   | `/api/users/register` | Register a new user (with avatar & cover image upload) | ❌ |
| POST   | `/api/users/login`    | Log in an existing user               | ❌ |
| POST   | `/api/users/logout`   | Log out the currently logged-in user  | ✅ |
| POST   | `/api/users/refresh-token` | Refresh the access token        | ❌ |
| POST   | `/api/users/change-password` | Change current user’s password | ✅ |
| GET    | `/api/users/current-user` | Get details of the currently logged-in user | ✅ |
| PATCH  | `/api/users/update-account` | Update account details         | ✅ |
| PATCH  | `/api/users/avatar`   | Update user’s avatar (image upload)   | ✅ |
| PATCH  | `/api/users/cover-image` | Update user’s cover image (image upload) | ✅ |
| GET    | `/api/users/c/:username` | Get channel/profile by username   | ✅ |
| GET    | `/api/users/history`  | Get watch history of the current user | ✅ |

---

### 🎥 Videos *(Planned)*  
Routes for uploading, fetching, updating, and deleting videos will be added here.

---

### 📝 Posts *(Planned)*  
Routes for creating, fetching, updating, and deleting posts will be added here.

---

✅ **Notes**:  
- `verifyJWT` middleware is used to secure protected routes.  
- File uploads (avatar, cover image) are handled using **Multer middleware**.  
- Token-based authentication with **JWT** ensures security.  


## 🏁 Getting Started  

Follow these steps to set up and run the project locally.  

### 📋 Prerequisites  
- [Node.js](https://nodejs.org/) (v14 or higher recommended)  
- [npm](https://www.npmjs.com/) (comes with Node.js)  
- [MongoDB](https://www.mongodb.com/) (local instance or Atlas cloud)  
- [Git](https://git-scm.com/)  

### ⚙️ Installation  

1. **Clone the repository**  
   ```bash
   git clone https://github.com/vamsikrishnacr7/first-backend.git
   cd first-backend


### Install Dependencies  
Run the following command to install all required dependencies:  

```bash
npm install

```env
MONGODB_URI=your_mongodb_connection_string
PORT= specify a port number
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret

ACCESS_TOKEN_SECRET=your_access_token_secret
ACCESS_TOKEN_EXPIRY= xm example x minutes

REFRESH_TOKEN_SECRET=your_refresh_token_secret
REFRESH_TOKEN_EXPIRY= yd example y days
```


## 📁 Project Structure

```text
first-backend/
│
├── src/
│   ├── controllers/      # Functions handling API logic (e.g., user.controller.js)
│   ├── routes/           # Express route definitions (e.g., user.routes.js)
│   ├── middlewares/      # Middleware functions (auth, file upload, etc.)
│   ├── models/           # Mongoose schemas/models
│   └── index.js          # Entry point of the application
│
├── public/               # Public assets (if any)
├── temp/                 # Temporary files/uploads
├── .env.example          # Sample environment variables
├── package.json          # Project dependencies and scripts
├── package-lock.json     # Exact dependency versions
└── README.md             # Project documentation
```




### 🔹 Notes:
- **src/controllers/** → Contains the logic for handling API requests.  
- **src/routes/** → Defines the API endpoints and connects them to controllers.  
- **src/middlewares/** → Handles authentication, file uploads, and other request processing.  
- **src/models/** → Defines MongoDB collections using Mongoose schemas.  
- **public/** & **temp/** → For storing public assets and temporary uploads.  
- **index.js** → Main entry point that starts the Express server.





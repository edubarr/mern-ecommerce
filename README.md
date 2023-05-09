# MERN e-Commerce

Fully-functional e-commerce website inspired by Amazon created with the MERN (MongoDB, ExpressJS, React and Node.JS) stack.

![amazona](/frontend/public/images/amazona.png)

## Run Locally

### 1. Clone repo

```
$ git clone git@github.com:edubarr/mern-ecommerce.git
$ cd mern-ecommerce
```

### 2. Create .env File

- duplicate .env.example in backend folder and rename it to .env

### 3. Setup MongoDB

- Local MongoDB
  - Install it from [here](https://www.mongodb.com/try/download/community)
  - In .env file update MONGODB_URI=mongodb://localhost/amazona
- OR Atlas Cloud MongoDB
  - Create database at [https://cloud.mongodb.com](https://cloud.mongodb.com)
  - In .env file update MONGODB_URI=mongodb+srv://your-db-connection

### 4. Run Backend in Dev mode

```
$ cd backend
$ npm install
$ npm run dev
```

### 5. Run Frontend in Dev mode

```
$ cd frontend
$ npm install
$ npm run dev
```

### 6. Build both Backend & Frontend in Production mode

```
# open new terminal
$ cd mern-ecommerce
$ npm run build
$ npm run start
```

### 7. Seed Users and Products

- Run this on browser: http://localhost:4000/api/seed
- It returns admin and user details and 4 sample products

### 8. Admin Login

- Run http://localhost:4000/signin
- Enter admin email and password and click signin

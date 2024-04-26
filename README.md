## Logo Design

Thanks for visiting my GitHub account!

## Source Code (Download)

[Click Here](https://mega.nz/folder/kCs3gLwD#OreAYeEeXeabncC4hIbz-g)

## Required Software (Download)

- Node , Download-> https://nodejs.org/en/download
- Mongosh (msi) , Download-> https://www.mongodb.com/try/download/shell
- Mongosh (msi) , Download-> https://www.mongodb.com/try/download/shell
- Postman , Download-> https://www.postman.com/downloads/

**Or Online Database**

- Register -> https://www.mongodb.com/cloud/atlas/register

## Step-1: Client Side Configuration

### API-> client/src/config/Config.jsx

```bash
const BASE_URL = "http://localhost:5173";
const CLIENT_URL = "http://localhost:3000";
```

## Step-2 Run Command in Terminal (client)

```bash
cd client
npm run dev
```

## Step-3: Server Side Configuration

### API-> server/.env

```bash
PORT_NUMBER=3000
MOGODB_ATLAS_URL=From-Atlas-cluster-account

JWT_ACTIVATION_KEY=JWTUserProcessRegisterToken
JWT_RESET_PASSWORD_KEY=JWTUserResetPasswordKey
JWT_LOGIN_KEY=UserAccessKeyHere

SMTP_USERNAME=Email-ID
SMTP_PASSWORD=password
CLIENT_URL=http://localhost:3000 (Server URL)
BASE_URL=http://localhost:5173 (Frontend URL)

STORE_ID=SSLPayment-ID
STORE_PASSWORD=sslPayment-Password
```

### API-> server/resources/js/secret.js

```bash
const mongodbURL = "mongodb://localhost:27017/ecommerceMernDB";(For Local Database)
```

## Step-4 Run Command in another Terminal (server)

```bash
cd server
npm run dev
```

## Socket IO

**If any error occur for socket.io/Network error then change the port (8080) for socket.io in both app.js and Cart.jsx file with your recomendd port.**

## Project Overview

### Backend

|                                                                                                                       |
| :-------------------------------------------------------------------------------------------------------------------: |
|                                                   Dashbord Preview                                                    |
| ![backent](https://github.com/learnwithfair/mern-ecommerce-electro-master/blob/main/screenshot/dashboard/preview.jpg) |

### Frontend

|                                                                                                                             |                                                                                                                        |
| :-------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------: |
|                                                            Home                                                             |                                                        Product                                                         |
|       ![Home](https://github.com/learnwithfair/mern-ecommerce-electro-master/blob/main/screenshot/frontend/index.png)       |   ![Product](https://github.com/learnwithfair/mern-ecommerce-electro-master/blob/main/screenshot/frontend/Store.png)   |
|                                                       Single Product                                                        |                                                        Checkout                                                        |
| ![single-product](https://github.com/learnwithfair/mern-ecommerce-electro-master/blob/main/screenshot/frontend/Product.png) | ![checkout](https://github.com/learnwithfair/mern-ecommerce-electro-master/blob/main/screenshot/frontend/Checkout.png) |
|                                                           Profile                                                           |                                                        Regular                                                         |
|    ![profile](https://github.com/learnwithfair/mern-ecommerce-electro-master/blob/main/screenshot/frontend/profile.png)     |  ![reqular](https://github.com/learnwithfair/mern-ecommerce-electro-master/blob/main/screenshot/frontend/Regular.png)  |

## Necessary Code

```bash
const express = require("express"); // Create Express server
const morgan = require("morgan"); // For automatically run server
const cookieParser = require("cookie-parser"); // For set Cookie
const createError = require("http-errors"); // For create HTTP Error
const xssClean = require("xss-clean"); // For  Secure api
const bodyParser = require("body-parser"); // For Get/ Set data into body
const cors = require("cors"); // To set access for client side URL
```

/_
|--------------------------------------------------------------------------
| Initialize Middleware
|--------------------------------------------------------------------------
_/

```bash
app.use(cookieParser()); // For set Cookie
app.use(morgan("dev")); // For automatically run server
app.use(xssClean()); // For  Secure api
app.use(bodyParser.json()); // For Set, Read data into body and display JSON Format Text
app.use(bodyParser.urlencoded({ extended: true })); // Get HTML Form Data
app.use(setRefreshToken); // For set Refresh Token [Automatically call this middlewire for all route]
// To get access Client side url
app.use(cors(
 {
   origin: BASE_URL, // Frontend Base URL
   credentials: true
 }
));
app.use(express.static("public")); // To Display Server site image
```

/_
|--------------------------------------------------------------------------
| Socket IO
|--------------------------------------------------------------------------
_/

```bash
const io = require("socket.io")(8080, {
 cors: {
   origin: BASE_URL
 },
});
io.on("connection", (socket) => {
 console.log("User connected", socket.id);

 setInterval(() => {
   io.emit("refresh", {});
 }, 500)

 // socket.on("disconnect", function () {
 //   console.log("Disconnect");

 // })

});
```

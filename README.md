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
CLIENT_URL=http://localhost:3000

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

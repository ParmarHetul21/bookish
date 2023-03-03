# Bookish

Fanfic Arena is an online platform for fanfic enthusiasts who love to read, write and explore fan fictions. A good range of categories are available for them to explore.

### Technologies Used

**Frontend**

-   React.js
-   Redux
-   Redux-Thunk
-   Styled-Components
-   Axios

**Backend**

-   Node.js
-   Express.js
-   MongoDB
-   Mongoose
-   JWT Auth

Other related and helpful libraries are used in the project for smooth development.

### Requirements

-   Node.js 12+ & NPM 6
-   MongoDB
-   Cloudinary account
-   Gmail account (for sending emails)

### Environment Variables

There are some environment variables that you need to define inside `.env` file in the project.

```
MONGO_USERNAME=mongouser
MONGO_PASSWORD=mongopassword
GMAIL_ADDRESS=yourgmailaddress
GMAIL_PASS=yourgmailpass
CLOUDINARY_CLOUD_NAME=cloudinarycloudname
CLOUDINARY_API_KEY=cloudinaryapikey
CLOUDINARY_SECRET=cloudinarysecret
```

You can configure the database connection in `db.config.js` file in `config` folder.

### Commands

```bash
# install dependencies for frontend
$ cd client && npm install

# install dependencies for backend
$ npm install

# run frontend
$ cd client && npm start

# run backend
$ npm run dev
```

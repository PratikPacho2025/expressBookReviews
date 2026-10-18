
const express = require('express');
const session = require('express-session');

const customer_routes =
  require('./router/auth_users.js').authenticated;

const genl_routes =
  require('./router/general.js').general;

const app = express();

// Parse JSON request bodies
app.use(express.json());

// Configure session
app.use(
  '/customer',
  session({
    secret: 'fingerprint_customer',
    resave: false,
    saveUninitialized: false
  })
);

// Server port
const PORT = 5000;

// Register routes
app.use('/customer', customer_routes);
app.use('/', genl_routes);

// Start server
app.listen(PORT, () => {
  console.log('Server is running');
});
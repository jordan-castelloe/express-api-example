'use strict';

const express = require('express');
const app = express();
require('dotenv').config(); // magically takes any variables in a .env file and adds them on as a property of process.env
const routes = require('./routes/'); // this goes to look for a file called index

// MIDDLEWARE
// app.use tells express 'use this function that I'm about to pass in as a middleware function'
app.use('/api/v1/', routes);

app.use((req, res, next) => {
  let err = new Error("This resource was not found");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  // one error handler to rule them all
  res.json({
    message: "You blew it",
    err: err.message,
    status: err.status
  });
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
})



// let x = () => {return 1+1};
// x.prop = () => {return 2+2};
// console.log("x", x); // () => {return 1+1}
// console.log("xecuted", x()); // () => {return 2+2}
// console.log("x.prop", x.prop); // 
// console.log("x.prop()", x.prop()) // 4
// console.log(Object.keys(x)); // ['prop']



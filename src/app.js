const express = require("express");
const pastesRouter = require("./pastes/pastes.router");
const usersRouter = require("./users/users.router");


const app = express();
app.use(express.json());

// TODO: Follow instructions in the checkpoint to implement ths API.

app.use("/pastes", pastesRouter);
app.use("/users", usersRouter);

// Not found handler
app.use((request, response, next) => {
  next(`Not found: ${request.originalUrl}`);
});

// Error handler
app.use((error, req, res, next) => {
  console.error(error);
  const { status = 500, message = "Something went wrong!" } = error;
  res.status(status).json({ error: message });
});



module.exports = app;

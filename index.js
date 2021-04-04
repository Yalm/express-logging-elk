const express = require('express');
const pino = require('pino-http')();

const app = express();
app.use(pino);
const PORT  = process.env.PORT || 3000;

app.listen(PORT);

app.get("/", (req, res) => {
  req.log.error('something');
  res.send("Users Shown");
});

app.get("/delete", (req, res) => {
  res.send("Delete User");
});

app.get("/update", (req, res) => {
  res.send("Update User");
});

app.get("/insert", (req, res) => {
  res.send("Insert User");
});
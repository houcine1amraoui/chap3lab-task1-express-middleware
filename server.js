import express from "express";

const app = express();

app.use(express.json());
// app.use(logger);

// app.use(logger);

// a middleware is any function that is called and run
// between the time the server gets the request
// and the time the server sends a response to the client

function logger(req, res, next) {
  console.log("Hello1 from console");
  next();
}

app.get("/hello", (req, res) => {
  return res.send("Hello from console");
});

app.get("/hello2", (req, res) => {
  console.log("hello endpoint");
  return res.send("Hello2");
});

const PORT = 1000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

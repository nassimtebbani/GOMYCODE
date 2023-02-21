import dotenv from "dotenv";
import express from 'express';
const app = express();
dotenv.config()

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post("/message", (req, res) => {
  const mymessage = req.body
  console.log(mymessage)
})

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
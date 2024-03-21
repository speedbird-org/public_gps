// index.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.post('/test_api',(req,res)=>{
  res.send("Hello , Running test api");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}. Send a request to /`);
});

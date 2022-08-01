require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const {dbConnect} = require("./src/config/db");
const app = express();
const port = 4000;

app.use(bodyParser.json());
dbConnect(process.env.MONGO_URL);
app.get('/login',(req,res)=>{
  
})
app.listen(port, () => {
  console.log(`Success! Your application is running on port ${port}.`);
});
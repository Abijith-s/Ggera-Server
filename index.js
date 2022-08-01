const express = require('express');
const app = express();
const port = 4000;


app.get('/login',(req,res)=>{
  
})
app.listen(port, () => {
  console.log(`Success! Your application is running on port ${port}.`);
});
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Methods',
      'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });
app.get('/aaa',(req,res,next)=>{
    res.status(200).json({
        message:'OK MAK :-)'
    });
});


app.listen(3000, () => {
    console.log('*App Runnng on port 3000'.toLocaleUpperCase())
});
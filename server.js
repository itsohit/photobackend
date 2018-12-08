var express = require('express');

const app = express();
app.use(express.static(__dirname));
app.get('/',(req,res)=> res.send('Hello World'));
app.listen(4000,()=> console.log('Express server run on port 4000'));
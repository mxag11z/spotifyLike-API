const express = require('express');
const app = express();
const mainRouting = require('./routes')

const config = require('./config');


app.get('/',(req,res)=>{
    res.status(200).json({
        message: 'Server is running'
    });
});

app.use(express.json());
mainRouting(app);





app.listen(config.port, ()=>{
    console.log('Listening on PORT',config.port);
});
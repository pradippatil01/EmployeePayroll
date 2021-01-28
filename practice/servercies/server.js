const express = require('express');
const router= require('../route/route');
const app = express();
app.use('/',router)
 
 
app.listen(3000,()=>{
    console.log('server started...')
})

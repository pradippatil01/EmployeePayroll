const express = require('express');
const router = require('./router/route');
const PORT=3000;
const app = express();
app.use(express.json())
app.use('/', router)
app.listen(3000, () => {
  console.log('server started with port',PORT)
})
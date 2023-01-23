const express = require('express');
const app = express();
const cors = require('cors');
const port = 8000;
const router = require('./routes');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());


app.use('/', router);


app.listen(port, () => {
  console.log(`meluncur ke ${port}`);
})
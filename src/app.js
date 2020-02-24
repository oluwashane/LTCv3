const express = require('express');  
require('./db/mongoose');
const cors = require('cors');
const endPoints = require('./routers/endPoints');
const app = express();

app.use(cors());
app.use(express.json());
app.use(endPoints);

const port = 2222;

app.listen(port, () => {
    console.log(`server running on ${port}`)
})
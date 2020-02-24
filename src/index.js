const express = require('express')
const app = express();

app.get('/testing', (req, res) => {
    res.send('Greeting from here, we are still working on our server...')
});

const port = 1234;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})
const express = require('express');
const User = require('../models/user');
const router = express.Router();

router.post('/users', async (req, res) => {
    const user = new User(req.body);
    try {
        await user.save();
        res.status(201).send({ user });
    } catch (e) {
        res.send(e).status(400)
    }
});

router.get('/users/v3', async (req, res) => {
    try {
        const user = await User.find({});
        res.send(user);
    } catch(e) {
        res.send(e).status(500);
    }
});

router.get('/welcome', (req, res) => {
    res.send('Hello world')
})

module.exports = router;

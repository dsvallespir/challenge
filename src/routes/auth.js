const { Router } = require('express');
const router = Router();

const pool = require('../database');

router.get('/auth/register', (req, res) => {
    res.send('Register');
});

router.get('/auth/login', (req, res) => {
    res.send('Login');
});


module.exports = router;
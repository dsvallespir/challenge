const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/test', (req, res) => {
    const data = {
        "name": "seba",
        "website": "www.google.com"
    };
    res.json(data);
});

module.exports = router;


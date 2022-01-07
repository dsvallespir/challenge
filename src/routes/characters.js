const { Router } = require('express');
const router = Router();
const imageUpload = require('../lib/multer');
//const Resize = require('../lib/resize');
const path = require('path');
const fs = require('fs');


const pool = require('../database');

router.get('/characters', (req, res) => {
    res.send('characters');
});

router.get('/characters/add', (req, res) => {
    res.render('add');
});


router.post('/characters/add', imageUpload.single('image-file'), (req, res) => {
    
    const { nombre, edad, peso, file} = req.body;
    console.log(req.body);

    const newCharacter = {
        file,
        nombre,
        edad, 
        peso
    }

    const imageData = fs.readFileSync(path.join(__dirname, '../public/images' + req.file.filename));

    pool.query('INSERT INTO db_challenge set ?', [], (err, rows) => {
    
        if (err) return res.status(500).send('server error');

        res.send('image saved!');
    });

});

module.exports = router;



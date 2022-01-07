const { Router } = require('express');
const router = Router();
const imageUpload = require('../lib/multer');
const Resize = require('../lib/resize');
const path = require('path');
const fs = require('fs');


const pool = require('../database');
const { restart } = require('nodemon');
const { pathToFileURL } = require('url');

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
/*    
    const { nombre, edad, peso, imageUpload} = req.body;
    const imagePath = path.join(__dirname, '/public/images');
    const fileUpload = new Resize(imagePath);  
    if(!imageUpload){
        res.status(401).json({error: 'Please provide an image'});
    }
    if(imageUpload.buffer){

        const filename = await fileUpload.save(imageUpload.buffer);
        //console.log(req.body);
        //res.send('received');
        const newCharacter = {
            filename,
            nombre,
            edad, 
            peso
        }
        await pool.query('INSERT INTO personajes set ?', [newCharacter]);
        return res.status(200).json({name: filename});
    }
    else{
        console.log("Error: el buffer está vacío");
    }
    */



module.exports = router;



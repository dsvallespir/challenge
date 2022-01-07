const express = require('express');
const morgan = require('morgan');
//const exphbs = require('express-handlebars');
const { engine } = require('express-handlebars');
const path = require('path'); 

// inicializaciones
const app = express();

// setings
app.set('port', process.env.PORT || 4000);
app.set('json spaces', 2);


/* 
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialDir: path.join(app.get('views'), 'partials'),
    extname: 'hbs',
    helpers: require('./lib/handlebars')
})); 

app.set('view engine', '.hbs');
*/

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));



// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// routes
app.use(require('./routes/index'));
app.use('/api', require('./routes/characters'));
app.use(require('./routes/auth'));

// global
app.use((req, res, next) => {
    next();
})

// public
app.use(express.static(path.join(__dirname, 'public')));

// comenzando el servidor
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});




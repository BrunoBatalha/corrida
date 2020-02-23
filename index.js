const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');

const app = express();

app.use('/', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('jogo');
});

/**Server */
const port = process.env.PORT || 9000;
app.listen(port, function () {
    console.log('Servidor Express iniciado em: http://localhost:' + port);
})

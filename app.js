const express = require('express'),
    app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(process.env.PORT, () => {
    console.log('Listening on port' + process.env.PORT + '...');
});
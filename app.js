const express = require('express');
const app = express();

app.use(express.static('css'));
app.use(express.static('images'));
app.use(express.static('views'));
app.use(express.static('js'));

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.get('/highandlow', (req, res) => {
  res.render('highAndlow.ejs');
});


app.listen(3000);
const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
const hostname = process.env.HOST_NAME;

require('dotenv').config()
console.log(">>>> check env:", process.env);

//  config template engine
app.set('views', path.join(__dirname, './views/'));
app.set('view engine', 'ejs')
//  config static files
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send('Hello World- hehehe loncasc du ma!');
});

app.get('/hoithangbinhdi', (req, res) => {
    res.render('sample');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

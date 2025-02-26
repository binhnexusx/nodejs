const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World- hehehe loncasc du ma!');
});

router.get('/hoithangbinhdi', (req, res) => {
    res.render('sample');
});

router.get('/signin', (req, res) => {
    res.render('sign_in');
});

 
module.exports = router;
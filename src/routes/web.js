const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World- hehehe loncasc du ma!');
});

router.get('/hoithangbinhdi', (req, res) => {
    res.render('sample');
});

 
module.exports = router;
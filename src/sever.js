const express = require('express');
const path = require('path');
const conFigViewEngine = require('./config/viewEngine');
const app = express();
const port = process.env.PORT || 3000;
const hostname = process.env.HOST_NAME;
const webRoutes = require('./routes/web')
require('dotenv').config()
console.log(">>>> check env:", process.env);

//config template engine
conFigViewEngine(app);

//  khai bao route
app.use(webRoutes);
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

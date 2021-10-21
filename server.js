// dependencies
const express = require('express');

// route files
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');


const app = express();

// set PORT
const PORT = process.env.PORT || 3001;

// parse string or array data
app.use(express.urlencoded({ extended: true }));

// parse json data
app.use(express.json());


app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// event listener
app.listen(PORT, () => {
    console.log(`Open server on port http://localhost:${PORT} `);
});
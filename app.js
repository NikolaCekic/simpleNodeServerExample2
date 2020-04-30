const EXPRESS = require('express');
const APP = EXPRESS();

const PORT = '3000';

APP.get('/', (req, res) => res.send('Hello World'));

APP.listen(PORT, () => console.log('Server Listening on Port ' + PORT));
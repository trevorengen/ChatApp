const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/moozeydb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to database successfully.'))
    .catch(e => console.log('Error connecting to database', e));
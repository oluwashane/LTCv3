const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/LTC3', {   
    useNewUrlParser:true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
});

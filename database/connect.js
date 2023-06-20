const mongoose = require('mongoose');
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,

};
mongoose.connect('mongodb://localhost:27017/Badge_DataBase', options).then(connect => {
// mongoose.connect('mongodb://mongoadmin:mongoadmin@mongo:27017/mean-docker', options).then(connect => {

    console.log("=> connect to databse successfully!")
}).catch(err => {
    console.log("=> connect to database with error :")
    console.log(err);
});

//  MongoDB URL from the docker-compose file
// const dbHost = 'mongodb://database/mean-docker';

// // Connect to mongodb
// mongoose.connect(dbHost);
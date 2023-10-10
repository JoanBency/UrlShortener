const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
},)
.then(() => console.log('Connected to database'))
.catch(err => console.log(err));

const db = mongoose.connection;

module.exports = db;
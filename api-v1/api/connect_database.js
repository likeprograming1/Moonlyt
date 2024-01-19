const mongoose = require('mongoose');
const uri = "mongodb://root:password@127.0.0.1/";

const connectDatabase = async () => {
    try {
        await mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
        console.log("MongoDB Connected");
    }
    catch (error) {
        console.error(error.message);
        process.exit(1);
    } 
}

module.exports = connectDatabase;
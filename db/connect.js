const mongoose = require('mongoose');

uri = "mongodb+srv://dinesh:mD3IfnhTCnsWxSOA@cluster0.exrt6.mongodb.net/Cluster0?retryWrites=true&w=majority&appName=Cluster0"

const connectDB = ()=>{
    // console.log('connect DB');
    
    return mongoose.connect(uri,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    });
};

module.exports = connectDB;
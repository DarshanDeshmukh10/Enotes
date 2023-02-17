const mongoose= require('mongoose');
//const mongoURI='mongodb://localhost:27017/inotebook'
const mongoURI="mongodb+srv://darshan:JkiTPtmyCrH6fXH@cluster0.ekcdrwr.mongodb.net/inotebook"

const connectToMongo=()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("connected to mongo successfully");
    })
}
module.exports=connectToMongo;
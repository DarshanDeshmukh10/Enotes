const mongoose=require('mongoose');
//schema of notes
const NoteSchema= new Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type:String,
        required: true,
       
    },
    tag:{
        type:String,
        default:"General"
    },
    date:{
        type:Date,
        default:Date.now
    }
});
module.exports=mongoose.model('notes',NotesSchema);
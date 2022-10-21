const mongoose=require("mongoose");

const notesSchema= new mongoose.Schema({
  title:{type:String,required:true},
  note:{type:String,required:true},
  label:{type:String,required:true},
  date:{type:String,required:true},
  userId:{type:String,required:true},
 
})

const NotesModel=mongoose.model("note",notesSchema);

module.exports=NotesModel;
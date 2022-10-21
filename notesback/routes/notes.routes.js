const express = require('express');
const NotesModel = require("../models/Notes.modal");
const notesController = express.Router();
let jwt = require('jsonwebtoken');
const authentication=require("../middleware/authentication ")

// Post 

notesController.post("/create",authentication, async (req, res) => {
    const { title, note, label, userId } = req.body;
    var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
    console.log(userId);
    const new_note = new NotesModel({
        title,
        note,
        label,
        date:String(today),
        userId
    })
    await new_note.save();
    return res.send({ messege: "Notes Added", new_note });
})

// Get

notesController.get("/",authentication, async (req, res) => {
    const { userId } = req.body;
    const notes = await NotesModel.find({ userId });
    res.send(notes);
})

//Edit

notesController.patch("/:noteId/edit",authentication, async (req, res) => {
    console.log(req.params);
    const { noteId } = req.params;
    const { userId } = req.body;
    const note = await NotesModel.findOne({ _id: noteId });
    if (note.userId === userId) {
        let updatedNote = await NotesModel.findOneAndUpdate({ _id: noteId }, req.body, { new: true });
        return res.send({ messege: "Updated Note", updatedNote })
    }
    else {
        return res.send("Can't Authoeize");
    }
})

//delete
notesController.delete("/:noteId/delete",authentication, async (req, res) => {
    console.log(req.params);
    const { noteId } = req.params;
    const { userId } = req.body;
    const note = await NotesModel.findOne({ _id: noteId });
    if (note.userId === userId) {
        let deleted = await NotesModel.findOneAndDelete({ _id: noteId });
        return res.send({ messege:"Deleted note" , deleted })
    }
    else {
        return res.send("Can't Authoeize");
    }
})
module.exports = notesController;
const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Note = require('../models/Note');
const { body, validationResult } = require('express-validator');
//router 1 for get all the notes
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id });
        res.json(notes)
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internel server error occured");
    }
})

//router 2 for get add the notes
router.post('/addnotes', fetchuser, [
    body('title', 'Enter a valid tittle').isLength({ min: 3 }),
    body('description', 'description should be more than 5 characters').isLength({ min: 5 })
], async (req, res) => {
    try {
        const { title, description, tag } = req.body;
        //if error then return error 
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        const note = new Note({
            title, description, tag, user: req.user.id
        })
        const saveNote = await note.save()
        res.json(saveNote)

    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internel server error occured");
    }
})

//Route 3:Update an existing note
router.put('/updatenote/:id', fetchuser, async (req, res) => {
    const { title, description, tag } = req.body;
    try{
    const newNote = {};
    if (title) { newNote.title = title };
    if (description) { newNote.description = description };
    if (tag) { newNote.tag = tag };

    let note = await Note.findById(req.params.id);
    if (!note) { res.status(404).send("Not Found") }

    if (note.user.toString() !== req.user.id) {
        return res.status(401).send("Not Allowed")
    }
    note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
    res.json({ note });
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internel server error occured");
    }
})

//Route 4:delete an existing note
router.delete('/deletenote/:id', fetchuser, async (req, res) => {
    const { title, description, tag } = req.body;
    //find the note for delete and delete it 
    try{
    let note = await Note.findById(req.params.id);
    if (!note) {return res.status(404).send("Not Found") }
//Allow deletion if note owns by user
    if (note.user.toString() !== req.user.id) {
        return res.status(401).send("Not Allowed")
    }
    note = await Note.findByIdAndDelete(req.params.id)
    res.json("Note has been deleted succesfully");
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internel server error occured");
    }
})
module.exports = router
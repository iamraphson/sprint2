
var mongoose = require('mongoose');

// define schema
var tagSchema = new mongoose.Schema({
	attached_to: { type : mongoose.Schema.ObjectId, ref : 'Candidate', required: true },
	name: { type: String, required: true }
});

// register schema
mongoose.model('Tag', tagSchema);
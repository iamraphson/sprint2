var mongoose = require('mongoose');

// define schema
var candidateSchema = new mongoose.Schema({
	displayName: { type: String, required: true },
	email: { type: String, unique: true, lowercase: true, required: true },
	phone: { type: String, minlength: 10, required: false },
	linkedin: { type: String, required: false },
	portfolio: { type: String, required: false },
	tags: [{ type : mongoose.Schema.ObjectId, ref : 'Tag', required: false }]
});

// register schema
mongoose.model('Candidate', candidateSchema);
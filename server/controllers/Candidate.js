var mongoose = require('mongoose');
var Candidate = mongoose.model('Candidate');
var controller = {};

// create new candidate
controller.create = function(req, res) {	
	var candidate = new Candidate();		// create a new instance of the candidate model
	candidate.name = req.body.name;  // set the candidates name (comes from the request)

	candidate.save(function(err) {
		if (err)
			res.send(err);

		res.json({ message: 'candidate created!' });
	});
};

// get all candidates
controller.get = function(req, res) {
	Candidate.find(function(err, candidates) {
		if (err)
			res.send(err);

		res.json(candidates);
	});
};

// get candidate by id
controller.getOne = function(req, res) {
	Candidate.findById(req.params.candidate_id, function(err, candidate) {
		if (err)
			res.send(err);
		res.json(candidate);
	});
};

// update a candidate by id
controller.update = function(req, res) {
	Candidate.findById(req.params.candidate_id, function(err, candidate) {

		if (err)
			res.send(err);

		candidate.name = req.body.name;
		candidate.save(function(err) {
			if (err)
				res.send(err);

			res.json({ message: 'candidate updated!' });
		});

	});
};

// delete a candidate by id
controller.remove = function(req, res) {
	Candidate.remove({
		_id: req.params.candidate_id
	}, function(err, candidate) {
		if (err)
			res.send(err);

		res.json({ message: 'Successfully deleted' });
	});
};


module.exports = controller;


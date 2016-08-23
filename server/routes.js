var express = require('express'),
	path = require('path'),
	rootPath = path.normalize(__dirname + '/../'),
	candidate = require('./controllers/Candidate'),
	multiparty = require('connect-multiparty'),
	multipartyMiddleware = multiparty(),
	router = express.Router();

module.exports = function(app){	

	router.route('/api/candidates')
		.post(candidate.create)
		.get(candidate.get);

	router.route('/api/candidates/:candidate_id')
		.get(candidate.getOne)
		.put(candidate.update)
		.delete(candidate.remove);

	router.route('/api/candidates/uploads')
		.post(multipartyMiddleware, candidate.uploads);


	// angularjs catch all route
	router.get('/*', function(req, res) {
		res.sendFile(rootPath + 'public/index.html', { user: req.user });
	});

	app.use('/', router);
};
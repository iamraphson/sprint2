
var express = require('express'),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser'),
	multer = require('multer'),
	cookieParser = require('cookie-parser'),
    methodOverride = require('method-override'),
	cors = require('cors'),
	app = express();

// ENVIRONMENT CONFIG
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development',
	envConfig = require('./server/env')[env];

// DATABASE CONFIG
require('./server/models/tag');
require('./server/models/candidate');
mongoose.connect(envConfig.db);

// EXPRESS CONFIG
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(multer({
//     dest: “./uploads/”
// }));
app.use(cors());
app.use(methodOverride());
app.use(cookieParser());
app.use(express.static(__dirname + '/public'));

// ROUTES
require('./server/routes')(app);

// Start server
app.listen(envConfig.port, function(){
  console.log('Server listening on port ' + envConfig.port)
});
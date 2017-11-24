var utils, pubdir;


exports.add = function (app) {

  path = '../';
  utils = require(path + 'src/utils');

	app.use( function (req, res, next) {

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-with, Content-Type, Accept');

		next();

	});

	app.get('/', function (req, res) {
    console.log(utils);
		console.log('render root');

		res.render('landing', {});
	});
	
	app.get('/portfolio', function (req, res) {
		console.log('render portfolio page');

		res.render('portfolio', {});
	});

}

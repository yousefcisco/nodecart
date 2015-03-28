'use strict';

var mount = require('koa-mount');

module.exports = function(app) {

	// YEOMAN INJECT ROUTES BELOW
	app.use(mount('/quote', require('../resources/quote')));
  app.use(mount('/', require('../resources/root')));

};

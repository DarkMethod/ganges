// This is the top level for all routes

module.exports = function (app) {

	app.use('/api/v1/auth', require('./routes/auth'));
	app.use('/api/v1/books', require('./routes/books'));
	app.use('/api/v1/users', require('./routes/users'));
	app.use('/api/v1/orders', require('./routes/orders'));

};

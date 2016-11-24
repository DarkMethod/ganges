var express = require('express');
var router = express.Router();
var models = require('../../models/index');

// Get all the books
router.get('/', function(request, response, next) {
	models.Book.findAll({}).then(function(books) {
        var data = {
            error: "false",
            books: books
        };

        response.send(data);
        next();
    });
});

// Get a particular book
router.get('/:id', function(request, response, next) {
	models.Book.find({
        where: {
            'uuid': request.params.id
        }
    }).then(function(book) {
        var data = {
            error: "false",
            book: book
        };

        response.send(data);
        next();
    });
});

// Add a book 
router.post('/', function(request, response, next) {
	console.log(request.body);
	models.Book.create({
        title: request.body['title'],
        author: request.body['author'],
        genres: request.body['genres'],
        state: request.body['state'],
        price: request.body['price'],
        rating: request.body['rating'],
        availability: request.body['availability']
    }).then(function(book) {
        var data = {
            error: "false",
            message: "New book saved.",
            book: book
        };

        response.send(data);
        next();
    });
});

// Update a particular book details
router.put('/:id', function(request, response, next) {
	models.Book.find({
        where: {
            'uuid': request.params.id
        }
    }).then(function(book) {
        if(book){
            book.updateAttributes({
                title: request.body['title'],
                author: request.body['author'],
                genre: request.body['genre'],
                price: request.body['price'],
                rating: request.body['rating'],
                availability: request.body['availability']
            }).then(function(book) {
                var data = {
                    error: "false",
                    message: "Book details updated.",
                    book: book
                };

                response.send(data);
                next();
            });
        }
    });
});

// Delete a particular book
router.delete('/:id', function(request, response, next) {
	models.Book.destroy({
        where: {
            uuid: request.params['id']
        }
    }).then(function(book) {
        var data = {
            error: "false",
            message: "Book deleted.",
            book: book
        };

        response.send(data);
        next();
    });
});

module.exports = router;


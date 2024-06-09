const AuthorDbModel = require('../models/author');
const authorModel = new AuthorDbModel();

const articleDbModel = require('../models/article');
const articleModel = new articleDbModel();

class AuthorController {
    constructor() {
        const authors = [];
    }

    async getAuthorById(req, res) {
        const author = await authorModel.findById(req.params.id);
        const articles = await articleModel.findMany('author_id', req.params.id);
        author['articles'] = articles;
        res.status(201).json({author: author});
    }
}

module.exports = AuthorController;
const Article = require('mongoose').model('Article');

module.exports = {
    createGet: (req, res) => {
        res.render('article/create');
    }, 

    createPost: (req, res) => {
        let articleArgs = req.body;

        let errorMsg = '';

        if (!req.isAuthenticated()) {
            errorMsg = "You should be logged to see this article";
        } else if (!articleArgs.title) {
            errorMsg = "Invalid Title";
        } else if (!articleArgs.content) {
            errorMsg = "Invalid Content";
        }

        if (errorMsg) {
            res.render('article/create', {
                error: errorMsg
            });
            return;
        }

        articleArgs.author = req.user.id;

        Article.create(articleArgs).then(article => {
            req.user.articles.push(article.id);
            req.user.save(err => {
                if (err) {
                    res.redirect('/', {error: err.message})
                } else {
                    res.redirect('/');
                }
            });
        });
    }, 
    
    details: (req, res) => {
        let id = req.params.id;

        Article.findById(id).populate('author').then(article => {
            res.render('article/details', article)
        })
    },

    editGet: (req, res) => {
        let id = req.params.id;

        Article.findById(id).then(article => {
            res.render('article/edit', article);
        });
    }, 

    editPost: (req, res) => {
        let id = req.params.id;

        let articleArgs = req.body;

        let errorMsg = '';
        if (!articleArgs.title) {
            errorMsg = "Invalid Title";
        } else if (!articleArgs.content) {
            errorMsg = "Invalid Content";
        }

        if (errorMsg) {
            res.render('article/edit', {
                error: errorMsg
            })
        } else {
            Article.update({_id: id}, {$set: {title: articleArgs.title, content: articleArgs.content}}).then(updateStatus => {
                res.redirect(`/article/details/${id}`);
            })
        }
    },

    deleteGet: (req, res) => {
        let id = req.params.id;

        Article.findById(id).then(article => {
            res.render('article/delete', article);
        });
    }
};
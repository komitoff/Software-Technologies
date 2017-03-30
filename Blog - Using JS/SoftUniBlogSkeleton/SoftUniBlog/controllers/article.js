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
            res.render('article/create', {error: errorMsg});
            return;
        }

        articleArgs.author = req.user.id;

        Article.create(articleArgs).then(article => {
            req.user.articles.push(article.id);
            res.user.save(err => {
                if (err) {
                    res.redirect('/', {error: err.message})
                } else {
                    res.redirect('/');
                }
            })
        });
    }
}
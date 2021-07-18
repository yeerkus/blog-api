const ArticleServices = require("../services/article.services");

module.exports = class ArticlesCtrl{
    static async apiGetAllArticles(req, res, next){
        try{
            const Articles = await ArticleServices.getAllArticles();
            if(!Articles){
                res.send("No Articles have been posted yet");
            }
            res.json(Articles);
        }
        catch(err){
            console.log(err);
        }
    }
    static async apiGetOneArticle(req, res, next){
        try{
            const oneArticle = await ArticleServices.getOneArticle(req.params.id);
            if(!oneArticle){
                res.json(`Article with ${req.params.id} Doesn't Exist`)
            }
            res.json(oneArticle);
        }
        catch(err){
            console.log(err);
        }
    }
    static async apiCreateOneArticle(req, res, next){
        try{
            const response = await ArticleServices.createOneArticle(req.body);
            res.json(response);
        }
        catch(err){
            console.log(err)
        }
    }
    static async apiDeleteOneArticle(req, res, next){
        try{
            const response = await ArticleServices.deleteOneArticle(req.params.id)
            res.json({message: "Article Deleted"})
        }
        catch(err){
            console.log(err)
        }
    }
    static async apiUpdateOneArticle(req, res, next){
        try{
            const updatedArticle = await ArticleServices.updateOneArticle(req.params.id, req.body);
            if(updatedArticlePost.modifiedCount === 0){
                throw new Error("Unable to Update the  article")
            }
            res.json(updatedArticle)
        }
        catch(err){
            console.log(err)
        }
    }
}
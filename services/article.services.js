const Article = require("../models/Article");

module.exports = class ArticleServices{
    static async getAllArticles(){
        try {   
            const allArticles = await Article.find();
            return allArticles;
        }
        catch(err){
            console.log(err)
            console.log("Couldn't Get Any Articles")
        }
    }
    static async getOneArticle(id){
        try{
            const oneArticle = await Article.findById(id);
            return oneArticle;
        }
        catch(err){
            console.log(err);
            console.log(`Couldn't Get Article with id ${id}`)
        }
    }
    static async createOneArticle(data){
        try{
            const newPost = new Article({
                title: data.title,
                description: data.description,
                body: data.body
            });
            const newArticle = await newPost.save();
            return newArticle;
        }
        catch(err){            
            console.log(`Couldn't Create New Article ${data.title}`)
            console.log(err)
        }
    }
    static async deleteOneArticle(id){
        try{
            const response = await Article.findOneAndDelete(id);
            return response;
        } 
        catch(err){
            console.log(err)
            console.log(`Couldn't Delete Article with id ${id}`)
        }
    }
    static async updateOneArticle(id, data){
        try{
            const updatedArticle = await Article.findByIdAndUpdate(id, {
                title: data.title,
                description: data.description,
                body: data.body
            })
            return updatedArticle;
        }
        catch(err){
            console.log(err);
            console.log("Couldn't Update article")
        }
    }
}
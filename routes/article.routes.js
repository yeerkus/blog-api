const express = require('express');
const ArticleCtrl = require('../controllers/article.controllers');
const router = express.Router();

router.get("/", ArticleCtrl.apiGetAllArticles);
router.get("/article/:id", ArticleCtrl.apiGetOneArticle);
router.post("/", ArticleCtrl.apiCreateOneArticle);
router.delete("/article/:id", ArticleCtrl.apiDeleteOneArticle);
router.put("/article/:id", ArticleCtrl.apiUpdateOneArticle);


module.exports = router;
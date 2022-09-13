const express = require("express");
const router = express.Router();
const { Articles } = require("../models");


router.get("/", async (req, res) => {
    const listOfArticles = await Articles.findAll();
    res.json(listOfArticles);
});

router.get("/article/:id", async (req, res) => {
    const id = req.params.id;
    const article = await Articles.findByPk(id);
    res.json(article);
});


router.post("/articleadd", async (req, res) => {
    const article = req.body;
    await Articles.create(article);
    res.json(article);
});


module.exports = router;
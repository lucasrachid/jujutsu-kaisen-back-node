const express = require('express');
const routesEN = express.Router();

routesEN.get('/englishVersion/mangaSearch/:mangaName', async (req, res) => {
  res.send(`Manga Info ${req.params.mangaName}`);
});

routesEN.get('/englishVersion/mangaInfo/:mangaId', async (req, res) => {
  res.send(`Manga Info ${req.params.mangaId}`);
});

routesEN.get('/englishVersion/mangaChapter/:mangaChapter', async (req, res) => {
  res.send(`Manga Info ${req.params.mangaChapter}`);
});

module.exports = routesEN;

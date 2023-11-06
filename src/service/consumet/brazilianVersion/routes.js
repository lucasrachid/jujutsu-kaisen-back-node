const express = require('express');
const { searchForMangaBR, getMangaInfoBR, getMangaChapterBR } = require('.');
const routesBR = express.Router();

routesBR.get('/brazilianVersion/mangaSearch/:mangaName', async (req, res) => {
  res.send(await searchForMangaBR(req.params.mangaName));
});

routesBR.get('/brazilianVersion/mangaInfo/:mangaId', async (req, res) => {
  res.send(await getMangaInfoBR(req.params.mangaId));
});

routesBR.get('/brazilianVersion/mangaChapter/:mangaChapter', async (req, res) => {
  res.send(await getMangaChapterBR(req.params.mangaChapter));
});

module.exports = routesBR;

import express from 'express';
const routesEN = express.Router();

routesEN.get('/englishVersion/mangaSearch/:mangaName', async (req: any, res: any) => {
  res.send(`Manga Info ${req.params.mangaName}`);
});

routesEN.get('/englishVersion/mangaInfo/:mangaId', async (req: any, res: any) => {
  res.send(`Manga Info ${req.params.mangaId}`);
});

routesEN.get('/englishVersion/mangaChapter/:mangaChapter', async (req: any, res: any) => {
  res.send(`Manga Info ${req.params.mangaChapter}`);
});

export { routesEN };

import { searchForManga, getMangaInfo, getMangaChapter } from './index';
import express from 'express';

const routesEN = express.Router();

routesEN.get('/englishVersion/mangaSearch/:mangaName', async (req: any, res: any) => {
  res.send(await searchForManga(req.params.mangaName));
});

routesEN.get('/englishVersion/mangaInfo/:mangaId', async (req: any, res: any) => {
  res.send(await getMangaInfo(req.params.mangaId));
});

routesEN.get('/englishVersion/mangaChapter/:mangaChapter', async (req: any, res: any) => {
  res.send(await getMangaChapter(req.params.mangaChapter));
});

export { routesEN };

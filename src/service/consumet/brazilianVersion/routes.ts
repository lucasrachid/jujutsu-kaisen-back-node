import { searchForMangaBR, getMangaInfoBR, getMangaChapterBR } from './index';
import express from 'express';

const routesBR = express.Router();

routesBR.get('/brazilianVersion/mangaSearch/:mangaName', async (req: any, res: any) => {
  res.send(await searchForMangaBR(req.params.mangaName));
});

routesBR.get('/brazilianVersion/mangaInfo/:mangaId', async (req: any, res: any) => {
  res.send(await getMangaInfoBR(req.params.mangaId));
});

routesBR.get('/brazilianVersion/mangaChapter/:mangaChapter', async (req: any, res: any) => {
  res.send(await getMangaChapterBR(req.params.mangaChapter));
});

export { routesBR };

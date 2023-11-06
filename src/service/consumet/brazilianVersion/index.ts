import { MANGA } from "../../../../node_modules/@consumet/extensions/dist/index";

async function searchForMangaBR(mangaName: string) {
  try {
    const manga = new MANGA.Mangasee123();
    const results = await manga.search(mangaName);
    return results;
  } catch (error) {
    return error;
  }
}

async function getMangaInfoBR(mangaId: string) {
  try {
    const manga = new MANGA.Mangasee123();
    const results = await manga.fetchMangaInfo(mangaId);
    return results;
  } catch (error) {
    return error;
  }
}

async function getMangaChapterBR(chapterId: string) {
  try {
    const manga = new MANGA.Mangasee123();
    const results = await manga.fetchChapterPages(chapterId);
    return results;
  } catch (error) {
    return error;
  }
}

export { searchForMangaBR, getMangaInfoBR, getMangaChapterBR };

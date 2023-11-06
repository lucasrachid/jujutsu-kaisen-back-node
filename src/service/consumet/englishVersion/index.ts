import { MANGA } from "../../../../node_modules/@consumet/extensions/dist/index";

async function searchForMangaEnglishVersion(mangaName: string) {
  const manga = new MANGA.Mangasee123();
  const results = await manga.search(mangaName);
  return results;
}

async function getMangaInfoEnglishVersion(mangaId: string) {
  const manga = new MANGA.Mangasee123();
  const results = await manga.fetchMangaInfo(mangaId);
  return results;
}

async function getMangaChapterEnglishVersion(chapterId: string) {
  const manga = new MANGA.Mangasee123();
  const results = await manga.fetchChapterPages(chapterId);
  return results;
}

export { searchForMangaEnglishVersion, getMangaInfoEnglishVersion, getMangaChapterEnglishVersion };
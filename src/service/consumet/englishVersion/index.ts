import { IMangaChapterPage, IMangaInfo, IMangaResult, ISearch, MANGA } from "@consumet/extensions";

async function searchForManga(mangaName: string): Promise<ISearch<IMangaResult>> {
  const manga = new MANGA.Mangasee123();
  const results = await manga.search(mangaName);
  return results;
}

async function getMangaInfo(mangaId: string): Promise<IMangaInfo> {
  const manga = new MANGA.Mangasee123();
  const results = await manga.fetchMangaInfo(mangaId);
  return results;
}

async function getMangaChapter(chapterId: string): Promise<IMangaChapterPage[]> {
  const manga = new MANGA.Mangasee123();
  const results = await manga.fetchChapterPages(chapterId);
  return results;
}

export { searchForManga, getMangaInfo, getMangaChapter };

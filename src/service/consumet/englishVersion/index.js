const { MANGA } = require('@consumet/extensions');

async function searchForMangaEnglishVersion(mangaName) {
  const manga = new MANGA.Mangasee123();
  const results = await manga.search(mangaName);
  return results;
}

async function getMangaInfoEnglishVersion(mangaId) {
  const manga = new MANGA.Mangasee123();
  const results = await manga.fetchMangaInfo(mangaId);
  return results;
}

async function getMangaChapterEnglishVersion(chapterId) {
  const manga = new MANGA.Mangasee123();
  const results = await manga.fetchChapterPages(chapterId);
  return results;
}

module.exports = {
  searchForMangaEnglishVersion,
  getMangaInfoEnglishVersion,
  getMangaChapterEnglishVersion,
};

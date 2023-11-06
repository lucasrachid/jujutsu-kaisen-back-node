const { MANGA } = require('@consumet/extensions');

async function searchForMangaBR(mangaName) {
  try {
    const manga = new MANGA.Mangasee123();
    const results = await manga.search(mangaName);
    return results;
  } catch (error) {
    return error;
  }
}

async function getMangaInfoBR(mangaId) {
  try {
    const manga = new MANGA.Mangasee123();
    const results = await manga.fetchMangaInfo(mangaId);
    return results;
  } catch (error) {
    return error;
  }
}

async function getMangaChapterBR(chapterId) {
  try {
    const manga = new MANGA.Mangasee123();
    const results = await manga.fetchChapterPages(chapterId);
    return results;
  } catch (error) {
    return error;
  }
}

module.exports = {
  searchForMangaBR,
  getMangaInfoBR,
  getMangaChapterBR,
};

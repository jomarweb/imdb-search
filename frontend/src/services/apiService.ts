const API_HOST = process.env.NEXT_PUBLIC_API_HOST || 'https://default-api-host.com';

const CACHE_EXPIRATION_TIME = 3600000; // 1 hour in milliseconds

const searchCache = new Map();
const detailsCache = new Map();

function setCache(cache, key, data) {
  const expirationTime = Date.now() + CACHE_EXPIRATION_TIME;
  cache.set(key, { data, expirationTime });
}

function getCache(cache, key) {
  const cached = cache.get(key);
  if (cached && cached.expirationTime > Date.now()) {
    return cached.data;
  }
  cache.delete(key);
  return null;
}

export async function fetchSearchResults(query: string, page: number) {
  const cacheKey = `${query}-${page}`;
  const cachedData = getCache(searchCache, cacheKey);
  if (cachedData) {
    return cachedData;
  }
  try {
    const response = await fetch(`${API_HOST}/api/movies/search?title=${query}&page=${page}`);
    if (!response.ok) {
      throw new Error(`Error fetching search results: ${response.statusText}`);
    }
    const data = await response.json();
    setCache(searchCache, cacheKey, data);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function fetchMovieDetails(imdbID: string) {
  const cachedData = getCache(detailsCache, imdbID);
  if (cachedData) {
    return cachedData;
  }
  try {
    console.log('fetching details for', API_HOST);
    const response = await fetch(`${API_HOST}/api/movies/${imdbID}`);
    if (!response.ok) {
      throw new Error(`Error fetching movie details: ${response.statusText}`);
    }
    const data = await response.json();
    setCache(detailsCache, imdbID, data);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

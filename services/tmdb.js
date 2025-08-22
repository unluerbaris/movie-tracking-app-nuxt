const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const BASE_URL = "https://api.themoviedb.org/3"

export async function fetchData(url) {
  try {
    const res = await fetch(`${BASE_URL}${url}?api_key=${API_KEY}&language=en-US&page=1`)
    const data = await res.json()
    return data.results
  } catch (err) {
    console.error("Error fetching data:", err)
  }
}
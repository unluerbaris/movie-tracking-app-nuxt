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

export async function fetchDetails(url) {
  try {
    const res = await fetch(`${BASE_URL}${url}?api_key=${API_KEY}&language=en-US&append_to_response=credits`)
    const data = await res.json()
    return data
  } catch (err) {
    console.error("Error fetching details:", err)
    return null
  }
}

export async function fetchMultipleItems(endpoint, params = {}) {
  const url = new URL(`${BASE_URL}${endpoint}`)
  url.searchParams.append("api_key", API_KEY)

  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key])
  )

  const res = await fetch(url)
  if (!res.ok) throw new Error(`TMDB API Error: ${res.status}`)
  return res.json()
}
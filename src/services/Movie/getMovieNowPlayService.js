import api from "../api";

export async function getMovieNowPlayService() {
  const apiKey = import.meta.env.VITE_API_KEY;

  if (!apiKey) {
    throw new Error("VITE_API_KEY não está definido. Adicione-o ao .env");
  }
  try {
    const response = await api.get("/movie/now_playing", {
      params: { api_key: apiKey, language: "pt-BR", page: 1 },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching now playing movies:", error);
    throw error;
  }
}

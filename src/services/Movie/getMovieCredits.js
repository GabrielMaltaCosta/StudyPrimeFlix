import api from "../api";

export async function getMovieCredits(movieId) {
  const apiKey = import.meta.env.VITE_API_KEY;
  if (!apiKey) throw new Error("API_KEY não está definido. Adicione-o ao .env");
  try {
    const response = await api.get(`movie/${movieId}/credits`, {
      params: { api_key: apiKey, language: "pt-BR" },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching movie credits", error);
    throw error;
  }
}

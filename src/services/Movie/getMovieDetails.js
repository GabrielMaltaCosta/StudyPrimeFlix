import api from "../api";

export async function getMovieDetails(movieId) {
  const apiKey = import.meta.env.VITE_API_KEY;
  if (!apiKey) {
    throw new Error("API_KEY não está definido. Adicione-o ao .env");
  }
  try {
    const response = await api.get(`movie/${movieId}`, {
      params: {
        api_key: apiKey,
        language: "pt-BR",
        append_to_response: "release_dates",
      },
    });
    return response.data;
  } catch (error) {
    console.log("Error Fetching a movie details", error);
    throw error;
  }
}
/**
 * Fazer uma função generica, passar a Url inteira como params
 */

const API_KEY = "8c73fa0";
const BASE_URL = "https://www.omdbapi.com";

export const getPopularMovies = async () => {
    return await searchMovies("batman"); // example "popular" query
};

export const searchMovies = async (query) => {
    try {
        const response = await fetch(`${BASE_URL}/?s=${encodeURIComponent(query)}&apikey=${API_KEY}`);
        if (!response.ok) throw new Error("Network response was not ok");

        const data = await response.json();

        if (data.Response === "False") {
            throw new Error(data.Error); // ❌ This error will now be handled in Home.jsx
        }

        return data.Search || [];
    } catch (error) {
        console.error("Fetch Error:", error);
        throw error; // ✅ Re-throw to let Home.jsx handle it
    }

};

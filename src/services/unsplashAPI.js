import axios from "axios";

const API_KEY = "B6a2gC6Pf03L9p7HQkpffaMlOYu1AmB-4oBrTzwtt1A";
const BASE_URL = "https://api.unsplash.com/search/photos";

export const fetchImages = async (query, page) => {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                query,
                page,
                per_page: 12,
                client_id: API_KEY,
            },
        });
        return response.data;
    } catch (error) {
        throw new Error("An error occurred while loading images!");
    }
};

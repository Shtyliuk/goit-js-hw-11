export async function getGallery(queryName) {
    if (!queryName.trim()) {
        throw new Error("Query cannot be empty");
    }

    const BASE_URL = 'https://pixabay.com';
    const END_POINT = '/api/';
    const API_KEY = "49495202-279cad4ade428b3db0cc5c04a"; 
    const PARAMS = new URLSearchParams({
        key: API_KEY,
        q: queryName,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
    });

    const url = `${BASE_URL}${END_POINT}?${PARAMS}`;
    console.log(url);

    try {
        const response = await fetch(url);
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || `Error: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Fetch error:", error);
        throw error;
    }
}

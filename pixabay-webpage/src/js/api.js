const API_KEY = '46176149-d612357420c4c85e178582eee';
const BASE_URL = 'https://pixabay.com/api/';

export const fetchImages = async (page = 1) => {
    try {
        const response = await fetch(`${BASE_URL}?key=${API_KEY}&page=${page}&per_page=20&order=popular`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.hits;
    } catch (error) {
        console.error('Error fetching images:', error);
        return [];
    }
};
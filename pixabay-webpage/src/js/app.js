const apiKey = '46176149-d612357420c4c85e178582eee'; 
const apiUrl = 'https://pixabay.com/api/?key=' + apiKey + '&category=editorial&per_page=20&page=';

let currentPage = 1;

document.addEventListener('DOMContentLoaded', () => {
    loadImages(currentPage);

    const loadMoreButton = document.getElementById('load-more');
    loadMoreButton.addEventListener('click', () => {
        currentPage++;
        loadImages(currentPage);
    });
});

async function loadImages(page) {
    try {
        const response = await fetch(apiUrl + page);
        const data = await response.json();
        displayImages(data.hits);
    } catch (error) {
        console.error('Error fetching images:', error);
    }
}

function displayImages(images) {
    const gallery = document.getElementById('image-gallery');
    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.webformatURL;
        imgElement.alt = image.tags;
        gallery.appendChild(imgElement);
    });
}
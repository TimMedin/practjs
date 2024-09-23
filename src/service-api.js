const BASE_URL = 'https://newsapi.org/v2/everything/';
const API_KEY = '3ce63eea477043d7a470d2b21dc5ab4b';

const options = {
    headers: {
        'Authorization': API_KEY,
    },
};

export class NewsApiService {
    constructor() {
        this.page = 1;
        this.searchQuery = '';
    }

    async searchArticles() {
        const url = `${BASE_URL}?q=${this.searchQuery}&pageSize=20&page=${this.page}`;
        const response = await fetch(url, options);
        const data = await response.json();
        return data.articles;
    }
}

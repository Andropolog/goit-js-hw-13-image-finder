import axios from 'axios'

const BASE_URL = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal&'
const API_KEY = '21713203-59f88e93ebf9f6a1a38c26b66'

export class ImagesQuery {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  async fetchImages() {
    return await fetch(`${BASE_URL}q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`)
      .then(r => r.json())
      .then(data => {
        this.incrementPage()
        return data.hits;
    });
  }

  incrementPage() {
    this.page += 1;
    }
    
  resetPage() {
    this.page = 1;
    }
    
  get query() {
    return this.searchQuery;
    }
    
  set query(newQuery) {
    this.searchQuery = newQuery;
    }
    
}
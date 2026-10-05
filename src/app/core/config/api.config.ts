import {
  environment
} from '../../../environments/environment';

export const API_CONFIG = {

  baseUrl: environment.apiUrl,

  endpoints: {
    articles: '/articles',
    categories: '/articles/categories',
    tags: '/articles/tags', 
    articleBySlug: '/articles/slug',
    contact: '/contact/messages',
    relatedArticles: '/articles/related',
  }

};
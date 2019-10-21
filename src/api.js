import apiService from './services/api';

export default {
    categories: () => apiService.get('/api/categories'),
    docs: type => apiService.post('/api/docs', { type }),
    doc: id => apiService.post('/api/doc', { id }),
};
import axios from 'axios'
axios.defaults.baseURL = 'https://api.unsplash.com/'
const YOUR_ACCESS_KEY = '_MGPUAZwtkJ33GxQWTPh3XY2g6zGASobKTE2Qtap5gU'
export const SearchApi = async (searchQuery, page) =>  {
    const response = await axios.get('/search/photos', {
        params: {
            query: searchQuery,
            client_id: YOUR_ACCESS_KEY,
            per_page: 12,
            page,
        }
    })
return response.data.results
   
}
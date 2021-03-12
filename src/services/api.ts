import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.coinlore.net/api/tickers/'
})

export default api;
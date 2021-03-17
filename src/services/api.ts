import axios from 'axios';

const api = axios.create({
  baseURL: 'https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/',
  headers: {
    'x-rapidapi-key': 'ddb05e6409mshbf1b328b3e2274ap12246cjsna8e6828bb117',
    'x-rapidapi-host': 'covid-19-coronavirus-statistics.p.rapidapi.com'
  }
})

export default api;
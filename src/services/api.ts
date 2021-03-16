import axios from 'axios';

// api_key = test_a2a7393319f786ced897e899fd8b92 / live_142e6892762b7a3ba4153128986c78

const api = axios.create({
  baseURL: 'https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/',
  headers: {
    'x-rapidapi-key': 'ddb05e6409mshbf1b328b3e2274ap12246cjsna8e6828bb117',
    'x-rapidapi-host': 'covid-19-coronavirus-statistics.p.rapidapi.com'
  }
})

// const api = axios.create({
//   baseURL: 'https://api.coinlore.net/api/'
// })

export default api;
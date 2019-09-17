import { apiKey } from './apiKey';

export const getTodaysInfo = async() => {
  fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
    .then(response => {
      if(!response.ok){
        return error => error.message
      }else{
        return response.json()
      }
    })
    .then(data => data)
    .catch(error => error.message)
}
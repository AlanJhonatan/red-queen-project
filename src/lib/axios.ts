import axios from "axios";

export const api = axios.create({
  baseURL: 'https://api.twitter.com/1.1/'
})

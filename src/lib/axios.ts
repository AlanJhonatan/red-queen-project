import axios from "axios";
import { RapidAPIKeys } from "../configs/keys";

const rapid = axios.create({
  baseURL: RapidAPIKeys.RAPID_BASE_URL,
  headers: {
    'X-RapidAPI-Key': RapidAPIKeys.RAPID_API_KEY,
    'X-RapidAPI-Host': RapidAPIKeys.RAPID_BASE_URL,
  }
})

export const api = {
  rapid,
}

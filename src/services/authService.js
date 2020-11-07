import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/login";

export function login(url, username, password) {
  
  return http.post(apiEndpoint,  {url, username, password}
  
  );
}

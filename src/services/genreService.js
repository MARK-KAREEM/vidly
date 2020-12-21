import http from "./httpServices";
import { apiUrl } from "./config";

export function getGenres() {
  return http.get(apiUrl + "/genres");
}

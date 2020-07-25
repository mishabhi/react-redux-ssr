import * as Api from "../common";
import * as Resource from "../resources";

export function getAllMovies(){
  const url = Resource.ALL_MOVIES;
  return Api.get(url);
}
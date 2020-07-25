import * as Api from "../common";
import * as Resource from "../resources";

export function getAllSeries(){
  const url = Resource.SERIES_URL;
  return Api.get(url);
}
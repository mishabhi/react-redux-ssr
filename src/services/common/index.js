import Axios from "axios";

export function get(url, config = {}){
    return new Promise((resolve, reject) => {
      Axios
        .get(url, config)
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          reject(error);
        });
    });
}
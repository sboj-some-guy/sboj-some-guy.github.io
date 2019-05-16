import qs from "qs";
import { isEmpty } from "lodash";

export const getRequest = (url, params, checkFunction) => {
  return new Promise((resolve, reject) => {
    if (params && !isEmpty(params)) {
      url = url + "?" + qs.stringify(params);
    }
    fetch(url)
      .then(checkFunction)
      .then(body => {
        resolve({ body: body });
      });
    setTimeout(() => {
      reject({ message: "Oops...! There seems to some problem with the connection. Please try again..." });
    }, 10000)
  });
}

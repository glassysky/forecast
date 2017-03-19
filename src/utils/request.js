import {
  heFengURL,
  heFengKey,
  heFengApiType,
} from '../constants/config';

const fetch = window.fetch;

const generateQuery = (data) => {
  const keys = Object.keys(data);
  let query = '';
  keys.forEach((item) => {
    query += `&${item}=${data[item]}`;
  });
  return `?${query.substr(1)}`;
};

class Request {
  constructor() {
    this.prefix = heFengURL;
    this.key = heFengKey;
    this.requestTypes = heFengApiType;
    this.data = {
      key: heFengKey,
    };
  }
  _fetchData(method, params, success, fail) {
    const isGet = method === 'GET';
    const data = Object.assign({}, this.data, params.data);
    const body = isGet ? {} : JSON.stringify(data);
    const query = isGet ? generateQuery(data) : '';
    const headers = params.header || {};
    const url = `${this.prefix}${params.url}${query}`;
    fetch(url, {
      method,
      headers,
      body,
    })
      .then(res => res.json())
      .then(res => success(res))
      .catch(error => fail(error));
  }
  /*
  ** @params params(Object)
      params: {
        url: '',
        data: {
          city:
        },
      }
  */
  get(params, success, fail) {
    this._fetchData('GET', params, success, fail);
  }
  post(params, success, fail) {
    this._fetchData('POST', params, success, fail);
  }
}

export default Request;

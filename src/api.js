import axios from 'axios';
import _ from 'lodash';

export function callApi(url, methodType = 'GET', config = {}) {
  const method = methodType.toLowerCase();

  return axios({
    method,
    url,
    ...config
  }).then(
    result => {
      if (result.status !== 200 && _.get(result, 'data.status') !== 'ok') {
        return Promise.reject(result);
      }
      if (_.get(result, 'data.status') === 'error') {
        return Promise.reject(result);
      }

      const response =
        _.get(result, 'data.data') || _.get(result, 'data') || result;

      if (response.token) {
        window.token = response.token;
      }

      return response;
    },
    error => Promise.reject(error)
  );
}

export default function api(
  endpoint,
  methodType = 'GET',
  data = {},
  config = {},
  multipartFormData = false,
  withToken = true
) {
  const queryConfig = { ...config };

  if (
    (queryConfig.data === null || queryConfig.data === undefined) &&
    methodType !== 'GET'
  ) {
    queryConfig.data = data;
  }

  if (!queryConfig.headers) {
    queryConfig.headers = {};
  }

  if (multipartFormData) {
    const formData = new FormData();
    Object.keys(data).forEach(key => {
      const value = data[key];
      if (Array.isArray(value)) {
        value.forEach(item => {
          formData.append(key, item);
        });
      } else {
        formData.append(key, value);
      }
    });
    queryConfig.data = formData;

    Object.assign(queryConfig.headers, {
      'Content-Type': 'multipart/form-data'
    });
  }

  if (window.token && withToken) {
    Object.assign(queryConfig.headers, {
      Authorization: `Bearer ${window.token}`
    });
  }

  const queryMethodType = methodType.toUpperCase();

  if (queryMethodType === 'GET') {
    queryConfig.params = {
      ...data
    };
  }

  return callApi(endpoint, queryMethodType, queryConfig)
    .then(response => ({ response }))
    .catch(error => ({
      error,
      errorData: _.get(error, 'response.data') || {}
    }));
}

export const OK = 'ok';

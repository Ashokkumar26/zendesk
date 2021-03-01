import axios, { AxiosRequestConfig } from "axios";
import { ResponseE, ResponseT } from "./types";
import { encode } from "base-64";
import * as R from "ramda";

const validEmailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const onlyNumberRegex = /^[0-9]+$/g;

export const hasOnlyNumbers = (str: string) => onlyNumberRegex.test(str);

export const hasValidEmail = (email: string) => validEmailFormat.test(email);
const encodeCredentials = (username, password) =>
  R.compose(R.concat("Basic "), encode)(`${username}:${password}`);
export const makeHeader = (
  username: string,
  password: string
): AxiosRequestConfig => ({
  headers: {
    "Content-Type": "application/json",
    Authorization: encodeCredentials(username, password),
  },
});
const makeResponse = (response): ResponseT => {
  console.log("response", response);
  return {
    data: response.data,
    status: response.status,
  };
};
const makeReasonE = (reason): ResponseE => {
  console.log("reason", reason);
  return {
    status: reason.response ? reason.response.status : 0,
    message: reason.response
      ? {
          text: reason.response.statusText,
          data: reason.response.data,
        }
      : "Domain Error",
  };
};
export const makeGetAxios = (url: string, config?: AxiosRequestConfig) =>
  config ? axios.get(url, config) : axios.get(url);

export const makePostAxios = (url: string, config: AxiosRequestConfig, data?) =>
  data ? axios.post(url, data, config) : axios.post(url, {}, config);

export const makeDeleteAxios = (url: string, config: AxiosRequestConfig) =>
  axios.delete(url, config);

export const makePutAxios = (url: string, config: AxiosRequestConfig, data?) =>
  data ? axios.put(url, data, config) : axios.put(url, {}, config);

export const makeGetRequest = (url: string) => async (
  config?: AxiosRequestConfig
) => {
  try {
    let response = await makeGetAxios(url, config);
    return makeResponse(response);
  } catch (err) {
    throw makeReasonE(err);
  }
};

export const makePostRequest = (url: string, data?: any) => async (
  config: AxiosRequestConfig
) => {
  try {
    let response = await makePostAxios(url, config, data);
    return makeResponse(response);
  } catch (err) {
    throw makeReasonE(err);
  }
};

export const makeDeleteRequest = (url: string) => async (
  config?: AxiosRequestConfig
) => {
  try {
    let response = await makeDeleteAxios(url, config);
    return makeResponse(response);
  } catch (err) {
    throw makeReasonE(err);
  }
};

export const makePutRequest = (url: string, data?: any) => async (
  config: AxiosRequestConfig
) => {
  try {
    let response = await makePutAxios(url, config, data);
    return makeResponse(response);
  } catch (err) {
    throw makeReasonE(err);
  }
};

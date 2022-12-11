import axios from "axios";

const instance = axios.create({
  baseURL: process.env.BASE_API_URL,
});
``;
export interface IAxiosResponse<T> {
  info: any;
  results: T[];
}

export default instance;

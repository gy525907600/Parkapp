import axios from "axios";

const baseURL = 'http://loaclhost:4000/api';

export const axiosInstance = axios.create({
  baseURL,
  withCredentials: true,
  responseType: 'json',
});
// to-do future login interceptor here

export type IPath = (string | number)[] | string | number;

export function getPath(path: IPath): string {
    return !Array.isArray(path) ? String(path) : path.join('/');
}
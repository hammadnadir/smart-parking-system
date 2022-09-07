import axios from "axios";
// import { errorInterceptor, requestInterceptor } from "./interceptors";

const baseURL = `https://smart-parking-new.herokuapp.com`;
// const baseURL = `https://graceshopaholic-api.herokuapp.com/api/`;
// const baseURL = `${process.env.NEXT_PUBLIC_API_URL}`;

const request = axios.create({  baseURL: baseURL });
// request.interceptors.response.use(null, errorInterceptor);
// request.interceptors.request.use(requestInterceptor);

export default request;
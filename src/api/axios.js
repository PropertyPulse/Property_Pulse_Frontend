import axios from 'axios';
const BASE_URL = 'http://localhost:8080';

export default axios.create({
    baseURL: BASE_URL
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    withCredentials:true
});


// ,
// headers: {  "Content-Type" :"multipart/form-data" },
// withCredentials: true
// import axios from 'axios';
// const BASE_URL = 'http://localhost:8080';
//
// export default axios.create({
//     baseURL: BASE_URL
// });
//
// export const axiosPrivate = axios.create({
//     baseURL: BASE_URL,
//     withCredentials: true
// });
//
// // Modify the axiosPrivate instance to handle 'multipart/form-data'
// axiosPrivate.interceptors.request.use((config) => {
//     if (config.headers['Content-Type'] === 'multipart/form-data') {
//         // Do not set Content-Type or process the request body for FormData
//         return config;
//     }
//
//     // For other requests, set the default Content-Type to 'application/json'
//     config.headers['Content-Type'] = 'application/json';
//
//     return config;
// });
import axios from "axios";

const api = axios.create({
    baseURL: "http://127.0.0.1:5000/api/v1"
});



const AppAxios = axios.create({
    baseURL: "http://127.0.0.1:5000/api/v1"
})



AppAxios.interceptors.request.use(async config => {
    const accessToken = window.localStorage.getString("access_token");
    if (accessToken) {
        config.headers.token = `${accessToken}`
    }
    return config
});








export { api, AppAxios }
import axios from "axios";

const api = axios.create({
    baseURL: "http://127.0.0.1:5000/api/v1"
});



const AppAxios = axios.create({
    baseURL: "https://modern-maiga-durgesh0-ab1f7c3e.koyeb.app/api/v1"
})











export { api, AppAxios }
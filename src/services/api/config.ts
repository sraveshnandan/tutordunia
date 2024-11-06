import axios from "axios";

const api = axios.create({
    baseURL: "http://65.0.109.98:5000/api/v1"
});



const AppAxios = axios.create({
    baseURL: "http://65.0.109.98:5000/api/v1"
})

export { api, AppAxios }
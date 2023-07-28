import axios from "axios"

const BASE_URL = "http://localhost:5008/api/"
let TOKEN 

const persistedDataString = localStorage.getItem("persist:root");
if (persistedDataString !== null) {
   TOKEN = JSON.parse(JSON.parse(persistedDataString).user).currentUser.accessToken 
  console.log(TOKEN);
}


export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${TOKEN}` } // Update "header" to "headers"
});

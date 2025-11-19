import axios from "axios"

const callingApi = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
})  

//getting data form api 
export const getData = ()=>{
    return callingApi.get("/posts")
}

//api for deleting the data from api
export const deleteData = (id)=>{
    return callingApi.delete(`/posts/${id}`)
}

//  addding data with post method
export const postData =(newData)=>{
    return callingApi.post("/posts", newData)
}


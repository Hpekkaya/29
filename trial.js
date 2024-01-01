// An application programming interface (API) 
// is a way for two or more computer programs to communicate with each other. It is a type of software interface,

// function fetchResponse (){
//     fetch("ajax.txt")
//     .then(response => response.text())
//     .then(text => console.log(text))
//     .catch(err => console.log(err))
// }
// fetchResponse()

// // getting from JSON
// getJasonFile =() =>{
//     fetch("students.json")
//     .then(response => response.json())
//     .then(Jtext => console.log(Jtext))
//     .catch(err => console.log(err))
// }
// getJasonFile()

// Get request all the data

// class Request {
//     get(url){
//         fetch(url)
//         .then(response => response.json())
//         .then(data => console.log(data))
//         .catch(err => console.log(err))
//     }
// }
// const request =new Request()
// request.get("https://jsonplaceholder.typicode.com/albums")


// Get request processed the data

// class Request {
//     get(url){
//         return new Promise((resolve,reject) => {        
//         fetch(url)
//         .then(response => response.json())
//         .then(data => resolve(data))
//         .catch(err => reject(err))
//         })
//     }
// }
// const request =new Request()
// let albums;
// request.get("https://jsonplaceholder.typicode.com/albums")
// .then(data => {
//     albums =data;
//     console.log(albums)
// })
// .catch(err => console.log(err))

// Get request with async 
// class Request {
//         async get(url){
//             const response = await fetch(url)
//             const data = response.json()
//             return data            
//         }
// }

// const request = new Request();
// let albums;
// request.get("https://jsonplaceholder.typicode.com/albums")
// .then(data => {
//     albums =data;
//     console.log(albums)    
// })
// .catch(err => console.log(err))

//  Post request
// class Request {
//     post(url,data){
//         return new Promise((resolve,reject) =>{
//             fetch(url, {
//                 method: "POST",
//                 body: JSON.stringify(data),
//                 headers: {
//                     "Content-type": "application/json; charset=UTF-8"
//                 }
//             })
//             .then(response => response.json())
//             .then(data => resolve(data))
//             .catch(err => reject(err))
//         })
//     }
// }
// const request = new Request();
// request.post("https://jsonplaceholder.typicode.com/albums",{userId:1,title:"Thriller"})
// .then(newAlbum => console.log(newAlbum))
// .catch(err => console.log(err))

// // Post request with async
// class Request{
//     async post(url,data){
//         const response = await fetch(url, {
//             method : "POST",
//             body :JSON.stringify(data),
//             headers :{
//                 "Content-type" : "application/json; charset=UTF-8"
//             }
//         })
//         const responseData = await response.json()
//         return responseData
//     }
// }

// const request = new Request()
// request.post("https://jsonplaceholder.typicode.com/albums",{userId:2,name:"Hakan"})
// .then(dataResponse => console.log(dataResponse))
// .catch(err => console.log(err))

// Put request --- Updating the current data
// class Request {
//     put(url,data){
//         return new Promise((resolve,reject) =>{
//             fetch(url, {
//                 method: "PUT",
//                 body: JSON.stringify(data),
//                 headers: {
//                     "Content-type": "application/json; charset=UTF-8"
//                 }
//             })
//             .then(response => response.json())
//             .then(data => resolve(data))
//             .catch(err => reject(err))
//         })
//     }
// }
// const request = new Request();
// request.put("https://jsonplaceholder.typicode.com/albums/8",{userId:5,title:"Thriller"})
// .then(newAlbum => console.log(newAlbum))
// .catch(err => console.log(err))

// Put request (updating) with async
class Request{
    async put(url,data){
        const response = await fetch(url, {
            method : "PUT",
            body :JSON.stringify(data),
            headers :{
                "Content-type" : "application/json; charset=UTF-8"
            }
        })
        const responseData = await response.json()
        return responseData
    }
}

const request = new Request()
request.put("https://jsonplaceholder.typicode.com/albums/8",{userId:2,name:"Thriller"})
.then(dataResponse => console.log(dataResponse))
.catch(err => console.log(err))


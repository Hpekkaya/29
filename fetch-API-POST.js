// An application programming interface (API) 
// is a way for two or more computer programs to communicate with each other. It is a type of software interface,

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

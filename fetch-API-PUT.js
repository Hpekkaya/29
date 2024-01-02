// Put request --- Updating the current data
// Delete the existing content completely and update the new data- 
// In order to update data we use put 
// If we aim to some addings and save previous data we use patch 

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
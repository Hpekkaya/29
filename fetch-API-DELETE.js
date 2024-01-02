//  delete request
// class Request {
//     delete(url){
//         return new Promise((resolve,reject) =>{
//             fetch(url, {method: "DELETE"})
//             .then(() => resolve("Deleting Process is succesful") )
//             .catch(err => reject(err))
//         })
//     }
// }

// const request = new Request();
// request.delete("https://jsonplaceholder.typicode.com/albums/8")
// .then(message => console.log(message))
// .catch(err => console.log(err))

// delete request with async
class Request{
    async delete(url){
        const response = await fetch(url, {
            method : "DELETE" })
    }
}

const request = new Request();
request.delete("https://jsonplaceholder.typicode.com/albums/8")
.then(() => console.log("Deleting Process is succesful"))
.catch(err => console.log(err))
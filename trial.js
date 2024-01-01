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
class Request {
        async get(url){
            const response = await fetch(url)
            const data = response.json()
            return data            
        }
}

const request = new Request();
let albums;
request.get("https://jsonplaceholder.typicode.com/albums")
.then(data => {
    albums =data;
    console.log(albums)    
})
.catch(err => console.log(err))






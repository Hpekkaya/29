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

class Request {
    get(url){
        fetch(url)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
    }
}
const request =new Request()
request.get("https://jsonplaceholder.typicode.com/albums")

// An application programming interface (API) 
// is a way for two or more computer programs to communicate with each other. It is a type of software interface,

function fetchResponse (){
    fetch("ajax.txt")
    .then(response => response.text())
    .then(text => console.log(text))
    .catch(err => console.log(err))
}
fetchResponse()

// getting from JSON
getJasonFile =() =>{
    fetch("students.json")
    .then(response => response.json())
    .then(Jtext => console.log(Jtext))
    .catch(err => console.log(err))
}
getJasonFile()

// delete request with async  delete_sync_await.js
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
// The URLSearchParams() constructor creates and return new URLSearchParams object
let result=document.getElementById("testing");
fetch(genres_list_http + new URLSearchParams({
    api_key:api_key
}))
.then(res=>res.json())
.then(data=>{
    console.log(data);
    for(var x of data){
        console.log([x]);
    }
})
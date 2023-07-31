export function getBooksAPI(){
    return fetch('https://node-task-4-backend-08.onrender.com/createBooks')
    .then(res=>res.json())
    .then(data=>data);
}


export function addBookAPI(book){
    try{ 
        console.log(JSON.stringify(book));
        return fetch('https://node-task-4-backend-08.onrender.com/createBooks',{
        method:'POST',
        headers: {
            'Content-Type':'application/json',
        },
        body:JSON.stringify(book)
    })
        .then(res=>res.json())
        .then(data=>data);
    }
    catch(err){
        console.log(err);
    }
   
}

// books/${book._id}   = + book._id

export function updateBookAPI(book){
    return fetch("https://node-task-4-backend-08.onrender.com/createBooks"  + book._id,{
    // return fetch(`http://localhost:4000/books/${book._id}`,{
    method:'PATCH',
    headers: {
        'Content-Type':'application/json',
    },
    body:JSON.stringify(book)
})
    .then(res=>res.json())
    .then(data=>data);
}

export function deleteBookAPI(id){
    return fetch(`https://node-task-4-backend-08.onrender.com/createBooks/${id}`,{
    method:'DELETE',
    headers: {
        'Content-Type':'application/json',
    },
    // body:JSON.stringify(id)
})
    .then(res=>res.json())
    .then(data=>data);
}


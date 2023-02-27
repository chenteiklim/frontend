fetch('https://reqres.in/api/users',{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'Lim Chen Teik',
        Job: 'Software Engineer',
    }),
});

fetch('https://reqres.in/api/users/5',{
    method:'DELETE',
})
    .then((data)=>console.log(data))
    .catch((error)=>console.log(error));


fetch('https://reqres.in/api/users/2',{
    method:'DELETE',
})
    .then((data)=>console.log(data))
    .catch((error)=>console.log(error));

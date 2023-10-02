const a = {
    name: "phuc",
    age: 30
}
const d = {
    ...a,
    age: 10
}

const b = {
    ...d,
    name: "fuck"
}
const c = { ...a, ...d, ...b }

function post() {
    // fetch ('https://js-post-api.herokuapp.com/api/posts',{
    //     method : "GET"
    // }).then(function(response){
    //     // let posts = response.json();
    //     return response.json();
    // }).then(function(post){
    //     console.log(post);
    // })

    fetch('https://js-post-api.herokuapp.com/api/posts', {
        method: "GET"
    }).then(async function (data) {
        let post = await data.json();
        console.log(post);
    })
}

async function renderPost() {
    let data = await fetch("https://js-post-api.herokuapp.com/api/posts", {
        method: "GET"
    })
    let posts = await data.json();
    console.log(posts);
}

renderPost();


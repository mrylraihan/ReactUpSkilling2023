


export function fnGetall(setter) {
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(setter)
        .catch(console.error) 
}
export function fnGetOne(setter, id) {
    return fetch('https://jsonplaceholder.typicode.com/posts/'+id)
        .then(res => res.json())
        .then(setter)
        .catch(console.error) 
}

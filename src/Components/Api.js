function Api (){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
  
    return(
        <>
        <h1>hello</h1>
        </>
    )
}
export default Api;
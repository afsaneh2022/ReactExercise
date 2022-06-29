  export async function get_todos(){
    let response = await fetch("https://dummyjson.com/todos");
    let result= await response.json();
   
    return result.todos;
   
}
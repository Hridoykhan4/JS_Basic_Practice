// wait ==>  talk to server ==> file read / write   


// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((response) => response.json())
//   .then((json) => console.log(json));
const displayTodos = (todos) => {
  /* {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
} */
  const todoContainer = document.getElementById("todo-container");
  todoContainer.innerHTML = ``
  for (let i = 0; i < todos.length; i++) {
    let todo = todos[i];
    // console.log(todo);
    const todoCard = document.createElement("div");
    todoCard.className = `card-style p-4`;
    todoCard.innerHTML = `
        <h2 class="text-red-600">ID: ${todo.id}</h2>
        <p>${todo?.title}</p>
        <p>${todo?.completed ? "Done ✅" : "Incomplete ❌"}</p>
        `;
    todoContainer.appendChild(todoCard);
  }
};


const  loadTodos  = async() => {
    try{
        const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
        const data = await res.json();
        displayTodos(data);
    }
    catch(err){
        console.log(err);
    }
    // finally{
    //     console.log('Data Loaded');
    // }
}



loadTodos()


// const user = {
//     name: 'Shafayet',
//     age: 12,
//     team: 'Next Level Team'
// }

// for(const users of Object.entries(user)) {
//     const key = users[0];
//     const val = users[1];
//     console.log(key, val);
// }


//  [undefined, 2, 3, 4] map
// const result = [1,2, 3, 4].map(n => {
//     if(n > 1) {
//         return n
//     }
// })
// console.log(result);
// wait ==>  talk to server ==> file read / write

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((response) => response.json())
//   .then((json) => console.log(json));
let allTodo = [];
const todoContainer = document.getElementById("todo-container");
const totalTodo = document.getElementById("total-todo");
const displayTodos = (mainTodos, optional = []) => {
  const todos = [...mainTodos, ...optional];
  // todoContainer.innerHTML = ``
  totalTodo.textContent = todos?.length ?? 0;
  for (let i = 0; i < todos.length; i++) {
    let todo = todos[i];
    const todoCard = document.createElement("div");
    todoCard.className = `card-style p-4`;
    todoCard.innerHTML = `
        <h2 class="text-red-600">ID: ${todo.id}</h2>
        <p>${todo?.title}</p>
        <p>${todo?.completed ? "Done ✅" : "Incomplete ❌"}</p>
        `;
    todoContainer.prepend(todoCard);
  }
};

const loadTodos = async () => {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
    const data = await res.json();
    allTodo = data;
    displayTodos(allTodo);
  } catch (err) {
    console.log(err);
  }
  // finally{
  //     console.log('Data Loaded');
  // }
};

document.getElementById("submitBtn").addEventListener("click", async () => {
  const todoFieldVal = document.getElementById("todo-field").value.trim();
  if (!todoFieldVal || todoFieldVal.length < 4) return alert();
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      userId: 6,
      title: todoFieldVal,
      completed: true,
    }),
  });

  const data = await res.json();
  allTodo.push(data);
  displayTodos(allTodo);
});

const updateTodo = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/200`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      title: "Kamal Hain",
    }),
  });
  const data = await res.json();
  console.log(data);
};

loadTodos();
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

// // Promise
// async function fetchData() {
//   return new Promise((resolve, reject) => {
//     fetch(`https://jsonplacehold.typicode.com/todos/1`)
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error(`HTTP error! status: ${res.status}`);
//         }
//         return res.json();
//       })
//       .then((data) => {
//         if (data && Object.keys(data).length > 0) {
//           resolve(data);
//         } else {
//           reject(new Error("Data failed"));
//         }
//       })
//       .catch((err) => {
//         // 3. This catches network errors AND the thrown HTTP errors
//         reject(err);
//       });
//   });
// }

// const loadData = async () => {
//   try {
//     const data = await fetchData();
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//     console.error(err.message);
//   }
// };

// loadData();
// // fetchData().then(data => console.log(data)).catch(err => console.log(err))



const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
let count = 1
addTaskBtn.addEventListener('click', () => {
    const inputVal = taskInput.value;
    const li = document.createElement('li');
    li.innerHTML = `
    Task: ${inputVal}
    `
    count++
    taskList.prepend(li)
    taskInput.value = ''
    console.log(li.textContent);
    // localStorage.setItem("tasks", JSON.stringify(taskInput));
})

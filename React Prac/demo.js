// console.log(React);
// console.log(ReactDOM);

// const addEl = document.createElement('p')
// addEl.textContent = `I am added by React`
// document.getElementById('root').appendChild(addEl)
// console.log(addEl);

// For react

// const reactEl = (
//   <div>
//     <p>I am added by React</p>
//   </div>
// );

const myEl = React.createElement("p", null, "I am again added by React");
 ReactDOM.createRoot(document.getElementById("root")).render(myEl);
console.log(myEl);
// ReactDOM.createRoot(document.getElementById('root')).render(reactEl)
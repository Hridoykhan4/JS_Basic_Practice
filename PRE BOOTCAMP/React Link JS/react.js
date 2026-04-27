// const element = React.createElement("div", null, "Hello World");
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element)

const Element = ({ count, setCount }) => {
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)} className="">
        +
      </button>
      <button
        style={{ marginLeft: "10px" }}
        onClick={() => setCount(count - 1)}
      >
        -
      </button>
    </div>
  );
};

const App = () => {
  const [count, setCount] = React.useState(0);
  return (
    <>
      <Element count={count} setCount={setCount}></Element>
      <Element count={count} setCount={setCount}></Element>
      <Element count={count} setCount={setCount}></Element>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App></App>);

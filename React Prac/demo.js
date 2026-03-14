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

// const myEl = React.createElement("p", null, "I am again added by React");
//  ReactDOM.createRoot(document.getElementById("root")).render(myEl);
// console.log(myEl);

// ReactDOM.createRoot(document.getElementById('root')).render(reactEl)

// const reactEl =(
//     <div>
//         <div className= "card-container max-w-md shadow-lg">
//       <div className= "inner-card text-center">
//         <h1 className= "text-3xl font-extrabold text-[#380546]">Next-Level Cart 🚀</h1>

//         <div className= "mt-5">
//           <p className= "text-lg font-bold text-[#380546]">Product: Next level web development Course</p>
//           <p className= "text-2xl font-bold price-text mt-2">৳ 6500</p>
//         </div>

//         <div className= "flex justify-between items-center mt-6">
//           <button
//             id="addToCartButton"
//             className= "gradient-button text-white font-bold py-2 px-6 rounded-lg focus:outline-none focus:shadow-outline transition duration-300"
//           >
//             Add to Cart
//           </button>
//           <div className= "text-left">
//             <p id="itemCount" className= "text-lg font-bold item-text">Items in Cart: 0</p>
//             <p id="totalPrice" className= "text-lg font-bold item-text">Total Price: ৳ 0</p>
//           </div>
//         </div>

//         <div id="successMessage" className= "hidden text-[#01FF8E] font-semibold text-center mt-5">
//           Item added to the cart!
//         </div>
//       </div>
//     </div>
//     </div>
// )

// ReactDOM.createRoot(document.getElementById('root')).render(reactEl)

function ProductCart({extra}) {
  const [count, setCount] = React.useState(0);
  const [totalPrice, setTotalPrice] = React.useState(0);
  const pricePerItem = 6500;
  const [successMessage, setSuccessMessage] = React.useState(false);

  return (
    <div>
      <div className="card-container max-w-md shadow-lg">
        <div className="inner-card text-center">
          <h1 className="text-3xl font-extrabold text-[#380546]">
            Next-Level Cart 🚀
          </h1>
          {extra?.props?.children}
          <div className="mt-5">
            <p className="text-lg font-bold text-[#380546]">
              Product: Next level web development Course
            </p>
            <p className="text-2xl font-bold price-text mt-2">৳ 6500</p>
          </div>
          <div className="flex justify-between items-center mt-6">
            <button
              onClick={() => {
                setCount((prev) => prev + 1);
                setTotalPrice((prev) => prev + pricePerItem);
                setSuccessMessage(true);
              }}
              className="gradient-button text-white font-bold py-2 px-6 rounded-lg focus:outline-none focus:shadow-outline transition duration-300"
            >
              Add to Cart
            </button>
            <div className="text-left">
              <p id="itemCount" className="text-lg font-bold item-text">
                Items in Cart: {count}
              </p>
              <p id="totalPrice" className="text-lg font-bold item-text">
                Total Price: ৳ {totalPrice}
              </p>
            </div>
          </div>
          {successMessage && (
            <div className="text-[#01FF8E] font-semibold text-center mt-5">
              {count} item added to the cart!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="flex justify-center items-center gap-10">
    <ProductCart extra={<p>Hi,I am children</p>}></ProductCart>
    <ProductCart></ProductCart>
    <ProductCart></ProductCart>
  </div>,
);

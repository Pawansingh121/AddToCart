import React, { useEffect, useState } from "react";
import { IoIosClose } from "react-icons/io";
import { Link } from "react-router-dom";

const CardDetails = ({ inputValue, setInputValue, cartItem, setCartItem }) => {
  const [price, setPrice] = useState(0);
  const [lastPage, setLastPage] = useState(true);
  const handlePrice = () => {
    let ans = 0;
    cartItem.map((element) => {
      ans += element.price * element.quantity;
    });
    setPrice(ans);
  };
  useEffect(() => {
    handlePrice();
  });

  const thankyouPageHandler = () => {
    setLastPage(false);
  };
  return (
    <div>
      <div className="flex  gap-36 justify-around items-center  w-[60vw] h-14">
        <div className="">
          <p>Product</p>
        </div>
        <div className="flex  gap-28">
          <p>Price</p>
          <p>Quantity</p>
          <p>Subtotal</p>
        </div>
      </div>
      <hr className="w-[60vw]" />

      <>
        {inputValue === "" || cartItem.length === 0 ? (
          <div className="border h-[500px] flex justify-center items-center">
            <h1 className="text-3xl text-red-600 animate-pulse">
              Cart is empty
            </h1>
          </div>
        ) : (
          <>
            {cartItem.map((items, index) => {
              return (
                <div key={index}>
                  <div className="mt-6 ml-[-10px] flex  justify-evenly w-[60vw] text-gray-700">
                    <div className="flex gap-4">
                      <IoIosClose className="w-[24px] h-[24px]" />
                      <img className="w-[80px]" src={items.image} alt="" />
                      <p>{items.name}</p>
                    </div>
                    <div className="flex gap-24">
                      <p>{items.price}</p>
                      <div className="flex justify-evenly items-center border w-[100px] h-8">
                        <button
                          onClick={() => {
                            const dec = cartItem.map((elm, i) => {
                              return index === i
                                ? { ...elm, quantity: Number(elm.quantity) - 1 }
                                : elm;
                            });
                            setCartItem(dec);
                          }}
                        >
                          -
                        </button>
                        <p>{items.quantity} </p>
                        <button
                          onClick={() => {
                            const inc = cartItem.map((elm, i) => {
                              return index === i
                                ? { ...elm, quantity: Number(elm.quantity) + 1 }
                                : elm;
                            });
                            setCartItem(inc);
                          }}
                        >
                          +
                        </button>
                      </div>
                      <p className="text-blue-700">
                        $ {items.price * items.quantity}
                      </p>
                    </div>
                  </div>
                  <div className="w-[25vw] border shadow-lg flex flex-col p-6 gap-4 absolute  top-2 right-36   ">
                    <h1 className="text-xl">Cart totals</h1>
                    <div className="flex justify-between text-[14px] font-semibold ">
                      <p>Subtotal</p>
                      <p className="text-blue-700">${price}</p>
                    </div>
                    <div className="flex justify-between text-[18px] font-bold text-gray-800">
                      <p>Total</p>
                      <p className="text-blue-700">${price} </p>
                    </div>
                    <Link to="/thankyou">
                      <button
                        onClick={thankyouPageHandler}
                        className="border bg-blue-700 text-white p-1 rounded-lg"
                      >
                        PROCEED TO CHECKOUT
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </>
    </div>
  );
};

export default CardDetails;

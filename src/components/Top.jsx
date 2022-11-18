import React, { useState } from "react";
import { BsArrowCounterclockwise } from "react-icons/bs";
import { Link } from "react-router-dom";
import CardsData from "../CardsData";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsEmojiSmile } from "react-icons/bs";

const Top = ({ inputValue, setInputValue, cartItem, setCartItem }) => {
  const [data, setData] = useState(CardsData);
  const [cart, setCart] = useState(true);
  const [warning, setWarning] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCat, setFilterCat] = useState("Product");

  const cartHandler = () => {
    setCart(false);
  };

  const resetFilter = () => {
    setFilterCat(data);
    window.location.reload(false);
  };

  let filterCatList = data.filter((cat) => {
    if (filterCat === "hoodies") {
      return cat.catagory === "Hoodies";
    } else if (filterCat === "jeans") {
      return cat.catagory === "Jeans";
    } else if (filterCat === "tshirt") {
      return cat.catagory === "T-shirt";
    } else if (filterCat === "xl") {
      return cat.size === "XL";
    } else if (filterCat === "lg") {
      return cat.size === "LG";
    } else if (filterCat === "md") {
      return cat.size === "MD";
    } else if (filterCat === "sm") {
      return cat.size === "SM";
    } else {
      return cat;
    }
  });

  const onFilterValueSelected = (filterValue) => {
    setFilterCat(filterValue);
  };

  const onFilterValueChanged = (e) => {
    onFilterValueSelected(e.target.value);
  };

  const inputHandler = (e) => {
    setInputValue(e.target.value);
  };
  const checkboxHandler = (elm) => {
    let isPresent = false;
    cartItem.forEach((product) => {
      if (elm.id === product.id) isPresent = true;
    });
    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 3000);
      return;
    }

    setCartItem([...cartItem, { ...elm, quantity: inputValue }]);
  };

  return (
    <div>
      {warning && (
        <div className="text-center text-4xl text-red-600 animate-pulse">
          Product is already added to your cart.
        </div>
      )}

      <div className="w-auto h-auto  p-4 bg-white ">
        <div className="flex justify-between items-center px-6">
          <div className="flex gap-4">
            <div className="">
              <select
                onChange={onFilterValueChanged}
                name=""
                id=""
                className="px-4 border border-gray-300 rounded-md  "
              >
                <option value="product">Product</option>

                <option value="hoodies">Hoodies</option>

                <option value="jeans">Jeans</option>

                <option value="tshirt">T-shirt</option>
              </select>
            </div>
            <div>
              <select
                onChange={onFilterValueChanged}
                className="px-4 border border-gray-300 rounded-md"
                name=""
                id=""
              >
                <option value="size">Size</option>

                <option value="xl">XL</option>
                <option value="lg">LG</option>
                <option value="md">MD</option>
                <option value="sm">SM</option>
              </select>
            </div>
            <div className=" font-semibold text-blue-700">
              <button onClick={resetFilter} className="flex gap-1">
                <BsArrowCounterclockwise className="mt-[5px]" />
                Reset
              </button>
            </div>
          </div>

          <div className="flex items-center  gap-2">
            <label htmlFor="">Search:</label>
            <input
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
              type="text"
              className="h-[25px] outline-none bg-gray-100 border border-gray-300 rounded-sm"
            />
            <div className="">
              <Link to="/cart">
                <button
                  onClick={cartHandler}
                  className="bg-blue-700 h-[30px] w-[100px] text-white rounded-md "
                >
                  Add To Cart
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center px-10 bg-gray-100 p-4 font-semibold">
        <div className="flex gap-20">
          <p>Image</p>
          <p>Name</p>
        </div>
        <div className="flex gap-24">
          <p>Color</p>
          <p>Stock</p>
          <p>Price</p>
        </div>
        <div>
          <p>Buy</p>
        </div>
      </div>
      {filterCatList
        .filter((elm) => {
          if (searchTerm == "") {
            return elm;
          } else if (
            elm.name.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return elm;
          }
        })
        .map((elm, id) => {
          return (
            <div key={id} className="flex justify-between m-6 ">
              <div className="flex gap-8">
                <img className="w-[80px]" src={elm.image} alt="" />
                <p className="w-[100px] text-blue-700 font-semibold">
                  {elm.name}
                </p>
              </div>
              <div className=" flex gap-20 ml-14 text-gray-700">
                <p className="text-blue-700">{elm.color}</p>
                <p className="text-green-700 flex gap-2">
                  <BsEmojiSmile className="mt-1" />

                  {elm.stock}
                </p>
                <p>${elm.price}</p>
              </div>
              <div
                className="flex gap-1
            "
              >
                <input
                  className="border border-gray-400 rounded-md outline-none w-[80px] h-6  "
                  type="text"
                  value={elm.inputValue}
                  onChange={inputHandler}
                />
                <AiOutlineShoppingCart className="bg-gray-700 text-white w-[50px] h-[20px]" />
                <input
                  className="absolute ml-[140px] mt-1 "
                  type="checkbox"
                  name=""
                  id=""
                  onChange={() => {
                    checkboxHandler(elm);
                  }}
                />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Top;

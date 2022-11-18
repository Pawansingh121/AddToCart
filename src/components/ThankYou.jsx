import React from "react";
import { BsEmojiSmile } from "react-icons/bs";
const ThankYou = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <BsEmojiSmile className="w-[100px] h-[100px] bg-yellow-400 rounded-full animate-bounce" />
      <h1 className="text-4xl mt-10 text-green-700">
        Thank You for shopping with us.
      </h1>
    </div>
  );
};

export default ThankYou;

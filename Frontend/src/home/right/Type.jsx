import React from 'react'
import { IoMdSend } from "react-icons/io";

function Type() {
  return (
    <>
      <div className="flex space-x-2 h-[10vh] text-center bg-gray-800">
        <div className="w-[70%] mx-4">
          <input
            type="text"
            placeholder="Type here"
            className="border-[1px] border-gray-700 rounded-xl  flex items-center mt-2 w-full py-3 px-3 grow outline-none bg-slate-900 "
          />
        </div>
        <button className=" text-3xl mb-4">
          <IoMdSend />
        </button>
      </div>
    </>
  );
}

export default Type

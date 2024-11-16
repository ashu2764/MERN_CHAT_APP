import React from 'react'
import { IoSearchCircleOutline } from "react-icons/io5";
import { BiLogOut } from "react-icons/bi";

function Logout() {
  return (
    <div className="w-[4%]  border-white bg-slate-900 text-white flex flex-col justify-end">
      <div className="  py-3  align-bottom">
        <button>
          <BiLogOut className="text-4xl p-1 hover:bg-gray-600 rounded-lg" />
          
        </button>
      </div>
    </div>
  );
}

export default Logout

import React from 'react'
import Search from './Search'
import User from './Users'
import Users from './Users';

function Left() {
  return (
    <>
      <div className="w-[30%]  border-white bg-black text-white">
        <h1 className="font-bold text-3xl p-2 px-11"> Chats</h1>
        <Search></Search>
        <hr />
        <Users></Users>
      </div>
    </>
  );
}

export default Left

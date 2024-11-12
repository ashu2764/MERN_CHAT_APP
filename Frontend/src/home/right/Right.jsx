import React from 'react'
import ChatUser from './ChatUser';
import Messages from './Messages';
import Type from './Type';

function Right() {
  return (
    <>
      <div className="w-[70%]  border-white bg-slate-900 text-white">
        <ChatUser></ChatUser>
        <div
          className="py-2 srcoll-manage overflow-auto"
          style={{ maxHeight: "calc(88vh - 8vh)" }}
        >
          <Messages></Messages>
        </div>
        <Type></Type>
      </div>
    </>
  );
}

export default Right

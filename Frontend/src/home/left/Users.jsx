import React from 'react'
import User from './User';

function Users() {
  return (
    <div
      style={{ maxHeight: "calc(84vh - 1vh)" }}
      className="py-2 srcoll-manage overflow-auto"
    >
      <User></User>
      <User></User>
      <User></User>
      <User></User>
      <User></User>
      <User></User>
      <User></User>
    </div>
  );
}

export default Users

import { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=> setUsers(data))
  }, []);
  return <div>
    <h3>Users: {users.length}</h3>
  </div>;
}

// 1. declear a stat to hold the data
// useEffect with call back dependancy array
// use fetch to load data

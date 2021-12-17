import React, { useEffect, useState } from 'react'

const UserData = () => {
  const [username, setUserName] = useState("arun");

  // useEffect is like componentDidMount and componentDidUpdate to a class comp
  useEffect(() => {
    // ideal place for your ajax calls
    // will be called once automatically
    console.log("Into useEffect");
    document.title = username;
  }, [username]); // second arg is dependency, remove the dep and keep empty array
  //if the dep is updated by any means, useEffect() would be called

  const handleChangeTitle = (event) => {
    setUserName(event.target.value);
  }

  return (
    <div>
      <h2>UserData | useEffect() Demo</h2>
      <p>Username: {username}</p>

      <input type="text" value={username} onChange={handleChangeTitle} />
    </div>
  )
}

export default UserData

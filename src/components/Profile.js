import React, { useState } from 'react';

const Profile = () => {

  // useState() will let you have state in fn comp 
  let [ personName, setPersonName ] = useState("John") // useState() will give you array with two elements in return

  return (
    <div>
      <h2>Profile | useState() Demo</h2>
      <p>Person Name: {personName}</p>
      <button type="button" className='btn btn-primary' onClick={ () => setPersonName("Steve")}>Change the Name to Steve</button>
      <hr />
    </div>
  )
}

export default Profile;

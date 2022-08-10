import React from 'react'

const Home = () => {
  
  return (
   
    <div>
      <h1>Welcome to Mr {localStorage.getItem("uname")} </h1>
    </div>
  )
}

export default Home
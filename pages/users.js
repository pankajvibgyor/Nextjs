import React from 'react'
import  Users from '../components/users'
const users = ({users}) => {
  return (
    <div><h1>List of user</h1>
    {
      users.map((user)=>{
        return(
          <div key={user.id}>
           <Users user={user}/>

          </div>
        )
      })
    }
    
    
    
    </div>
  )
}

export default users

export async function getStaticProps(){
  const response=await fetch('https://jsonplaceholder.typicode.com/users')
  const data=await response.json()
  
  return {
    props:{
      users:data,

    }
  }

}
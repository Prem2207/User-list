import React from 'react'
import UserCard from './UserCard'

const UsersList = ({users, deleteUser, handleClickEdit}) => {
  return (
    <section className='grid gap-20 auto-rows-auto 
    grid-cols-[repeat(auto-fill,_250px)] justify-center mb-10'>
        {
            users.map((user) => <UserCard key={user.id} user={user} 
            deleteUser={deleteUser} handleClickEdit={handleClickEdit}/> )
        }
   </section>
  )
}

export default UsersList
import React from 'react'

const UserCard = ({ user, deleteUser, handleClickEdit }) => {
    return (
        <article className=' border-gray-200 w-[300px]  border p-3 rounded-md'>
            <div>

        

                <img className='w-[150px] h-[175px] object-cover mx-auto rounded-md m-2'
                    src={user.image_url ? user.image_url : "/image/no-profile.jpg"} alt="No image" />
            </div>
           <hr />
            <h3 className='text-[25px] font-bold text-center'>{user.first_name} {user.last_name}</h3>
            <ul>
                <li className='text-[15px] py-3'>
                    <h4 className='text-gray-300 font-regular'>CORREO</h4>
                    <span>{user.email}</span>
                </li>

                <li>
                    <h4 className='text-gray-300 font-regular'>CUMPLEAÑOS</h4>
                    <span>
                        <i className='bx bx-gift text-2xl'></i>
                        {user.birthday}
                    </span>
                </li>
            </ul>
            <hr />
            <div className='flex justify-end gap-1 my-[10px]'>
                <button className='border-[1px] rounded-md border-black-500 bg-red-p' onClick={ () => deleteUser(user.id)}>
                    <i  className='bx bxs-trash text-white text-3xl p-1'></i>
                </button>
                <button className='border-[1px] rounded-md border-black-500 bg-gray-100' onClick={() => handleClickEdit(user)}>
                    <i className='bx bx-pencil text-gray-300 text-3xl p-1  '></i>
                </button>

            </div>
        </article>
    )
}

export default UserCard
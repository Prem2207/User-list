import React from 'react'

const Header = ({ setIsShowForm }) => {

    const handleClickShowModal = () => { //funcion que se va a ejecutar cuando de click en el boton
        setIsShowForm ((isShowForm ) => !isShowForm )
    }
    return (
        <header className=' flex justify-evenly py-4 px-4  my-12 '>

            <h1 className='text-5xl font-bold '>Usuarios</h1>

            <button onClick={handleClickShowModal} className='bg-purple-p text-white p-2 m-2
         hover:bg-purple-p/80 transition-colors text-1xl'>
                <i className='bx bx-plus ps-4'></i>Crear nuevo usuario</button>

        </header>
    )
}

export default Header
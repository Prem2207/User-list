
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Modal from './components/Modal'
import Header from './components/Header'
import { useForm } from 'react-hook-form';
import UsersList from './components/UsersList'
const BASE_URL = "https://users-crud.academlo.tech/"

function App() {
  const { register, handleSubmit, reset, formState: {errors}  } = useForm();

  const [isShowForm, setIsShowForm] = useState(false)//estado para abrir y cerrar el modal

  const [users, setUsers] = useState([])

  const [isUserIdToEdit, setIsUserIdToEdit] = useState()

  const DEFAULT_VALUES = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    birthday: "",
    image_url: "",
  }
  const submit = (data) => {
    
    if(!data.birthday){
      data.birthday = null
    }

    if(!data.image_url){
      data.image_url = null
    }

    
    if (isUserIdToEdit) {
      editUser(data)
    } else {
      createUsers(data)
    }


  }

  const createUsers = (data) => {
    const URL = BASE_URL + "/users/"
    axios.post(URL, data)
      .then(() => {
        getAllUsers()
        reset(DEFAULT_VALUES)
        setIsShowForm(!isShowForm)
        
      })
      .catch((err) => console.log(err))
  }

  const editUser = (data) => {
    const URL = BASE_URL + `/users/${isUserIdToEdit}/`
    axios.patch(URL, data)
      .then(() => {
        getAllUsers()
        reset(DEFAULT_VALUES)
        setIsShowForm(!isShowForm)
        setIsUserIdToEdit()
      })
      .catch((err) => console.log(err))
  }

  const getAllUsers = () => {
    const URL = BASE_URL + "/users/"
    axios.get(URL)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err))
  }

  const deleteUser = (id) => {
    const URL = BASE_URL + `/users/${id}`
    axios.delete(URL)
      .then(() => getAllUsers())
      .catch((err) => console.log(err))
  }

  const handleClickEdit = (data) => {
    setIsShowForm((isShowForm) => !isShowForm) //abrir modal
    reset(data)
    setIsUserIdToEdit(data.id)
  }
  useEffect(() => {
    getAllUsers()
  }, [])


  return (

    <main className='font-sans'>

      <Header setIsShowForm={setIsShowForm} />


      <UsersList users={users} deleteUser={deleteUser} handleClickEdit={handleClickEdit} />

      <Modal
        register={register}
        handleSubmit={handleSubmit}
        reset={reset}
        submit={submit}
        isShowForm={isShowForm}
        setIsShowForm={setIsShowForm}
        setIsUserIdToEdit={setIsUserIdToEdit}
        isUserIdToEdit={isUserIdToEdit} 
        errors={errors}
        />
        

    </main>

  )
}

export default App

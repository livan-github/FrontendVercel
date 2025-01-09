import { useEffect, useState } from 'react'
import { URL } from '../config'
import Tabla from './components/Tabla'
import Form from './components/Form'

function App() {
  const [loading, setLoading] = useState(false)
  const [loadingDelete, setLoadingDelete] = useState(false)
  const [users, setUsers] = useState(null)

  useEffect(() => {
    setLoading(true)
    fetch(`${URL}/api/users`).then((res)=>{
      return res.json()
    }).then((res)=>{
      setUsers(res)
    }).catch((err)=>{
      console.log(err)
    }).finally(()=>{
      setLoading(false)
    })
  }, [])

  const addUsers = (userName, email) => {
    setLoading(true)
    //hacer la peticion
    fetch(`${URL}/api/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: userName, email })
    }).then((res) => {
      //pasar la respuesta a json
      return res.json()
    }).then((res) => {
      //ver la respuesta del servidor 
      setUsers((prev)=>{
        return [res.user, ...prev]
      })
    }).catch((err) => {
      //tomar los errores
      console.log(err)
    }).finally(()=>{
      setLoading(false)
    })
  }
   const deleteUser = (id)=>{
    setLoadingDelete(true)
      fetch(`${URL}/api/users/${id}`, {
        method: "DELETE"
      }).then((res)=>{
       setUsers((prev)=>{
        return prev.filter((user)=>user._id !== id)
       })
      }).catch((err)=>{
        console.log(err)
      }).finally(()=>{
        setLoadingDelete(false)
      })
   }
  return (
    <div className='grid grid-cols-2 w-full p-10 h-screen'>
      <Form addUsers={addUsers} loading={loading}/>
      <Tabla loading={loading} users={users} deleteUser={deleteUser} loadingDelete={loadingDelete}/>
    </div>
  )
}

export default App

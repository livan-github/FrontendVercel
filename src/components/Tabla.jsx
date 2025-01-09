

function Tabla({ users, loading, deleteUser, loadingDelete }) {
  return (
    <div className=' flex flex-col gap-3'>
      {
        loadingDelete && (
          <span>Eliminando ...</span>
        )
      }
      {
        users && users.map((user) => {
          return (
            <div key={user._id} className='bg-neutral-400 rounded-md px-2 py-1 flex justify-between items-center gap-2'>
              <div>
                <h1 className='text-black font-bold text-xl'>{user.name}</h1>
                <strong className='text-black'>{user.email}</strong>
              </div>
              <button onClick={() => deleteUser(user._id)} className="bg-red-400 rounded-md w-20 h-10" disabled={loadingDelete}>
               
                    Delete
               
              </button>
            </div>
          )
        })
      }
      {
        loading && (
          <h1>Loading</h1>
        )
      }
      {
        !loading && users && users.length === 0 && (
          <h1 className="font-bold text-3xl">No hay usuarios q mostar</h1>
        )
      }
    </div>
  )
}

export default Tabla

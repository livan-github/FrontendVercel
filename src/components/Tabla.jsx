

function Tabla({users, loading}) {
  return (
    <div className=' flex flex-col gap-3'>
      {
        users && users.map((user)=>{
          return (
            <div key={user._id} className='bg-neutral-400 rounded-md px-2 py-1 '>
              <h1 className='text-black font-bold text-xl'>{user.name}</h1>
              <strong className='text-black'>{user.email}</strong>
            </div>
          )
        })
      }
      {
        loading && (
          <h1>Loading</h1>
        )
      }
    </div>
  )
}

export default Tabla

import React from 'react'

function Form({addUsers, loading}) {

    const handleSubmit = (event) => {
        event.preventDefault();
        //tomar los datos del formulario
        const data = Object.fromEntries(new window.FormData(event.target))
        const userName = data.userName
        const email = data["email"]
        
        //pasar el estado de carga a true

        addUsers(userName, email)

    }
    return (
        <div className='m-10 p-5 bg-gray-200 rounded-md max-w-96 flex flex-col gap-5 h-2/5 justify-center'>
            <h1>User register</h1>
            <form onSubmit={handleSubmit} className='flex flex-col gap-5' >
                <input name='userName' className='rounded-md px-3 py-2' type="text" placeholder='Insert user name' />
                <input name='email' className='rounded-md px-3 py-2' type="email" placeholder='Insert your email' />
                <button type='submit' className='bg-sky-600 rounded-md text-white mt-8 py-3'>
                  {
                    //renderisado condicional para los estados de carga
                    loading && (
                      <span>Loading... </span>
                    )
                  }
                  {
                    !loading && (
                      <span>Send</span>
                    )
                  }

                </button>
            </form>
        </div>
    )
}

export default Form

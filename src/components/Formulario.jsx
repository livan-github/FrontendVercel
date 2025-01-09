import React from 'react'
import { URL } from '../../config';

function Formulario() {

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = Object.fromEntries(new window.FormData(event.target))
        const userName = data.userName
        const email = data["email"]

        fetch(`${URL}/api/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: userName, email })
        }).then((res) => {
            console.log(res.data)
        })
    }
    return (
        <div className='m-10 p-5 bg-gray-200 rounded-md max-w-96 flex flex-col gap-2'>
            <h1>User register</h1>
            <form onSubmit={handleSubmit} className='flex flex-col gap-2' >
                <input name='userName' className='rounded-md px-2' type="text" placeholder='Insert user name' />
                <input name='email' className='rounded-md px-2' type="email" placeholder='Insert your email' />
                <button type='submit' className='bg-sky-600 rounded-md text-white'>Send</button>
            </form>
        </div>
    )
}

export default Formulario

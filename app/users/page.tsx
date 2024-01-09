import { revalidatePath } from 'next/cache';
import React, { ReactComponentElement } from 'react'

interface User {
  id : number;
  name: string;
  email: string;

}

const usersPage : React.FC = async () => {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/users',
    {next: {revalidate: 10} })
  const users: User[] = await res.json()
  return (
    <div>
      <h1 className=''>Users</h1>
      <table className='border-gray-500 border-2 text-white bg-zinc-700'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
      {users.map((user)=> <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.email}</td>
      </tr>
      )}
        </tbody>
      </table>

    </div>
  )
}

export default usersPage
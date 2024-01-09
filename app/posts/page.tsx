import { revalidatePath } from 'next/cache';
import React from 'react'

interface Post {
  id : number;
  title: string;
  body: string;

}

const postPages = async () => {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/posts',
    {next: {revalidate: 10} })
  const posts: Post[] = await res.json()
  return (
    <div>
      <h1 className=''>Users</h1>
      <table className='border-gray-500 border-2'>
        <thead>
          <tr>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
      {posts.map((post)=> <tr key={post.id}>
        <td>{post.title}</td>
        <td>{post.body}</td>
      </tr>
      )}

        </tbody>
      </table>

    </div>
  )
}

export default postPages
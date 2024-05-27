
import React from 'react'
import Link from 'next/link';
interface Posts{
  userId: number;
  title: string;
  body: string;
}

const posts = async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts : Posts[] = await data.json();
  return (
    <>
    <Link href={'/'}>Home</Link>
    <ul>
      <Link href="/content">
      {posts.map(posts => <li key={posts.userId}>{posts.title}</li>)}
      </Link>
    </ul>
    </>
  )
}

export default posts
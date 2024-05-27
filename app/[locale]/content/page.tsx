import Link from 'next/link';
import React from 'react'
import { Skeleton } from '~/components/ui/skeleton';
interface Posts{
  userId: number;
  body: string;
}

const content = async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts', {'cache': 'no-store'});
  const posts : Posts[] = await data.json();
  return (
    <>
    <Link href={'/'}>Home</Link>
    <ul>
      {posts.map(posts => <li key={posts.userId}>{posts.body}</li>)}
    </ul>
    <Skeleton />
    </>
  )
}

export default content
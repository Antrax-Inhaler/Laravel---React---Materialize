import { Link } from '@inertiajs/react'

export default function Layout({ children }) {
  return (
    <>
 <header>
      <nav className='flex justify-around p-2 w-full bg-amber-700 rounded-b-sm'>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/posts/create">Create</Link>
      </nav>
    </header>
              <main>{children}</main>
    </>

  )
}
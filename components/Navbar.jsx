import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
      <div>
          <nav className='flex items-center justify-between p-4 px-8 m-4 border shadow-lg rounded-xl shadow-red-300 bg-slate-400'>
              <Link className='font-bold text-white' href={'/'}>USER CRUD</Link>
              <Link className='p-2 font-bold rounded-lg bg-slate-200' href={'/addTopic'}>ADD TOPIC</Link>
          </nav>
    </div>
  )
}

export default Navbar
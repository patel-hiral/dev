import React from 'react'

export default function Navbar() {
  return (
    <div className='py-4 px-10 bg-slate-700 flex items-center justify-between text-white'>
      <h1 className='text-2xl font-bold'>Hello World</h1>
      <nav>
        <ul className='flex items-center text-base gap-4'>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </div>
  )
}

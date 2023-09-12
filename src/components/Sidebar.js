import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='p-2 drop-shadow w-40 text-black border flex justify-center pt-16'>
        <ul className='flex flex-col gap-5'>
            <li>
                <Link to="/">
                    Home
                </Link>
            </li>
            <li>
                <Link to="/about">
                    About
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar
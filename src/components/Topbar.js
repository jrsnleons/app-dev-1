import React from 'react'
import { Link } from 'react-router-dom'

const Topbar = () => {
  return (
    <div className='p-2 drop-shadow w-screen text-black border'>
        <ul className='flex justify-center gap-5'>
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

export default Topbar
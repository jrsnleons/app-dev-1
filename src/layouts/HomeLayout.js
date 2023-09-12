import React from 'react'
import Topbar from '../components/Topbar'

export const HomeLayout = ({children}) => {
  return (
    <div className='flex h-screen flex-col w-screen'>
        <Topbar/>
        <div className='w-screen flex grow items-center justify-center'>
            {children}
        </div>

    </div>
  )
}

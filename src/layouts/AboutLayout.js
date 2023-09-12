import React from 'react'
import Sidebar from '../components/Sidebar'

export const AboutLayout = ({children}) => {
  return (
    <div className='flex flex-row w-screen flex-none'>
        <Sidebar/>
        <div className='h-screen w-screen flex items-center justify-center grow'>
            {children}
        </div>
    </div>
  )
}

import React from 'react'
import { Outlet} from 'react-router-dom'

function LoginRegisterPage() {
      
  return (
    <div className='h-max mb-10 flex items-center justify-center'>
        <div>
            <Outlet />
        </div>
    </div>
  )
}

export default LoginRegisterPage
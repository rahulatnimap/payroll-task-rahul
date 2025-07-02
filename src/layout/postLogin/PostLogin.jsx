import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

const PostLogin = () => {
  return (
    <div>
        <Suspense>
            <Outlet/>
        </Suspense>
    </div>
  )
}

export default PostLogin
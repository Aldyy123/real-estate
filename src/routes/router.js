import React from 'react'
import Home from '../Pages/Home'
import Results from '../Pages/Results'
import Detail from '../Pages/Detail'
import Chat from '../Pages/Chat'

const useRouter = () => {
  const router = [
    {
      element: <Home />,
      path: '/'
    },
    {
      element: <Results />,
      path: '/result'
    },
    {
      element: <Detail />,
      path: '/detail/:id'
    },
    {
      element: <Chat />,
      path: '/chat/:id'
    }
  ]

  return router
}

export default useRouter

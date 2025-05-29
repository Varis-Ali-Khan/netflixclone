import React from 'react'
import Login from './Login'
import Browse from './Browse'
import {RouterProvider,createBrowserRouter} from "react-router-dom"
import elements from '../utils/json'


const Body = () => {

 


 const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Login/>
    },
    {
        path: "/browse",
        element: <Browse explorer={elements}/>
    }
 ])




  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body

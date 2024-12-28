import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Cheese from './Components/Cheese/Cheese'
import Contact from './Components/Contact/Contact'
import Fruit from './Components/Fruit/Fruit'
import Seasonal from './Components/Seasonal/Seasonal'
import Pies from './Components/Pies/Pies'

const router=createBrowserRouter([{
  path:'',
  element:<Layout/>,
  children:[{
    path:'/',
    element:<Home />
  },
  {
    path:'/About',
    element:<About/>
  },{
    path:'/Cheese',
    element:<Cheese/>
  },
{
  path:'/Contact',
  element:<Contact/>
},{
  path:'/Fruit',
  element:<Fruit/>
},{
  path:'/Seasonal',
  element:<Seasonal/>
},{
  path:'/Pies',
  element:<Pies/>
}]
}])
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)

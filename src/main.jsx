import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout.jsx'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Academics from './Pages/Academics.jsx'
import Admissions from './Pages/Admissions.jsx'
import Athletics from './Pages/Athletics.jsx'
import Contact from './Pages/Contact.jsx'
import StudentLife from './Pages/StudentLife.jsx'
import Extracurricular from './Pages/Extracurricular.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path:"/Erudite_School/",
    element: <Layout/>,
    children:[
      {
        path: "",
        element: <Home/>
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"academics",
        element:<Academics/>
      },
      {
        path:"admissions",
        element:<Admissions/>
      },
      {
        path:"athletics",
        element:<Athletics/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
      {
        path:"studentLife",
        element:<StudentLife/>
      },
      {
        path:"extracurricular",
        element:<Extracurricular/>
      }
    ]
  }
],
  
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider
      router={router}
    />
  </StrictMode>,
)

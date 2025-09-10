import { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './layout.jsx'

import Home from './components/home/home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/contact/contact.jsx'
import User from './components/User/user.jsx'
import Projects from './components/Projects/projects.jsx'
import Cirtificate from './components/cirtificate/cirtificate.jsx'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userId" element={<User />} />
      <Route path="projects" element={<Projects />} />
      <Route path="cirtificate" element={<Cirtificate />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

// import './App.css'
// import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom'
import { Link, Route, Routes } from 'react-router-dom'
import './assets/css/templatemo-topic-listing.css'

import Home from './components/pages/home/Home'
import Contact from './components/pages/contact/Contact'
import TopicListing from './components/pages/topicListing/TopicListing'
// import NavBar from './components/Nav'




function App() {
  /*const router = createBrowserRouter([
    {
      path:'/',
      element: <><NavBar/><Home /></>
    },
    {
      path:'/TopicListing',
      element: <><NavBar/><TopicListing /></>
    },
    {
      path:'/Contact',
      element: <><NavBar/><Contact /></>
    },
  ])*/
  return (
  
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/topicListing' element={<TopicListing />} />
      {/* <Home /> */}
      {/* <Contact /> */}
      {/* <TopicListing /> */}
      {/* <Link to="/"><li>Home</li></Link>
      <Link to="/topicListing"><li>TopicListing</li></Link>
      <Link to="/contact"><li>Contact</li></Link> */}
      {/* <RouterProvider router={router} /> */}
    </Routes>
    
  )
}

export default App

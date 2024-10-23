import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-11/12 mx-auto'>
      <Header></Header>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 my-4'>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </div>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'

function App() {
  const [count, setCount] = useState(0)

  const [bookmarks, setBookmarks ] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddBookmark = blog => {
    // console.log("Book mark btn called")
    // console.log(blog);

    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const handleMarkAsRead = time => {
    console.log("Read btn clicked");
    console.log(time);

    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);

  }

  return (
    <div className='w-11/12 mx-auto'>
      <Header></Header>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 my-4'>
        <Blogs handleAddBookmark={handleAddBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime= {readingTime}></Bookmarks>
      </div>
    </div>
  )
}

export default App

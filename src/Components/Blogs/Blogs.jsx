import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Blog from '../Blog/Blog';

const Blogs = ({handleAddBookmark, handleMarkAsRead}) => {
    const [blogs, setBlogs] = useState([])
    
    useEffect(() => {
      fetch ('blog.json')
      .then(res => res.json())
      .then(data => setBlogs(data))
    }, [])

    console.log(blogs)
    return (
            <div className='md:col-span-2'>
               
                {
                  blogs.map(blog => <Blog
                     key={blog.id}
                      blog={blog}
                      handleAddBookmark={handleAddBookmark}
                      handleMarkAsRead = {handleMarkAsRead}
                     ></Blog>)  
                }
            </div>
    );
};

Blogs.propTypes = {
    handleAddBookmark : PropTypes.func.isRequired,
    handleMarkAsRead : PropTypes.func.isRequired

}

export default Blogs;
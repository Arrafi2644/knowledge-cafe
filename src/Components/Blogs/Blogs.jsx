import React, { useEffect, useState } from 'react';

const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    
    useEffect(() => {
      fetch ('blog.json')
      .then(res => res.json())
      .then(data => setBlogs(data))
    }, [])

    console.log(blogs)
    return (
        <div>
            <h2>Blogs</h2>
        </div>
    );
};

export default Blogs;
import PropTypes from 'prop-types';
import { FaRegBookmark } from "react-icons/fa6";


const Blog = ({blog, handleAddBookmark, handleMarkAsRead}) => {
    // console.log(blog);
    const {cover_img, author_img, author_name, title, reading_time, hashTags, posted_date} = blog;

    return (
        <div className='flex flex-col gap-6 mb-16'>
            <img className='w-full rounded-lg' src={cover_img} alt="" />
            <div className='flex items-center justify-between'>
                <div className='flex gap-6 items-center'>
                  <img className='w-14' src={author_img} alt="" />
                  <div>
                    <h3 className='font-bold text-xl'>{author_name}</h3>
                    <p className='font-medium text-gray-500'>{posted_date}</p>
                  </div>
                </div>
                <div className='flex gap-2 items-center'>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddBookmark(blog)}><FaRegBookmark></FaRegBookmark></button>
                </div>
            </div>
            <h2 className='text-4xl font-bold'>{title}</h2>
            <p className='flex gap-6'>
                {
                    hashTags.map(tag => <span key={tag}><a href="">  {tag}</a></span>)
                }
            </p>
            <div>
                <button onClick={()=> handleMarkAsRead(reading_time)} key={reading_time} className='text-blue-800 font-semibold'><span>Mark as read</span></button>
            </div>
        </div>
    );
};


Blog.propTypes ={
    blog: PropTypes.object.isRequired,
    handleAddBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
}

export default Blog;
import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
import ReadingTime from '../Readingtime/Readingtime';

const Bookmarks = ({bookmarks, readingTime}) => {
    // console.log(bookmarks)
    return (
        <div className='col-span-1 '>
            <ReadingTime readingTime={readingTime}></ReadingTime>
           
           <div className='p-6 bg-gray-200 rounded-lg'>
           <h2 className='font-bold text-2xl '>Bookmarked blogs: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
           </div>
        </div>

    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired
    
}

export default Bookmarks;
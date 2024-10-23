import PropTypes from 'prop-types';
import ReadingTime from '../Readingtime/Readingtime';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        
        <div className='my-4'>
            <h2 className='bg-white p-4 rounded-lg font-bold text-lg'>{title}</h2>
        </div>


    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired,
    readingTime: PropTypes.number.isRequired
}

export default Bookmark;
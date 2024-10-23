import PropTypes from 'prop-types';

const ReadingTime = ({readingTime}) => {
    return (
        <div className='p-4 bg-gray-200 rounded-lg mb-6'>
            <h2 className='text-lg py-4 rounded-lg font-bold text-purple-600'>Spent time on read : {readingTime} min</h2>
        </div>
    );
};

ReadingTime.propTypes = {
    readingTime: PropTypes.number.isRequired
}

export default ReadingTime;
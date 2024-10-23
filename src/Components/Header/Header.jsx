import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='flex items-center justify-between py-4 border-b'>
            <h1 className='text-2xl font-bold'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;
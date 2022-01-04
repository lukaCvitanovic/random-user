import { Outlet, Link } from 'react-router-dom';
import logo from '@/assets/logo.svg';

const CommonLayout = () => {
    return (
        <div>
            <div className='flex py-4 w-full items-center justify-center border-b-2 border-gray-500'>
                <Link to="/">
                    <img src={logo} alt="DEPT logo" className='h-6' />
                </Link>
            </div>
            <Outlet />
        </div>
    );
}

export default CommonLayout;
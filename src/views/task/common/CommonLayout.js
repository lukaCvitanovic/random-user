import { Outlet, Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import logo from '@/assets/logo.svg';

const CommonLayout = () => {
    let location = useLocation();

    const logoLink = () => {
        if (location.pathname !== '/') {
            return (
                <Link to="task">
                    <img src={logo} alt="DEPT logo" className='h-6' />
                </Link>
            );
        }
        return (
            <div className='h-6'></div>
        );
    }

    return (
        <div>
            <div className='flex relative py-4 w-full items-center justify-center border-b-2 border-gray-500'>
                <Link
                    to="/"
                    className="absolute left-4"
                >
                    <FontAwesomeIcon
                        icon={faHome}
                        className="fa-lg"
                    />
                </Link>
                {logoLink()}
            </div>
            <Outlet />
        </div>
    );
}

export default CommonLayout;
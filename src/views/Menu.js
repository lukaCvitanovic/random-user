import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div className='flex flex-col'>
            <span>Menu</span>
            <Link to="task">Task</Link>
        </div>
    );
};

export default Menu;
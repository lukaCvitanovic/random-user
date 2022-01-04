import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div className='flex flex-col'>
            <span>Menu</span>
            <Link to="task">Task</Link>
            <Link to="react-router/history/1">Programatic navigation</Link>
        </div>
    );
};

export default Menu;
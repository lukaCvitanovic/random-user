import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div className='flex flex-col'>
            <span>Menu</span>
            <Link to="task">Task</Link>
            <Link to="react-router/history/1">Programatic navigation</Link>
            <Link to="ref-forwarding">Ref Forwarding</Link>
            <Link to="portal">Portal</Link>
            <Link to="aside">Aside</Link>
        </div>
    );
};

export default Menu;
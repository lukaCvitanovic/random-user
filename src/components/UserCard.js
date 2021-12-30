import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const UserCard = (props) => {
    const [userData] = useState(props.data);

    const dispatch = useDispatch();

    const titleAndName = `${userData.name.title} ${userData.name.first}`;
    const userRoute = `users/${userData.id}`;

    return (
        <Link
            to={userRoute}
            onClick={() => dispatch({ type: 'user/addUser', payload: userData })}
        >
            <div className='h-32 md:h-52 flex border gap-x-4 border-zinc-300 rounded shadow-md shadow-slate-200'>
                <img
                    src={userData.picture.large}
                    alt="User"
                    className='aspect-square'
                />
                <div className='flex flex-col justify-center text-xl font-medium'>
                    <span>{ titleAndName }</span>
                    <span>{ userData.name.last }</span>
                </div>
            </div>
        </Link>
    )
}

export default UserCard;
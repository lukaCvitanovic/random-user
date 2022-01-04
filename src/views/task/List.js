import userFormater from '@/helpers/userFormater';
import { useState, useEffect } from 'react';

import UserCard from '@/components/UserCard';

const List = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => userFormater.then((results) => setUsers(results)));

  const userCards = users.map((user) => {
    return (
      <UserCard
        data={user}
        key={user.id}
      />
    );
  });

  return (
    <div className='flex justify-center'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl p-4'>
        {userCards}
      </div>
    </div>
  );
};

export default List;

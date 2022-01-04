import userFormater from '@/helpers/userFormater';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addUser } from '@/store/slices/user';

import UserCard from '@/components/UserCard';

class List extends React.Component {
  constructor(props) {
    super(props);

    const { dispatch } = props;
    this.state = {
      users: [],
    };
    this.boundActions = bindActionCreators(addUser, dispatch);
  }

  render() {
    const userCards = this.state.users.map((user) => {
      return (
        <UserCard
          data={user}
          actions={this.boundActions}
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
  }

  componentDidMount() {
    userFormater.then((results) => this.setState({ users: results }));
  }
}

export default connect()(List);

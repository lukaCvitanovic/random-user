import userFormater from '@/helpers/userFormater';
import React from 'react';

class List extends React.Component {
  render() {
    return (
      <div>
        <span className="bg-red-500">Test</span>
      </div>
    );
  }

  static getDerivedStateFromProps() {
    userFormater.then((results) => console.log(results));
  }
}

export default List;

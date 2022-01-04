import React from 'react';
import { Link } from 'react-router-dom';

class UserCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.data;
    }

    render() {
        const titleAndName = `${this.state.name.title} ${this.state.name.first}`;
        const userRoute = `users/${this.state.id}`;

        return (
            <Link
                to={userRoute}
                onClick={() => this.props.actions(this.state)}
            >
                <div className='h-32 md:h-52 flex border gap-x-4 border-zinc-300 rounded shadow-md shadow-slate-200'>
                    <img
                        src={this.state.picture.large}
                        alt="User"
                        className='aspect-square'
                    />
                    <div className='flex flex-col justify-center text-xl font-medium'>
                        <span>{ titleAndName }</span>
                        <span>{ this.state.name.last }</span>
                    </div>
                </div>
            </Link>
        );
    }
}

export default UserCard;
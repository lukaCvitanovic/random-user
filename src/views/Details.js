import React from 'react';
import { removeUser } from '@/store/slices/user';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link, Navigate } from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';

class Details extends React.Component {
    constructor(props) {
        super(props);

        const { user } = props;
        this.state = user;
    }

    render() {
        if (isEmpty(this.state) || !this.state) return <Navigate to="/" />
        
        const { name, location, email, phone } = this.state;
        const nameWithTitle = `${name.title} ${name.first} ${name.last}`;
        const placeOfResidence = `${location.street.number} ${location.street.name}, ${location.city}`;

        return (
            <div className='flex justify-center'>
                <div className='flex flex-col w-full max-w-3xl'>
                    <Link
                        to="/"
                        className="w-max"
                    >
                        <FontAwesomeIcon
                            icon={faArrowLeft}
                            className="ml-3 mt-3 fa-lg"
                        />
                    </Link>
                    <div className='flex flex-col px-6 mt-4'>
                        <img
                            src={this.state.picture.large}
                            alt="User"
                            className='w-44 md:w-80 aspect-square'
                        />
                        <span className='mt-4 font-semibold text-xl'>{nameWithTitle}</span>
                        <div className='flex flex-col gap-y-3 mt-2'>
                            <div className='flex justify-between text-base'>
                                <span className='font-medium'>Date Of Birth:</span>
                                <span>{this.state.dob.date}</span>
                            </div>
                            <div className='flex justify-between text-base'>
                                <span className='font-medium'>Place of residence:</span>
                                <span>{placeOfResidence}</span>
                            </div>
                            <div className='flex justify-between text-base'>
                                <span className='font-medium'>E-mail:</span>
                                <span>{email}</span>
                            </div>
                            <div className='flex justify-between text-base'>
                                <span className='font-medium'>Phone number:</span>
                                <span>{phone}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    componentWillUnmount() {
        this.props.dispatch(removeUser());
    }
}

export default connect()(Details);
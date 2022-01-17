import GoogleLogin from 'react-google-login';
import api from '@/services/api';

const CLIENT_ID = '87505140879-l615u46sm3pa2visq4scfnqas6g3bi2e.apps.googleusercontent.com';

const Login = () => {
    const handleLogin = ({ tokenId }) => {
        api.post('http://localhost:7000/auth/login', { token: tokenId })
            .then((data) => console.log(data))
            .catch((error) => console.log(error));
    };
    const handleFaliure = () => console.log('Login failed');

    return (
        <div className='flex flex-col'>
            <span>Login Page</span>
            <GoogleLogin
                clientId={CLIENT_ID}
                buttonText="Log in with Google"
                onSuccess={handleLogin}
                onFaliure={handleFaliure}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    );
};

export default Login;
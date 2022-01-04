import axios from 'axios';

const axiosConfig = axios.create();
axiosConfig.defaults.baseURL = 'https://randomuser.me/api/';

axiosConfig.interceptors.response.use(function (response) {
    return response;
},
function (error) {
    return error.response;
});

export default axiosConfig;
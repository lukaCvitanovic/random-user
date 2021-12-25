import api from '@/services/api';
import slice from 'lodash/slice';

const allowedTimezoneOffsets = ['-1:00', '0:00', '+1:00']
const MAX_USERS = 15;
const filterByTimezoneOffset = (results) => results.filter(({ location: { timezone: { offset } } }) => allowedTimezoneOffsets.includes(offset))
const createIds = (results) => results.map((result, index) => ({ id: index, ...result }));

const formatedUsers = new Promise((resolve, reject) => {
    api.get('?inc=picture,name,dob,location,email,phone&age=18&results=200&nat=GB&seed=DEPT')
        .then(({ data: { results } }) => {
            const first15Users = slice(filterByTimezoneOffset(results), 0, MAX_USERS);
            resolve(createIds(first15Users));
        })
        .catch((error) => reject(error));
});

export default formatedUsers;
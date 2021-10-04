const RANDOM_USERS_QUERY_PATH = '?results=1000&age=18&inc=name,dob,picture,email,location,phone&seed=dept';

const addIds = (array) => array.map((element, index) => ({ id: index, ...element }));

const validTimezones = ['-1:00', '0:00', '+1:00'];

export default {
  methods: {
    fetchUsers() {
      return new Promise((resolve, reject) => {
        this.$api.get(RANDOM_USERS_QUERY_PATH)
          .then(({ data: { results } }) => resolve(addIds(this.filterUsers(results))))
          .catch((error) => reject(error));
      });
    },
    fetchUser(id) {
      return new Promise((resolve, reject) => {
        this.fetchUsers()
          .then((users) => resolve(users.find(({ id: userId }) => userId === Number(id))))
          .catch((error) => reject(error));
      });
    },

    filterUsers(users) {
      const timezoneFiltered = users.filter(({ location: { timezone: { offset } } }) => validTimezones.includes(offset));
      return timezoneFiltered.slice(0, 15);
    },
  },
};

// const RANDOM_USERS_QUERY_PATH = '?results=1000&age=18&inc=id,name,dob,picture,email,location,phone&seed=dept';
const TEST_URL = '?results=15&age=18&inc=name,dob,picture,email,location,phone&seed=dept';

const addIds = (array) => array.map((element, index) => ({ id: index, ...element }));

export default {
  methods: {
    fetchUsers() {
      return new Promise((resolve, reject) => {
        this.$api.get(TEST_URL)
          .then(({ data: { results } }) => resolve(addIds(results)))
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
  },
};

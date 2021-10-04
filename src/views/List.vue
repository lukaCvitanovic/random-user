<template>
  <div
    v-if="ready"
    class="grid grid-cols-1 sm:grid-cols-2 gap-6"
  >
    <tile
      v-for="user in formatedUsers"
      :key="user.id"
      v-bind="user"
      @click.native="storeUser(user.id)"
    />
  </div>
</template>

<script>
import Tile from '@/components/list/Tile';

// const RANDOM_USERS_QUERY_PATH = '?results=1000&age=18&inc=id,name,dob,picture,email,location,phone&seed=dept';
const TEST_URL = '?results=15&age=18&inc=name,dob,picture,email,location,phone&seed=dept';

export default {
  name: 'List',

  components: {
    Tile,
  },

  data: () => ({
    users: [],
    ready: false,
  }),

  computed: {
    formatedUsers() {
      if (this.users.length) return this.users.map(({ id, name: { title, first, last }, picture }) => ({
        id,
        title,
        first,
        last,
        picture: picture.large,
      }));
      return [];
    },
  },

  methods: {
    getUsers() {
      this.setReady(false);
      this.$api.get(TEST_URL)
        .then(({ data: { results } }) => this.users = this.addIds(results))
        .catch(() => console.log('Couldn\'t get random users'))
        .finally(() => this.setReady(true));
    },
    setReady(value) {
      this.ready = value;
    },
    addIds(array) {
      return array.map((element, index) => ({ id: index, ...element }));
    },
    storeUser(id) {
      const selectedUser = this.users.find(({ id: userId }) => userId === id ) || {};
      this.$store.commit('setUser', selectedUser);
    },
  },

  created() {
    this.getUsers();
  },
};
</script>

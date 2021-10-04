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
import CommonApiMethods from '@/mixins/CommonApiMethods';

export default {
  name: 'List',

  mixins: [
    CommonApiMethods,
  ],

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
    loadUsers() {
      this.setReady(false);
      this.fetchUsers()
        .then((users) => {
          this.users = users;
        })
        .catch(() => console.log('Couldn\'t get random users'))
        .finally(() => this.setReady(true));
    },
    setReady(value) {
      this.ready = value;
    },
    storeUser(id) {
      const selectedUser = this.users.find(({ id: userId }) => userId === id ) || {};
      this.$store.commit('setUser', selectedUser);
    },
  },

  created() {
    this.loadUsers();
  },
};
</script>

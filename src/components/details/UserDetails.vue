<template>
  <div
    v-if="ready"
    class="w-full grid grid-cols-1 sm:grid-cols-2 gap-8 p-4"
  >
    <img :src="this.user.picture.large" class="w-full max-w-sm">
    <div class="w-full flex flex-col">
      <span class="text-3xl font-medium">{{ title }}</span>
      <div class="w-full flex justify-between mt-4 text-lg">
        <span class="font-medium">Date of Birth:</span>
        <span>{{ dob }}</span>
      </div>
      <div class="w-full flex justify-between mt-2 text-lg">
        <span class="font-medium">Place of Residence:</span>
        <span class="text-right">{{ placeOfResidence }}</span>
      </div>
      <div class="w-full flex justify-between mt-2 text-lg">
        <span class="font-medium">Email:</span>
        <span class="text-right">{{ user.email }}</span>
      </div>
      <div class="w-full flex justify-between mt-2 text-lg">
        <span class="font-medium">Phone number:</span>
        <span class="text-right">{{ user.phone }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { format } from 'date-fns';
import CommonApiMethods from '@/mixins/CommonApiMethods';
import isEmpty from 'lodash/isEmpty';

export default {
  name: 'UserDetails',

  mixins: [
    CommonApiMethods,
  ],

  data: () => ({
    user: {},
    ready: false,
  }),

  computed: {
    ...mapGetters([('getUser')]),
    title: (vm) => `${vm.user.name.title} ${vm.user.name.first} ${vm.user.name.last}`,
    dob: (vm) => format(new Date(vm.user.dob.date), 'dd/MM/yyyy'),
    placeOfResidence() {
      const { city, state, country, street: { name: streetName, number: streetNumber } } = this.user.location;
      return `${streetNumber} ${streetName}, ${city}, ${state}, ${country}`;
    },
  },

  methods: {
    initializeUserDetails() {
      if (isEmpty(this.getUser)) {
        this.setReady(false);
        this.fetchUser(this.$route.params.id)
          .then((user) => {
            console.log(user);
            this.user = user;
          })
          .catch(() => console.log('Couldn\'t get current user details'))
          .finally(() => this.setReady(true));
      } else {
        this.user = this.getUser;
        this.setReady(true);
      }
    },
    setReady(value) {
      this.ready = value;
    },
  },

  created() {
    this.initializeUserDetails();
  },
};
</script>

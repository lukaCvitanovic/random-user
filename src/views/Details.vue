<template>
  <div class="w-full flex flex-col">
    <details-header />
    <user-details />
  </div>
</template>

<script>
import DetailsHeader from '@/components/details/DetailsHeader';
import UserDetails from '@/components/details/UserDetails';

export default {
  name: 'Details',

  components: {
    DetailsHeader,
    UserDetails,
  },

  beforeRouteLeave(to, from, next) {
    this.$store.commit('removeUser');
    next();
  },
};
</script>

<template>
  <img
    v-lazy="src"
    v-bind="$attrs"
    v-on="$listeners"
  >
</template>

<script>
export default {
  name: 'LazyLoadedImg',

  props: {
    src: {
      type: String,
      default: '',
    },
  },
};
</script>

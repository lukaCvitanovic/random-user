<template>
  <router-link :to="{ name: 'user', params: { id } }">
    <div class="w-full h-full grid grid-cols-3 rounded border border-gray shadow hover:shadow-lg">
      <img
        :src="this.picture"
        class="w-full h-full rounded-l"
      >
      <div class="col-span-2 flex flex-col px-4 justify-center font-medium text-lg">
        <span>{{ title }} {{ first }}</span>
        <span>{{ last }}</span>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'Tile',

  props: {
    id: {
      type: Number,
      default: -1,
    },
    title: {
      type: String,
      default: '',
    },
    first: {
      type: String,
      default: '',
    },
    last: {
      type: String,
      default: '',
    },
    picture: {
      type: String,
      default: '',
    },
  },
};
</script>

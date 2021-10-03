<template>
  <div class="w-full flex justify-center items-center py-3 border-b border-black">
    <router-link :to="{ name: 'root' }">
      <img
        :src="require('@/assets/logo.svg')"
        class="h-5"
      >
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CommonHeader',
};
</script>

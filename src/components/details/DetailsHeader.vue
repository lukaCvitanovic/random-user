<template>
  <div class="w-full flex">
    <router-link :to="{ name: 'users' }">
      <fa-icon
        :icon="['fas', 'arrow-left']"
        class="fa-2x"
      />
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'DetailsHeader',
};
</script>

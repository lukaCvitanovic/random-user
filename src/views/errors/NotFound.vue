<template>
  <div class="w-full h-40 flex items-center justify-center">
    <fa-icon
      :icon="['fas', 'exclamation-circle']"
      class="fa-3x text-red-500 mr-8"
    />
    <span class="text-3xl font-bold text-red-500">Something went wrong !</span>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
};
</script>

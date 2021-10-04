<template>
  <div class="w-full flex col-span-1 sm:col-span-2 justify-center items-center">
    <fa-icon
      :icon="['fas', 'exclamation-circle']"
      class="fa-2x text-red-500 mr-6"
    />
    <span class="flex text-2xl text-red-500 font-bold leading-6">An Error ocured while fetching users</span>
  </div>
</template>

<script>
export default {
  name: 'ErrorMessage',
};
</script>

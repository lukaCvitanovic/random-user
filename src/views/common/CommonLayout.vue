<template>
  <div class="w-full flex flex-col">
    <common-header />
    <main class="flex p-3 sm:p-6 justify-center">
      <div class="w-full max-w-4xl">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script>
import CommonHeader from '@/components/common/CommonHeader';

export default {
  name: 'CommonLayout',

  components: {
    CommonHeader,
  },
};
</script>

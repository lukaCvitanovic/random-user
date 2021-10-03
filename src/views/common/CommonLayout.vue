<template>
  <div class="w-full flex flex-col">
    <common-header />
    <main>
      <router-view />
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

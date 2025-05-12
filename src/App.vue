<template>
  <Layout>
    <div id="container" class="flex flex-col items-center justify-between w-full min-h-100vh">
      <Header />
      <div class="flex-1 w-main">
        <router-view v-if="isRefreshFlag" :key="$route.path"></router-view>
      </div>
      <Footer />
    </div>
  </Layout>
</template>
<script setup>
  import { onMounted, ref, nextTick, provide } from 'vue';
  import Header from '@/views/header/index.vue';
  import Footer from '@/views/footer/index.vue';

  const isRefreshFlag = ref(true);
  function reloadPage() {
    isRefreshFlag.value = false;
    nextTick(() => {
      isRefreshFlag.value = true;
    });
  }
  provide('reloadPage', reloadPage);

  onMounted(() => {
    // 移动端适配  如果为移动端则执行函数进行适配
    (function (doc) {
      let docEl = doc.documentElement; // 获取html
      docEl.style.fontSize = '100px';
    })(document, window);
  });
</script>

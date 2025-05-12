<template>
  <div class="w-full h-[1000px] bg-000-1">这里是组件给你留一个作参考 {{ name }}</div>
</template>

<script setup>
  defineProps({
    name: {
      type: Object,
      required: true,
    },
  });
</script>

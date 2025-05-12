<template>
  <div class="w-full bg-1c1c1e flex flex-col justify-center items-center cursor-default py-18">
    <div class="flex flex-wrap justify-between w-main">
      <div v-for="(item, index) in list" :key="index">
        <div class="text-left font-700 text-fff text-18">
          {{ item.name }}
        </div>
        <div class="flex flex-col text-fff-6 text-13">
          <a
            class="pt-10 cursor-pointer"
            v-for="(e, i) in item.list"
            :key="i"
            :href="e.link"
            target="_blank"
            >{{ e.name }}</a
          >
        </div>
      </div>
    </div>
    <div class="text-fff-6 pt-16 text-12" v-html="`Copyright`" />
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  const list = ref([
    {
      name: 'Community',
      list: [
        { name: 'Tiktok', link: '' },
        { name: 'Facebook', link: '' },
      ],
    },
    { name: 'Contact Us', list: [{ name: 'aaaa', link: '' }] },
    {
      name: 'more',
      list: [
        { name: 'Youtube', link: 'https://www.youtube.com/@GuYanTV-x7n' },
        { name: 'Instagram', link: 'https://www.instagram.com/guyan_168/' },
      ],
    },
  ]);
</script>

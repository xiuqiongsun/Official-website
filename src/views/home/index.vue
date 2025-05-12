<template>
  <div className="w-full pt-16 pb-48 ">
    <div class="grid grid-rows-2 grid-flow-col gap-16">
      <div
        :class="[index === 0 ? 'row-span-2' : 'row-span-1', 'bg-000-04']"
        class="rounded-4 overflow-hidden group"
        v-for="(item, index) in bannerData"
        :key="item"
      >
        <div class="flex justify-between">
          <div :class="index === 0 ? 'h-384 w-288' : 'h-184 w-138'" class="overflow-clip rounded-4">
            <img
              class="w-full h-full object-cover ease-linear duration-400 cursor-pointer hover:scale-110"
              :src="item.image_url"
              @click="goDetail(item)"
              alt=""
            />
          </div>
          <div
            :class="index === 0 ? ' w-422 p-16 ' : 'w-270 p-14 pl-12'"
            class="flex-1 text-left flex flex-col justify-between"
          >
            <div class="">
              <div
                class="font-500 text-20 line-clamp-2 cursor-pointer group-hover:text-main font-600"
                @click="goDetail(item)"
              >
                {{ item.name }}
              </div>
              <div
                class="cursor-pointer w-fit"
                :class="index === 0 ? 'mt-8' : 'mt-8'"
                @click="goDetail(item)"
              >
                {{ item.episode_total }} {{ $t('detail.Episode') }}
              </div>
              <div
                class="text-12 w-full cursor-pointer"
                :class="[
                  index === 0 ? 'mt-8 line-clamp-10' : 'line-clamp-2 mt-8',
                  'text-000-5 group-hover:text-000-7',
                ]"
                @click="goDetail(item)"
              >
                {{ item.description }}
              </div>
            </div>
            <div class="flex flex-wrap">
              <div
                class="mr-10 text-10 rounded-full leading-2 px-8 cursor-pointer hover:text-main bg-000-06 text-000-6"
                v-for="(m, n) in item.category"
                :key="n"
                @click="goBrowse(m)"
              >
                {{ m }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Zujian name="组件名字" />
</template>

<script setup>
  import { onMounted, ref } from 'vue';
  import { bannerList } from '@/api/home';

  import { dataFilter } from '@/utils/utils';
  import Zujian from '@/components/zujian.vue';

  const bannerData = ref(null);

  onMounted(() => {
    getBanner(3);
  });

  // 这里是写接口的地方 dataFilter是过滤功能可以不要
  const getBanner = limit => {
    bannerList()
      .then(res => {
        bannerData.value = dataFilter(res, limit);
      })
      .catch(error => {
        console.log(error);
      });
  };
</script>

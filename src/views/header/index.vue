<template>
  <el-affix :offset="0">
    <div class="w-full backdrop-blur-xl bg-transition">
      <div class="w-main h-66 flex flex-wrap justify-between items-center">
        <div class="h-66 flex flex-wrap items-center">
          <img class="h-34" src="@/assets/Guyan-logo.png" alt="404" />
          <div class="flex flex-wrap justify-between items-center ml-100">
            <el-menu
              :ellipsis="false"
              :default-active="tabsActive"
              class="h-full font-500"
              mode="horizontal"
              :style="{
                '--el-menu-bg-color': 'rgba(0,0,0,0)',
                '--el-menu-text-color': '#333',
                '--el-menu-active-color': '#ff375f',
                '--el-menu-hover-text-color': '#ff375f',
                '--el-menu-hover-bg-color': 'rgba(0,0,0,0.08)',
              }"
            >
              <el-menu-item
                :index="item.id"
                class="w-90 text-16"
                v-for="item in tabs"
                :key="item.id"
                @click="menuClick"
                >{{ item.name }}</el-menu-item
              >
            </el-menu>
          </div>
        </div>

        <div class="flex flex-wrap items-center">
          <div class="w-140">
            <el-select
              v-model="selectValue"
              :placeholder="$t('search')"
              size="large"
              teleported
              :style="{
                width: '140px',
                marginLeft: '0px',
                '--el-fill-color-blank': 'rgba(0,0,0,0)',
                '--el-border-color': 'rgba(0,0,0,0)',
                '--el-border-color-hover': 'rgba(0,0,0,0)',
                '--el-color-primary': 'rgba(0,0,0,0)',
                '--el-text-color-regular': '#333',
              }"
              @change="select"
            >
              <el-option
                v-for="item in localArr"
                :key="item.key"
                :label="item.name"
                :value="item.key"
              />
            </el-select>
          </div>
          <el-input
            class="custom-input"
            v-model="searchInput"
            :style="{
              marginLeft: '20px',
              width: '280px',
              '--el-input-border-radius': '50px',
              '--el-input-bg-color': 'rgba(0,0,0,.08)',
              '--el-input-border-color': 'transparent',
              '--el-input-focus-border-color': '#333',
              '--el-input-text-color': '#333',
              '--el-input-placeholder-color': 'rgba(0,0,0,.4)',
            }"
            :placeholder="$t('header.search')"
            :prefix-icon="Search"
            clearable
          />
        </div>
      </div>
    </div>
  </el-affix>
</template>

<script setup>
  import { ref, onMounted } from 'vue';
  // Search,
  import { useRouter } from 'vue-router';
  import { storeToRefs } from 'pinia';
  import { userStore } from '@/store/userStore';

  const router = useRouter();
  const { tabsActive } = storeToRefs(userStore());

  const tabs = [
    { id: 'Home', name: '首页' },
    { id: 'App', name: 'App' },
  ];
  onMounted(() => {
    router.beforeEach(to => {
      window.scrollTo(0, 0);
      tabsActive.value = to.name;
    });
  });

  const menuClick = e => {
    routers(e.index);
  };

  const routers = e => {
    tabsActive.value = e;
    router.replace({ name: e });
  };

  // 定义key对应的语言
  const localArr = [
    { key: 'zh', name: '这里是选择框，自己改' },
    { key: 'zh_hk', name: '选择框1' },
    { key: 'en', name: '选择框2' },
    { key: 'vi', name: '选择框3' },
    { key: 'ja', name: '日本語' },
  ];
  const selectValue = ref('');
  const select = e => {
    console.log(e);
    // 这里直接执行  menuClick(e)
  };

  const searchInput = ref('');
</script>

<style lang="scss" scoped>
  .el-menu-popper-demo {
    display: flex;
    flex-wrap: wrap;
  }

  .el-menu--horizontal.el-menu {
    border-bottom-width: 0px;
  }

  ::v-deep(.el-select--large) {
    .el-select__wrapper {
      padding: 8px 10px 8px 0;
      text-align: right;
    }
  }

  ::v-deep(#MobileHeader .el-tabs__item) {
    height: 100px !important;
  }

  .el-menu-item {
    height: 30px;
    margin: 0 10px;

    &.is-active {
      position: relative;
      border-bottom: 0px solid rgba(0, 0, 0, 0);
    }
  }

  .fixed-d {
    background-image: url('@/assets/header-background.png');
    background-size: cover;
    background-size: 100% 100%;
  }

  ::v-deep(.el-tabs__item) {
    padding: 0 14px;
  }

  ::v-deep(.el-tabs__item.aaa) {
    padding: 0 10px;
  }
</style>

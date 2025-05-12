<template>
  <div class="w-full cursor-default">
    <div class="flex flex-col justify-center">
      <div class="text-24 mt-50 mx-28 text-center">
        app.Guyan TV - Enjoy Every Moment, Binge on Your Favorite Shows!
      </div>
      <div
        class="mb-14 mt-24 px-8 text-15 whitespace-pre-wrap leading-1.8 text-center text-000-6"
        v-html="'app.APP Info'"
      ></div>
      <div class="flex flex-wrap justify-center items-center mt-14 mb-84">
        <img class="w-550 h-520 mr-10" src="/src/assets/bg1.png" alt="" />
        <div class="flex flex-wrap justify-center">
          <div class="p-24 w-320 flex flex-col justify-center items-center rounded-20 bg-000-04">
            <img class="h-34 mt-2" src="@/assets/Guyan-logo.png" alt="404" />
            <img class="w-150 h-150 mt-16" src="@/assets//qrcode.png" alt="" />

            <div class="mt-14 text-12 whitespace-pre-wrap text-center leading-1.8 text-fff-6">
              Please use mobile phone to scan the QR code to download.<br />
              Or copy the link, open it with your mobile browser to download.
            </div>
            <div
              class="text-main text-12 underline underline-offset-4 pt-2 cursor-pointer"
              @click="copy"
            >
              Click to copy the link.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ElMessage } from 'element-plus';
  import { onCopy } from '@/utils/utils';

  const copy = () => {
    ElMessage({
      type: 'success',
      message: '复制成功',
    });
    onCopy('https://web.guyantv.com/#/app');
  };
  // 你的Vue组件逻辑
</script>

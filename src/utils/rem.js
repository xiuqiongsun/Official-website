function setRem() {
  const whdef = 100 / 1920; // 表示1920的设计图,使用100PX的默认值
  let wH = window.innerHeight; // 当前窗口高度
  let wW = window.innerWidth; // 当前窗口宽度（含滚动条）
  if (wW > window.screen.width) {
    // 当前显示区域宽度（不包括滚动条）可能小于实际屏幕分辨率 安卓、ios浏览器兼容性问题
    wW = window.screen.width;
    wH = window.screen.height;
  }
  const rem = whdef * Math.max(wW, wH); // 取宽高中的最大值作为基准，这样可以保证页面上下都有足够的空间
  document.documentElement.style.fontSize = rem + 'px';
}
// 初始化调用一次
setRem();
// 监听窗口变化，重新设置rem值。
window.addEventListener('resize', function () {
  setRem();
});

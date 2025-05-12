export const dataFilter = (data, n) => {
  const addArray = (array, element, n) => {
    for (let i = 0; i < n; i++) {
      array.push(element);
    }
    return array;
  };
  if (Array.isArray(data) && data.length) {
    const _data =
      data.length >= n ? data.slice(0, n) : addArray(data, data[data.length - 1], n - data.length);
    return _data;
  }
  return data;
};

export const onCopy = async data => {
  console.log(data);
  if (navigator.clipboard && navigator.permissions) {
    await navigator.clipboard
      .writeText(data)
      .then(() => {
        console.log('成功', data);
        // 这里可以添加用户反馈，比如显示一个提示或者按钮
      })
      .catch(err => {
        console.log(err);
        // 处理错误，可能需要提示用户或者进行错误处理
      });
  } else {
    const textArea = document.createElement('textArea');
    textArea.value = data;
    textArea.style.width = 0;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999px';
    textArea.style.top = '10px';
    textArea.setAttribute('readonly', 'readonly');
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
  }
};

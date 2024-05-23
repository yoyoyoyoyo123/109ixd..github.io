document.addEventListener('DOMContentLoaded', (event) => {
  let currentIndex = 0; // 当前图片的索引
  const images = ['bg-image', 'bg-image-1']; // 图片类名数组
  const bgImage = document.querySelector('.bg-image');
  let isAnimating = false; // 是否正在进行动画

  function updateBackground(newIndex) {
    if (newIndex === currentIndex && !isAnimating) {
      // 如果是在当前背景上滚动且没有动画正在进行，则不执行动画
      return;
    }

    isAnimating = true; // 开始动画
    bgImage.classList.add('fade-out');

    setTimeout(() => {
      images.forEach(image => bgImage.classList.remove(image));
      bgImage.classList.add(images[newIndex]);

      bgImage.classList.remove('fade-out');
      bgImage.classList.add('fade-in');

      setTimeout(() => {
        bgImage.classList.remove('fade-in');
        isAnimating = false; // 动画结束
      }, 500); // 淡入效果完成后移除类
    }, 500); // 与CSS中的过渡时间一致
  }

  function handleScroll(e) {
    e.preventDefault(); // 阻止默认滚动行为

    let newIndex = currentIndex; // 假设的新索引
    if (e.deltaY > 0) { // 向下滚动
      if (currentIndex < images.length - 1) {
        newIndex = currentIndex + 1;
      }
    } else if (e.deltaY < 0) { // 向上滚动
      if (currentIndex > 0) {
        newIndex = currentIndex - 1;
      }
    }

    if (newIndex !== currentIndex || isAnimating) {
      // 只有在改变背景或正在动画时才更新背景
      updateBackground(newIndex);
      currentIndex = newIndex; // 更新当前索引
    }
  }

  window.addEventListener('wheel', handleScroll);
});

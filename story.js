// var lines = [
//   "Hello,",
//   "Welcome to",
//   "The Typing Effect"
// ];

// // 获取显示文字的元素
// var typewriter = document.getElementById('typewriter');
// // 设置初始索引
// var lineIndex = 0;
// var charIndex = 0;

// // 创建一个定时器，每隔一段时间更新文字内容
// var timer = setInterval(function() {
//   // 获取当前行
//   var currentLine = lines[lineIndex];
//   // 将文字逐字添加到元素中
//   typewriter.textContent += currentLine[charIndex];

//   charIndex++;

//   // 当一行文字全部添加完成后，开始下一行
//   if (charIndex === currentLine.length) {
//     typewriter.textContent += '\n'; // 添加换行
//     charIndex = 0;
//     lineIndex++;
//     // 当所有行都添加完成后清除定时器
//     if (lineIndex === lines.length) {
//       clearInterval(timer);
//     }
//   }
// }, 100); // 每隔100毫秒添加一个字
document.addEventListener('click', function() {
  black = document.getElementById("black");

  black.style.display = "block";
  black.classList.add('fade2');
  setTimeout(function() {
    window.location.href = "question.html"; // 導航到新的 HTML 頁面
  }, 3000); // 這裡的 1000 毫秒等於 transition 的時間
});




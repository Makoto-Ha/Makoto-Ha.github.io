// RWD樣式切換
let title = document.querySelector('header h1');

if(document.body.offsetWidth <= 1024) {
  title.innerHTML = '<a href="/index.html">朗智科技</a>';
}
// 720px 選單
let ulChilds = document.querySelectorAll('ul li');
let stretchBlock = document.getElementById('stretchBlock');
let stretchCheck = document.getElementById('stretchCheck');
let label = document.querySelector('label');

// 720px選單點擊X動畫
// 注意click回調執行的

// 點擊選單後把label控制按鈕消失，防止重複點擊
document.querySelector('#stretchBlock > a').addEventListener('transitionstart', () => {
  label.style.display = 'none';
})

ulChilds[0].addEventListener('animationend', () => {
  // cross是點擊選單後的X位置
  ulChilds[0].classList.toggle('cross1');
  ulChilds[2].classList.toggle('cross3');
  ulChilds[4].classList.toggle('cross2');

  if(stretchCheck.checked) {
    // 如果有checked了，就把打X的動畫class刪除
    ulChilds[0].classList.remove('menu720-1');
    ulChilds[2].classList.remove('menu720');
    ulChilds[4].classList.remove('menu720-2');
  }

  if(!stretchCheck.checked) {
    // 如果沒checked，就把X還原動畫class刪除
    ulChilds[0].classList.remove('menu720-reverse-1');
    ulChilds[2].classList.remove('menu720-reverse');
    ulChilds[4].classList.remove('menu720-reverse-2');
  }

  label.style.display = ''; // 等待X動畫結束後把label還原，允許點擊
})

label.addEventListener('click', () => {
  if(!stretchCheck.checked) {
    ulChilds[0].classList.add('menu720-1');
    ulChilds[2].classList.add('menu720');
    ulChilds[4].classList.add('menu720-2');
  }

  if(stretchCheck.checked) {
    ulChilds[0].classList.add('menu720-reverse-1');
    ulChilds[2].classList.add('menu720-reverse');
    ulChilds[4].classList.add('menu720-reverse-2');
  }
})

// 測試js控制footer置底

let footer = document.querySelector('.footer');
footer.style = `top: ${document.body.scrollHeight}px`
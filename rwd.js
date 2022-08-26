// RWD樣式切換
let title = document.querySelector('header h1');
let ul = document.querySelector('ul');
let header = document.querySelector('header');

if(document.body.offsetWidth <= 1024) {
  title.innerHTML = '<a href="/index.html">朗智科技</a>';
}
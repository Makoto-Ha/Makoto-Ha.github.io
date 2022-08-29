// RWD樣式切換
let title = document.querySelector('header h1');
let ul = document.querySelector('ul');
let header = document.querySelector('header');

if(document.body.offsetWidth <= 1024) {
  title.innerHTML = '<a href="/index.html">朗智科技</a>';
}
// 720px 選單
let stretchCheck = document.getElementById('stretchCheck');
let label = document.querySelector('label');
let classChange = true;

document.querySelector('ul li:nth-child(1)').addEventListener('animationend', () => {
  document.querySelector('ul li:nth-child(1)').classList.toggle('newClass1');
  document.querySelector('ul li:nth-child(3)').classList.toggle('newClass3');
  document.querySelector('ul li:nth-child(5)').classList.toggle('newClass2');
  
  document.querySelector('ul li:nth-child(1)').classList.remove('menu720-1');
  document.querySelector('ul li:nth-child(3)').classList.remove('menu720');
  document.querySelector('ul li:nth-child(5)').classList.remove('menu720-2');
})

label.addEventListener('click', () => {
  
  document.querySelector('ul li:nth-child(1)').classList.add('menu720-1');
  document.querySelector('ul li:nth-child(3)').classList.add('menu720');
  document.querySelector('ul li:nth-child(5)').classList.add('menu720-2');

  if(stretchCheck.checked) {
    document.querySelector('ul li:nth-child(1)').classList.add('menu720-reverse-1');
    document.querySelector('ul li:nth-child(3)').classList.add('menu720-reverse');
    document.querySelector('ul li:nth-child(5)').classList.add('menu720-reverse-2');

    setTimeout(() => {
      document.querySelector('ul li:nth-child(1)').classList.remove('menu720-reverse-1');
      document.querySelector('ul li:nth-child(3)').classList.remove('menu720-reverse');
      document.querySelector('ul li:nth-child(5)').classList.remove('menu720-reverse-2');
    }, 1000)

  }

})
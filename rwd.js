// 1024以下header標題修改
let title = document.querySelector('header h1');

if(document.body.offsetWidth <= 1024) {
  title.innerHTML = '<a href="/index.html">朗智科技</a>';
}
// 720px選單點擊X動畫
let ulChilds = document.querySelectorAll('header ul li');
let stretchBlock = document.getElementById('stretchBlock');
let stretchCheck = document.getElementById('stretchCheck');
let label = document.querySelector('label');

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

//header紅色底線動畫
let borderAnimate = document.getElementById('borderAnimate');
// 獲取當前網址所對應的ulChilds陣列索引
const hrefliIndex = () => {
  // 網址的key對應ulChilds的索引
  let href = {
    index: 0,
    factory: 1,
    molding: 1,
    office: 1,
    punching: 1,
    qc: 1,
    refinement: 1,
    product: 2,
    watchband1: 2,
    watchband2: 2,
    watchband3: 2,
    watchband4: 2, 
    certification: 3,
    about: 4
  }
  // 切割當前網址
  let key = location.href.substring(location.href.lastIndexOf('/')+1);
      key = key.slice(0, key.lastIndexOf('.'));

  return href[key];
}
// 設置底線初始位置    
console.log(ulChilds[hrefliIndex() || 0].offsetLeft);
borderAnimate.style = `left: ${ulChilds[hrefliIndex() || 0].offsetLeft}px;
                       width: ${ulChilds[hrefliIndex() || 0].offsetWidth}px`;
// 綁定事件
let mark; // 儲存interval的標記，用於停用上一個定時器，避免多個開啟
for(let i=0; i<ulChilds.length; i++) {
  ulChilds[i].addEventListener('mouseenter', (e) => {
    let move = borderAnimate.offsetLeft; // 紅色底線當前位置  
    // 底線動畫
    clearInterval(mark);
    const animate = () => {
      if(e.target.offsetLeft > move) {
        move = move + 3;
        borderAnimate.style = `left: ${move}px;
                               width: ${e.target.offsetWidth}px`;
        if(e.target.offsetLeft <= move) {
          clearInterval(mark);
        };
      }

      if(e.target.offsetLeft < move) {
        move = move - 3;
        borderAnimate.style = `left: ${move}px;
                               width: ${e.target.offsetWidth}px`;
        if(e.target.offsetLeft >= move) {
          clearInterval(mark);
        };
      }    
    }
    mark = setInterval(animate, 1);  
  });
}

// 開發者工具響應設定
window.addEventListener('resize', () => {
  borderAnimate.style = `left: ${ulChilds[hrefliIndex() || 0].offsetLeft}px;
                         width: ${ulChilds[hrefliIndex() || 0].offsetWidth}px`;

  if(document.body.offsetWidth <= 1024) {
    title.innerHTML = '<a href="/index.html">朗智科技</a>';
  }

  if(document.body.offsetWidth > 1024) {
    title.innerHTML = '<a href="/index.html">朗智科技有限公司</a>';
  }
})
//JS
let lastPos = 300;
const nav = document.querySelector('.navbar__container');

// 監聽scroll事件
document.addEventListener('scroll', function () {
  let currentPos = window.scrollY;
  //   往下滑
  if (currentPos > lastPos) {
    nav.style.top = '-100px'; //讓nav bar消失
    $('.menu__container').slideUp();
  } else {
    nav.style.top = '0px'; //讓nav bar出現
  }
  lastPos = currentPos; //再記住現在位置，跟未來的位置做比較
});

// 下拉選單顯示
function dropDown(myObj) {
  const menu = myObj.querySelector('.menu__container');
  $(menu).slideToggle();
}

// 搜尋input顯示
document.querySelector('.fa-search').addEventListener('click', function () {
  $('.nav__button__searchBar').animate({ width: 'toggle' });
});

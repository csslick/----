// main.js
function toggleMenu() {
    const nav = document.querySelector('.title-container header nav');
    nav.classList.add('show'); // nav 나타남

    // 닫기 버튼 나타남
    const btnClose = document.querySelector('#btn-close');
    btnClose.classList.add('show');
}

function closeMenu() {
    const nav = document.querySelector('.title-container header nav');
    nav.classList.remove('show'); // nav 사라짐

    // 닫기 버튼 사라짐
    const btnClose = document.querySelector('#btn-close');
    btnClose.classList.remove('show');
}
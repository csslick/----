// main.js
function toggleMenu() {
    const nav = document.querySelector('.title-container header nav');

    // trasition 효과 켜기
    nav.style.transition = 'all 0.3s';

    nav.classList.add('show'); // nav 나타남

    // 닫기 버튼 나타남
    const btnClose = document.querySelector('#btn-close');
    btnClose.classList.add('show');
}

function closeMenu() {
    const nav = document.querySelector('.title-container header nav');

    // trasition 효과 끄기
    nav.style.transition = 'none';

    nav.classList.remove('show'); // nav 사라짐

    // 닫기 버튼 사라짐
    const btnClose = document.querySelector('#btn-close');
    btnClose.classList.remove('show');
}
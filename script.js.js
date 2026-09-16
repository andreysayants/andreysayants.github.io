document.getElementById('year').textContent = new Date().getFullYear();

// Плавная прокрутка для якорных ссылок
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Простое мобильное меню (можно удалить, если не нужно)
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
if (burger) {
  burger.addEventListener('click', () => {
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    nav.style.flexDirection = 'column';
    nav.style.position = 'absolute';
    nav.style.top = '64px';
    nav.style.right = '20px';
    nav.style.background = '#fff';
    nav.style.padding = '16px';
    nav.style.borderRadius = '12px';
    nav.style.boxShadow = '0 4px 6px -1px rgb(0 0 0 / 0.1)';
  });
}
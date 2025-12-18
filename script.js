const container = document.querySelector('.boxtemplate');
document.getElementById('right').onclick = () => container.scrollBy({ left: 350, behavior: 'smooth' });
document.getElementById('left').onclick = () => container.scrollBy({ left: -350, behavior: 'smooth' });

const search = document.querySelector('.search-overlay');
document.getElementById('search').onclick = () => search.classList.toggle('active')

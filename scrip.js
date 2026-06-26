// Toggle menu untuk layar kecil
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    if (navLinks.style.display === 'block') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'block';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '70px';
        navLinks.style.right = '20px';
        navLinks.style.background = '#fff';
        navLinks.style.padding = '1rem';
        navLinks.style.borderRadius = '8px';
        navLinks.style.boxShadow = '0 2px 10px rgba(0,0,0,0.15)';
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.gap = '1rem';
    }
});

// Fungsi pencarian sederhana
const searchInput = document.getElementById('searchInput');
const products = document.querySelectorAll('.product-card');

searchInput.addEventListener('input', () => {
    const kataCari = searchInput.value.toLowerCase();

    products.forEach(item => {
        const namaProduk = item.querySelector('h4').textContent.toLowerCase();
        if (namaProduk.includes(kataCari)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});
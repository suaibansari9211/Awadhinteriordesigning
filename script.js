document.addEventListener('mousemove', function(e) {
    const parallax = document.querySelector('.parallax-bg');
    const x = (e.clientX / window.innerWidth - 0.5) * 30;
    const y = (e.clientY / window.innerHeight - 0.5) * 30;
    parallax.style.transform = `translate(${x}px, ${y}px) scale(1.05)`;
});
document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox-overlay');
    const lightboxImage = lightbox.querySelector('img');
    const galleryImages = document.querySelectorAll('.gallery-card img');

    galleryImages.forEach(img => {
        img.addEventListener('click', () => {
            lightboxImage.src = img.src;
            lightbox.style.display = 'flex';
        });
    });

    lightbox.addEventListener('click', () => {
        lightbox.style.display = 'none';
        lightboxImage.src = '';
    });
});

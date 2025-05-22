document.addEventListener('mousemove', function(e) {
    const parallax = document.querySelector('.parallax-bg');
    const x = (e.clientX / window.innerWidth - 0.5) * 30;
    const y = (e.clientY / window.innerHeight - 0.5) * 30;
    parallax.style.transform = `translate(${x}px, ${y}px) scale(1.05)`;
});

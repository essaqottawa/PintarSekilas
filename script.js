document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggleButton && navLinks) {
    toggleButton.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  const factSection = document.getElementById('factOfTheDay');
  if (factSection) {
    setTimeout(() => {
      factSection.innerHTML = `
        <img src="https://placehold.co/600x300/42A5F5/FFFFFF?text=Fakta+Unik" alt="Fakta Hari Ini">
        <h3>Kucing bisa mendengarkan ultrasonik!</h3>
        <p>Telinga kucing mampu menangkap suara hingga 64 kHz, jauh lebih tinggi dari manusia.</p>
      `;
    }, 1500);
  }
});
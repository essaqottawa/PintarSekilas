
document.getElementById('searchInput').addEventListener('input', function () {
  const query = this.value.toLowerCase();
  const facts = document.querySelectorAll('.fakta');

  facts.forEach(fact => {
    const text = fact.textContent.toLowerCase();
    fact.style.display = text.includes(query) ? 'block' : 'none';
  });
});

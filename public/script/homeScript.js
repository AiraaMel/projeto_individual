document.addEventListener('DOMContentLoaded', () => {
  const mapImage = document.getElementById('mapImage');
  const searchInput = document.getElementById('searchInput');

  // Clicar no mapa leva à página de busca por países
  mapImage.addEventListener('click', () => {
    window.location.href = '/searchCountry';
  });

  // Apertar Enter no campo de busca
  searchInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const query = searchInput.value.trim();
      if (query) {
        window.location.href = `/searchCountry?query=${encodeURIComponent(query)}`;
      } else {
        window.location.href = '/searchCountry';
      }
    }
  });
});


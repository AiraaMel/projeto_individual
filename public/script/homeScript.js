document.addEventListener('DOMContentLoaded', () => {
  const mapImage = document.getElementById('mapImage');
  const searchInput = document.getElementById('searchInput');

  // Clicar no mapa ainda leva à busca por país
  mapImage.addEventListener('click', () => {
    window.location.href = '/searchCountry';
  });

  // Apertar Enter no campo de busca vai para a busca de eventos (/search)
  searchInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const query = searchInput.value.trim();
      if (query) {
        window.location.href = `/search?query=${encodeURIComponent(query)}`;
      } else {
        window.location.href = '/search';
      }
    }
  });
});

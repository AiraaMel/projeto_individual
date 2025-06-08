document.addEventListener('DOMContentLoaded', () => {
  const mapImage = document.getElementById('mapImage');
  const searchInput = document.getElementById('searchInput');

  if (mapImage) {
    mapImage.addEventListener('click', () => {
      window.location.href = '/searchCountry';
    });
  }

  if (searchInput) {
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
  }
});

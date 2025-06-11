document.addEventListener('DOMContentLoaded', () => {
  const mapImage = document.getElementById('mapImage');
  const searchInput = document.getElementById('searchInput');
  const searchForm = document.querySelector('.search-box');

  if (mapImage) {
    mapImage.addEventListener('click', () => {
      window.location.href = '/searchCountry';
    });
  }

  // Melhorar funcionalidade da busca
  if (searchInput) {
    // Busca ao pressionar Enter
    searchInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        performSearch();
      }
    });

    // Busca em tempo real com debounce
    let searchTimeout;
    searchInput.addEventListener('input', () => {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        const query = searchInput.value.trim();
        if (query.length >= 2) {
          performSearch();
        }
      }, 500);
    });
  }

  // Busca ao submeter o formulário
  if (searchForm) {
    searchForm.addEventListener('submit', (event) => {
      event.preventDefault();
      performSearch();
    });
  }

  function performSearch() {
    const query = searchInput.value.trim();
    if (query) {
      window.location.href = `/search?query=${encodeURIComponent(query)}`;
    } else {
      window.location.href = '/search';
    }
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('searchForm');
  const resultsDiv = document.getElementById('searchResults');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const searchInput = document.getElementById('searchInput');
    const query = searchInput.value.trim();

    if (!query) return;

    try {
      const response = await fetch(`/api/locations/search?query=${encodeURIComponent(query)}`);
      
      if (!response.ok) {
        throw new Error('Erro ao buscar localizações.');
      }

      const html = await response.text();

      // Substitui o conteúdo da div com os resultados renderizados pelo servidor
      resultsDiv.innerHTML = html;

    } catch (error) {
      resultsDiv.innerHTML = `<p style="color:red;">Erro: ${error.message}</p>`;
    }
  });
});

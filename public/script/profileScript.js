document.addEventListener('DOMContentLoaded', async () => {
  const token = localStorage.getItem('token');

  if (!token) {
    alert('Você precisa estar logado para visualizar o perfil.');
    window.location.href = '/login';
    return;
  }

  try {
    const response = await fetch('/api/profile', {
      headers: { Authorization: `Bearer ${token}` }
    });

    if (!response.ok) {
      throw new Error('Não foi possível obter os dados do perfil');
    }

    const data = await response.json();
    console.log('dados recebidos:', data);

    // Preencher os dados do usuário
    const nameInput = document.getElementById('input-name');
    const emailInput = document.getElementById('input-email');

    if (nameInput) nameInput.value = data.user.name;
    if (emailInput) emailInput.value = data.user.email;

    // Preencher eventos inscritos dinamicamente
    const container = document.getElementById('events-container');
    if (container) container.innerHTML = '';

    data.events.forEach(event => {
      console.log('evento:', event);
      const card = document.createElement('div');
      card.classList.add('event-card');

      card.innerHTML = `
        <img src="${event.photo || 'https://placehold.co/100x100'}" class="event-image" alt="Imagem do evento" />
        <div class="event-details">
          <h3 class="event-title">${event.title}</h3>
          <p class="event-description">${event.description}</p>
          <div class="event-tags">
            <span class="event-tag">${event.location}</span>
            <span class="event-tag">${event.category}</span>
          </div>
        </div>
      `;

      container.appendChild(card);
    });

  } catch (err) {
    console.error('Erro ao carregar perfil:', err);
    alert('Erro ao carregar perfil.');
  }
});

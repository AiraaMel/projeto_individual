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
      card.style.cursor = 'pointer';

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

      // Adicionar evento de clique para abrir popup
      card.addEventListener('click', () => {
        openEventPopup(event);
      });

      container.appendChild(card);
    });

  } catch (err) {
    console.error('Erro ao carregar perfil:', err);
    alert('Erro ao carregar perfil.');
  }
});

// Função para abrir popup do evento
function openEventPopup(event) {
  // Criar overlay do popup
  const overlay = document.createElement('div');
  overlay.className = 'event-popup-overlay';

  // Formatar data e hora
  const eventDate = new Date(event.day_time);
  const formattedDate = eventDate.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
  const formattedTime = eventDate.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit'
  });

  overlay.innerHTML = `
    <div class="event-popup">
      <button class="popup-close">&times;</button>
      <img src="${event.photo || 'https://placehold.co/350x200'}" alt="${event.title}" class="popup-event-image">
      <h2 class="popup-event-title">${event.title}</h2>
      <p class="popup-event-description">${event.description || 'Sem descrição disponível.'}</p>

      <div class="popup-event-info">
        <div class="popup-info-item">
          <svg class="popup-info-icon" viewBox="0 0 24 24" fill="none">
            <path d="M8 2V6M16 2V6M3 10H21M5 4H19C20.1046 4 21 4.89543 21 6V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V6C3 4.89543 3.89543 4 5 4Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>${formattedDate} às ${formattedTime}</span>
        </div>

        <div class="popup-info-item">
          <svg class="popup-info-icon" viewBox="0 0 24 24" fill="none">
            <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 5.02944 7.02944 1 12 1C16.9706 1 21 5.02944 21 10Z" stroke="currentColor" stroke-width="2"/>
            <circle cx="12" cy="10" r="3" stroke="currentColor" stroke-width="2"/>
          </svg>
          <span>${event.location || 'Local não informado'}</span>
        </div>

        ${event.duration ? `
        <div class="popup-info-item">
          <svg class="popup-info-icon" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
            <polyline points="12,6 12,12 16,14" stroke="currentColor" stroke-width="2"/>
          </svg>
          <span>${event.duration}</span>
        </div>
        ` : ''}

        ${event.price ? `
        <div class="popup-info-item">
          <svg class="popup-info-icon" viewBox="0 0 24 24" fill="none">
            <line x1="12" y1="1" x2="12" y2="23" stroke="currentColor" stroke-width="2"/>
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="currentColor" stroke-width="2"/>
          </svg>
          <span>R$ ${event.price}</span>
        </div>
        ` : ''}
      </div>

      <button class="popup-cancel-btn" data-subscription-id="${event.subscription_id}">
        Cancelar Inscrição
      </button>
    </div>
  `;

  document.body.appendChild(overlay);

  // Adicionar eventos
  const closeBtn = overlay.querySelector('.popup-close');
  const cancelBtn = overlay.querySelector('.popup-cancel-btn');

  closeBtn.addEventListener('click', () => {
    closeEventPopup(overlay);
  });

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      closeEventPopup(overlay);
    }
  });

  cancelBtn.addEventListener('click', () => {
    cancelSubscription(event.subscription_id, overlay);
  });

  // Mostrar popup com animação
  setTimeout(() => {
    overlay.classList.add('active');
  }, 10);
}

// Função para fechar popup
function closeEventPopup(overlay) {
  overlay.classList.remove('active');
  setTimeout(() => {
    document.body.removeChild(overlay);
  }, 300);
}

// Função para cancelar inscrição
async function cancelSubscription(subscriptionId, overlay) {
  const token = localStorage.getItem('token');
  const cancelBtn = overlay.querySelector('.popup-cancel-btn');

  if (!token) {
    alert('Você precisa estar logado para cancelar a inscrição.');
    return;
  }

  // Desabilitar botão durante o processo
  cancelBtn.disabled = true;
  cancelBtn.textContent = 'Cancelando...';

  try {
    const response = await fetch(`/api/subscriptions/delete/${subscriptionId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      alert('Inscrição cancelada com sucesso!');
      closeEventPopup(overlay);
      // Recarregar a página para atualizar a lista
      window.location.reload();
    } else {
      const error = await response.json();
      alert(error.error || 'Erro ao cancelar inscrição.');
      cancelBtn.disabled = false;
      cancelBtn.textContent = 'Cancelar Inscrição';
    }
  } catch (error) {
    console.error('Erro ao cancelar inscrição:', error);
    alert('Erro ao conectar com o servidor.');
    cancelBtn.disabled = false;
    cancelBtn.textContent = 'Cancelar Inscrição';
  }
}

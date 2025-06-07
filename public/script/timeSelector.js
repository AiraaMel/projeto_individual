document.addEventListener('DOMContentLoaded', () => {
  const datetimeButtons = document.querySelectorAll('.time-slot');
  const selectedDiv = document.getElementById('selectedDatetime');
  const confirmBtn = document.getElementById('confirmBtn');
  let selectedDate = null;
  let selectedDatetimeId = null;

  // Recupera userId e eventId do localStorage
  const userId = localStorage.getItem('userId');
  const eventId = localStorage.getItem('eventId');

  // Verifica se o usuário está logado
  if (!userId) {
    alert('Você precisa estar logado para se inscrever em um evento.');
    confirmBtn.style.display = 'none';
    return;
  }

  datetimeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      datetimeButtons.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      selectedDate = btn.dataset.datetime;
      selectedDatetimeId = btn.dataset.datetimeId;  // pegar o id do datetime_event
      selectedDiv.innerText = `Horário selecionado: ${new Date(selectedDate).toLocaleString('pt-BR')}`;
      confirmBtn.style.display = 'block';
    });
  });


  confirmBtn.addEventListener('click', async () => {
    if (!selectedDate) return;

    const dateTime = new Date(selectedDate);
    const date = dateTime.toISOString().split('T')[0];
    const hour = dateTime.toISOString().split('T')[1].slice(0, 5);

    const token = localStorage.getItem('token'); // Recupera o token JWT armazenado no login

    try {
      const res = await fetch('/api/subscriptions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` // Adiciona o token no cabeçalho
        },
        body: JSON.stringify({
          events_id: eventId,
          datetime_event_id: selectedDatetimeId,
          status: 'pendente'
        })
      });

      if (res.ok) {
        confirmBtn.innerText = 'Inscrição Confirmada!';
        confirmBtn.disabled = true;
      } else {
        const error = await res.json();
        alert(error.error || 'Erro ao confirmar inscrição.');
      }

    } catch (error) {
      console.error(error);
      alert('Erro na requisição.');
    }
  });
});
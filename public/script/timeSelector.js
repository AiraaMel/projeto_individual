document.addEventListener('DOMContentLoaded', () => {
  const datetimeButtons = document.querySelectorAll('.datetime-option');
  const selectedDiv = document.getElementById('selectedDatetime');
  const confirmBtn = document.getElementById('confirmBtn');
  let selectedDate = null;

  datetimeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      datetimeButtons.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      selectedDate = btn.dataset.datetime;
      selectedDiv.innerText = `Horário selecionado: ${new Date(selectedDate).toLocaleString('pt-BR')}`;
      confirmBtn.style.display = 'inline-block';
    });
  });

  confirmBtn.addEventListener('click', async () => {
    if (!selectedDate) return;

    const eventId = document.body.dataset.eventId; // vamos pegar o id do evento do atributo data-event-id no body
    const userId = 1; // substitua pelo ID real do usuário

    const dateTime = new Date(selectedDate);
    const date = dateTime.toISOString().split('T')[0];
    const hour = dateTime.toISOString().split('T')[1].slice(0, 5);

    try {
      const res = await fetch('/subscriptions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          users_id: userId,
          events_id: eventId,
          date: date,
          hour: hour,
          status: 'pendente'
        })
      });

      if (res.ok) {
        confirmBtn.innerText = 'Inscrição Confirmada!';
        confirmBtn.disabled = true;
      } else {
        alert('Erro ao confirmar inscrição.');
      }

    } catch (error) {
      console.error(error);
      alert('Erro na requisição.');
    }
  });
});

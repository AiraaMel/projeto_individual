document.addEventListener('DOMContentLoaded', () => {
  const datetimeButtons = document.querySelectorAll('.time-slot');
  const selectedDiv = document.getElementById('selectedDatetime');
  const confirmBtn = document.getElementById('confirmBtn');
  let selectedDate = null;
  let selectedDatetimeId = null;

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

    try {
      const res = await fetch('/api/subscriptions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          users_id: userId,
          events_id: eventId,
          datetime_event_id: selectedDatetimeId,  // envia o id do datetime
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

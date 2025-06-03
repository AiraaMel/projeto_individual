async function createUser() {
  const messageDiv = document.getElementById('createAccountMessage');

  try {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Validação simples
    if (!name || !email || !password) {
      messageDiv.innerText = 'Por favor, preencha todos os campos.';
      messageDiv.style.color = 'red';
      return;
    }

    const response = await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password })
    });

    const result = await response.json();

    if (response.ok) {
      messageDiv.innerText = 'Conta criada com sucesso! Você será redirecionado...';
      messageDiv.style.color = 'green';

      setTimeout(() => {
        window.location.href = '/login'; // Redireciona para login após sucesso
      }, 2000);
    } else {
      messageDiv.innerText = result.error || 'Erro ao criar conta.';
      messageDiv.style.color = 'red';
    }

  } catch (error) {
    console.error('Erro ao criar conta:', error);
    messageDiv.innerText = 'Erro ao conectar com o servidor.';
    messageDiv.style.color = 'red';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('createAccountForm');
  form.addEventListener('submit', e => {
    e.preventDefault();
    createUser();
  });
});

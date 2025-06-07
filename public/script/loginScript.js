// Função para realizar login do usuário
async function loginUser() {
  const messageDiv = document.getElementById('loginMessage');

  try {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    const response = await fetch('/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const result = await response.json();

    if (response.ok) {
      // Armazena o token JWT no localStorage
      localStorage.setItem('token', result.token);

      // Armazena dados do usuário logado
      localStorage.setItem('user', JSON.stringify(result.user));
      localStorage.setItem('userId', result.user.id); // <- ESSENCIAL

      // Redireciona para a página inicial
      window.location.href = '/home';

    } else {
      messageDiv.innerText = result.error || 'Falha no login.';
      messageDiv.style.color = 'red';
    }
  } catch (error) {
    console.error('Erro ao realizar login:', error);
    messageDiv.innerText = 'Erro ao conectar com o servidor.';
    messageDiv.style.color = 'red';
  }
}

// Chama a função ao submeter o formulário
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    loginUser();
  });
});

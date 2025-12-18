const form = document.getElementById('form-contato');
const formStatus = document.getElementById('form-status');
const btnVoltar = document.getElementById('btn-voltar');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      formStatus.textContent = "Mensagem enviada com sucesso 💖";
      form.reset();

      // mostrar botão de voltar
      btnVoltar.style.display = "block";
    } else {
      formStatus.textContent = "Ops… algo deu errado 😢";
    }
  } catch {
    formStatus.textContent = "Erro de conexão 😕";
  }
});

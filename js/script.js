document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita o envio padrão do formulário
  
    // Obtém os valores dos campos
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Valida os campos (opcional - pode ser expandido)
    if (!name || !email || !message) {
      alert('Por favor, preencha todos os campos!');
      return;
    }
  
    // Exibe uma mensagem de sucesso
    alert(`Obrigado pelo contato, ${name}! Entraremos em contato em breve.`);
    
    // Limpa o formulário
    document.getElementById('contactForm').reset();
  });
  
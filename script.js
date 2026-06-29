// Aguarda o carregamento do DOM para rodar os scripts com segurança
document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. FUNCIONALIDADE: ALTERNÂNCIA DE TEMA (CLARO/ESCURO) ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const bodyElement = document.body;

    themeToggleBtn.addEventListener('click', () => {
        if (bodyElement.classList.contains('theme-light')) {
            bodyElement.classList.remove('theme-light');
            bodyElement.classList.add('theme-dark');
        } else {
            bodyElement.classList.remove('theme-dark');
            bodyElement.classList.add('theme-light');
        }
    });

    // --- 2. FUNCIONALIDADE: VALIDAÇÃO DO FORMULÁRIO DE CONTATO ---
    const form = document.getElementById('form-contato');
    const feedbackBox = document.getElementById('mensagem-sucesso');

    form.addEventListener('submit', (event) => {
        // Impede o comportamento padrão de recarregar a página no envio do form
        event.preventDefault(); 

        // Captura os valores dos inputs removendo espaços extras
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();

        // Limpa estados anteriores da caixa de feedback
        feedbackBox.className = 'hidden';
        feedbackBox.textContent = '';

        // Validação básica de campos vazios
        if (nome === '' || email === '' || mensagem === '') {
            exibirFeedback('Por favor, preencha todos os campos do formulário.', 'erro');
            return;
        }

        // Validação de formato de E-mail usando Expressão Regular (Regex)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            exibirFeedback('Por favor, insira um e-mail com formato válido (exemplo: usuario@dominio.com).', 'erro');
            return;
        }

        // Se passar por todas as validações, simula o envio com sucesso
        exibirFeedback('Mensagem enviada com sucesso! Entraremos em contato em breve.', 'sucesso');
        
        // Limpa os campos do formulário conforme exigido no roteiro
        form.reset();
    });

    // Função auxiliar para exibir as caixas de alerta/feedback na tela
    function exibirFeedback(texto, tipo) {
        feedbackBox.textContent = texto;
        feedbackBox.classList.remove('hidden');
        feedbackBox.classList.add(tipo);
    }
});

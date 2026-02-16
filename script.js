// ============================================
// MENU MOBILE - Abre e fecha o menu
// ============================================
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Fecha o menu quando clicar em um link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// ============================================
// SCROLL SUAVE - Rola suavemente até as seções
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // 80px para compensar o menu fixo
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// NAVBAR - Muda a aparência ao rolar a página
// ============================================
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Adiciona sombra mais forte quando rolar
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 5px 30px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// ============================================
// ANIMAÇÃO AO SCROLL - Elementos aparecem ao rolar
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observa todos os cards e elementos que devem aparecer
document.querySelectorAll('.service-card, .portfolio-item, .stat').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// ============================================
// FORMULÁRIO DE CONTATO - Envia o formulário
// ============================================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Pega os valores do formulário
    const formData = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        telefone: document.getElementById('telefone').value,
        servico: document.getElementById('servico').value,
        mensagem: document.getElementById('mensagem').value
    };
    
    // Aqui você pode adicionar o código para enviar o formulário
    // Por exemplo, usando fetch() para enviar para um servidor Node.js
    // ou integrar com serviços como EmailJS, Formspree, etc.
    
    console.log('Formulário enviado:', formData);
    
    // Mostra mensagem de sucesso
    alert('Obrigado pelo contato! Entraremos em contato em breve.');
    
    // Limpa o formulário
    contactForm.reset();
    
    /* 
    EXEMPLO DE INTEGRAÇÃO COM BACKEND NODE.JS:
    
    fetch('http://seu-servidor.com/api/contato', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        alert('Mensagem enviada com sucesso!');
        contactForm.reset();
    })
    .catch(error => {
        alert('Erro ao enviar mensagem. Tente novamente.');
        console.error('Erro:', error);
    });
    */
});

// ============================================
// CONTADOR DE NÚMEROS - Anima os números das estatísticas
// ============================================
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16); // 60 FPS
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + (element.dataset.suffix || '');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + (element.dataset.suffix || '');
        }
    }, 16);
}

// Observa quando as estatísticas aparecem na tela
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const number = entry.target;
            const targetValue = parseInt(number.textContent);
            
            // Salva o sufixo (+ ou %) se existir
            if (number.textContent.includes('+')) {
                number.dataset.suffix = '+';
            } else if (number.textContent.includes('%')) {
                number.dataset.suffix = '%';
            }
            
            animateCounter(number, targetValue);
            statsObserver.unobserve(number);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-number').forEach(number => {
    statsObserver.observe(number);
});

// ============================================
// PORTFÓLIO - Efeito de hover nas imagens
// ============================================
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.querySelector('.portfolio-image').style.transform = 'scale(1.1)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.querySelector('.portfolio-image').style.transform = 'scale(1)';
    });
});

// ============================================
// PRELOAD - Animação de entrada da página
// ============================================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ============================================
// SCROLL TO TOP - Botão para voltar ao topo
// ============================================
// Cria botão de voltar ao topo (opcional)
const scrollTopButton = document.createElement('button');
scrollTopButton.innerHTML = '↑';
scrollTopButton.className = 'scroll-to-top';
scrollTopButton.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: var(--primary-green);
    color: white;
    border: none;
    border-radius: 50%;
    font-size: 24px;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 999;
    box-shadow: 0 5px 20px rgba(26, 95, 63, 0.3);
`;

document.body.appendChild(scrollTopButton);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopButton.style.opacity = '1';
        scrollTopButton.style.visibility = 'visible';
    } else {
        scrollTopButton.style.opacity = '0';
        scrollTopButton.style.visibility = 'hidden';
    }
});

scrollTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollTopButton.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.1)';
    this.style.background = 'var(--light-green)';
});

scrollTopButton.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
    this.style.background = 'var(--primary-green)';
});

// ============================================
// CONSOLE MESSAGE - Mensagem para desenvolvedores
// ============================================
console.log('%c🌿 LAAQ Storymaker', 'color: #1a5f3f; font-size: 24px; font-weight: bold;');
console.log('%cTransformando momentos em histórias inesquecíveis', 'color: #2d8659; font-size: 14px;');
console.log('%cSite desenvolvido com ❤️', 'color: #6c757d; font-size: 12px;');
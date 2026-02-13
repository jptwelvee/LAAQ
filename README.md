# 🌿 LAAQ Storymaker - Site Oficial

Site profissional para apresentação de serviços de fotografia e filmagem de eventos especiais.

## 📁 Estrutura do Projeto

```
laaq-storymaker/
│
├── index.html      # Página principal (estrutura do site)
├── styles.css      # Estilos e design (cores, layout, animações)
├── script.js       # Interações e funcionalidades
└── README.md       # Este arquivo (instruções)
```

## 🚀 Como Usar

### Opção 1: Abrir Localmente (Simples)
1. Baixe todos os arquivos para uma pasta no seu computador
2. Clique duas vezes no arquivo `index.html`
3. O site abrirá no seu navegador

### Opção 2: Hospedar na Internet (Grátis)

**Netlify (Recomendado para iniciantes):**
1. Acesse: https://www.netlify.com
2. Faça login com GitHub ou e-mail
3. Arraste a pasta do projeto para o Netlify
4. Pronto! Seu site estará online em segundos

**Vercel:**
1. Acesse: https://vercel.com
2. Faça login
3. Importe o projeto
4. Deploy automático

**GitHub Pages (Grátis):**
1. Crie uma conta no GitHub
2. Crie um repositório novo
3. Faça upload dos arquivos
4. Ative GitHub Pages nas configurações

## 🎨 Como Personalizar

### Mudar Cores
Abra o arquivo `styles.css` e procure por `:root` no início:

```css
:root {
    --primary-green: #1a5f3f;    /* Verde principal */
    --light-green: #2d8659;      /* Verde claro */
    --dark-green: #0f3d28;       /* Verde escuro */
    --accent-green: #3da871;     /* Verde destaque */
}
```

Mude os códigos de cor (exemplo: #1a5f3f) para as cores que você quiser.
Use este site para escolher cores: https://www.google.com/search?q=color+picker

### Trocar Textos
Abra `index.html` e procure pelos textos que quer mudar:

- **Título principal**: procure por "Momentos que se tornam histórias"
- **Subtítulo**: procure por "Capturamos a essência"
- **Serviços**: procure por "Casamentos", "Festas de 15 Anos", etc.
- **Contato**: procure por "contato@laaqstorymaker.com.br" e mude para seu e-mail real

### Adicionar Fotos Reais
Por enquanto, o site usa placeholders (espaços reservados para fotos).

**Para adicionar suas fotos:**

1. Crie uma pasta chamada `images` na mesma pasta dos arquivos
2. Coloque suas fotos lá (exemplo: `casamento1.jpg`, `evento1.jpg`)
3. No arquivo `index.html`, procure por `<div class="placeholder-image">`
4. Substitua por:
```html
<img src="images/casamento1.jpg" alt="Descrição da foto">
```

### Mudar Informações de Contato

No arquivo `index.html`, procure pela seção de contato e mude:

```html
<p>contato@laaqstorymaker.com.br</p>  <!-- Seu e-mail -->
<p>(27) 99999-9999</p>                 <!-- Seu telefone -->
<p>Cariacica, Espírito Santo</p>      <!-- Sua cidade -->
```

### Adicionar Links de Redes Sociais

Procure por `<div class="social-links">` e mude os links:

```html
<a href="https://instagram.com/seuperfil">📷 Instagram</a>
<a href="https://facebook.com/suapagina">👍 Facebook</a>
<a href="https://youtube.com/seucanal">📹 YouTube</a>
```

## 📧 Como Fazer o Formulário Funcionar

O formulário atualmente apenas mostra uma mensagem quando enviado. Para ele realmente enviar e-mails:

### Opção 1: FormSpree (Mais Fácil - Grátis)
1. Acesse: https://formspree.io
2. Crie uma conta grátis
3. Crie um novo formulário
4. Copie o código que eles fornecem
5. No arquivo `script.js`, procure por `// EXEMPLO DE INTEGRAÇÃO`
6. Substitua pelo código do FormSpree

### Opção 2: EmailJS (Grátis)
1. Acesse: https://www.emailjs.com
2. Crie uma conta
3. Configure seu serviço de e-mail
4. Use o código deles no `script.js`

### Opção 3: Backend Node.js (Avançado)
Se você quiser aprender Node.js, posso criar um servidor backend para você depois.

## 🔧 Manutenção Comum

### Adicionar Novo Serviço
1. Abra `index.html`
2. Procure por `<div class="services-grid">`
3. Copie um `<div class="service-card">` completo
4. Cole abaixo e mude o emoji, título e descrição

### Adicionar Novo Projeto no Portfólio
1. Abra `index.html`
2. Procure por `<div class="portfolio-grid">`
3. Copie um `<div class="portfolio-item">` completo
4. Cole abaixo e adicione as informações do novo projeto

### Mudar Fontes (Letras)
O site usa:
- **Playfair Display** - Para títulos elegantes
- **Lato** - Para textos normais

Para mudar, acesse: https://fonts.google.com e escolha outras fontes.

## 📱 Responsivo

O site já está pronto para funcionar em:
- ✅ Celulares
- ✅ Tablets
- ✅ Computadores
- ✅ Telas grandes

## 🎯 Próximos Passos Sugeridos

1. **Adicionar suas fotos reais** no portfólio
2. **Configurar o formulário** para receber mensagens de verdade
3. **Conectar redes sociais** com seus links reais
4. **Adicionar Google Analytics** para ver quantas visitas recebe
5. **Criar logo profissional** e adicionar no lugar do texto "LAAQ Storymaker"
6. **Adicionar mais páginas** (Blog, Preços, Galeria completa)

## 💡 Dicas de SEO (Aparecer no Google)

1. Mude o `<title>` no `index.html` para incluir sua cidade
2. Adicione descrições nas imagens (atributo `alt`)
3. Registre seu site no Google Search Console
4. Crie uma conta no Google Meu Negócio
5. Peça para clientes deixarem avaliações

## 🆘 Precisa de Ajuda?

### Erros Comuns:

**Site não abre:**
- Verifique se todos os arquivos estão na mesma pasta
- Certifique-se de que os nomes dos arquivos estão corretos

**Cores não mudaram:**
- Limpe o cache do navegador (Ctrl + F5)
- Verifique se salvou o arquivo `styles.css`

**Menu mobile não funciona:**
- Verifique se o arquivo `script.js` está na mesma pasta
- Abra o Console do navegador (F12) para ver erros

### Recursos para Aprender:

- **HTML/CSS básico**: https://www.w3schools.com/html/
- **JavaScript básico**: https://www.w3schools.com/js/
- **YouTube**: Procure por "HTML CSS tutorial português"

## 📊 Tecnologias Usadas

- **HTML5** - Estrutura do site
- **CSS3** - Design e animações
- **JavaScript (Vanilla)** - Interatividade (sem bibliotecas complexas)
- **Google Fonts** - Fontes elegantes

## ✨ Características do Site

✅ Design moderno e profissional
✅ Totalmente responsivo (funciona em todos os dispositivos)
✅ Animações suaves e elegantes
✅ Menu mobile funcional
✅ Formulário de contato
✅ Seção de portfólio
✅ Estatísticas animadas
✅ Botão "voltar ao topo"
✅ Cores da marca (verde)
✅ Fácil de manter e personalizar
✅ Código bem comentado
✅ Sem dependências externas (exceto fontes)

## 📝 Licença

Este código é seu! Use, modifique e personalize como quiser.

---

**Desenvolvido para LAAQ Storymaker**
Transformando momentos em histórias inesquecíveis 🌿

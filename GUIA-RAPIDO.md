# 🎨 GUIA RÁPIDO DE PERSONALIZAÇÃO

## 📝 Mudanças Mais Comuns

### 1. TROCAR E-MAIL E TELEFONE (5 minutos)

**Arquivo:** `index.html`

**Procure por:**
```html
<p>contato@laaqstorymaker.com.br</p>
<p>(27) 99999-9999</p>
```

**Mude para seus dados:**
```html
<p>seuemail@gmail.com</p>
<p>(27) 98765-4321</p>
```

---

### 2. MUDAR COR VERDE (3 minutos)

**Arquivo:** `styles.css` (primeiras linhas)

**Procure por:**
```css
:root {
    --primary-green: #1a5f3f;
    --light-green: #2d8659;
    --dark-green: #0f3d28;
}
```

**Exemplo para mudar para AZUL:**
```css
:root {
    --primary-green: #1a5f9f;
    --light-green: #2d86b9;
    --dark-green: #0f3d68;
}
```

**Exemplo para mudar para ROXO:**
```css
:root {
    --primary-green: #6a1a9f;
    --light-green: #862db9;
    --dark-green: #3d0f68;
}
```

💡 **Dica:** Use https://coolors.co para gerar paletas de cores

---

### 3. ADICIONAR SUAS FOTOS (10 minutos)

**Passo 1:** Crie uma pasta `images` na mesma pasta do site

**Passo 2:** Coloque suas fotos lá (use nomes simples: `foto1.jpg`, `casamento.jpg`)

**Passo 3:** No `index.html`, procure por:
```html
<div class="placeholder-image">Casamento Ana & Pedro</div>
```

**Passo 4:** Substitua por:
```html
<img src="images/casamento.jpg" alt="Casamento Ana & Pedro">
```

**IMPORTANTE:** 
- Use fotos otimizadas (máximo 500KB cada)
- Formatos: .jpg, .png, .webp
- Redimensione para máximo 1200px de largura

💡 **Site para otimizar fotos:** https://tinypng.com

---

### 4. MUDAR TEXTOS DO SITE (5 minutos)

**Arquivo:** `index.html`

**Título Principal:**
```html
<h1 class="hero-title">Momentos que se tornam histórias</h1>
```
Mude "Momentos que se tornam histórias" para o que você quiser.

**Subtítulo:**
```html
<p class="hero-subtitle">Capturamos a essência dos seus eventos mais especiais</p>
```

---

### 5. ADICIONAR LINKS DE REDES SOCIAIS (2 minutos)

**Arquivo:** `index.html`

**Procure por:**
```html
<a href="#">📷 Instagram</a>
```

**Mude para:**
```html
<a href="https://instagram.com/laaqstorymaker">📷 Instagram</a>
```

Faça o mesmo para Facebook e YouTube.

---

### 6. FAZER FORMULÁRIO ENVIAR E-MAILS DE VERDADE

**Opção Mais Fácil - FormSpree (GRÁTIS):**

1. Acesse: https://formspree.io
2. Clique em "Get Started"
3. Crie uma conta grátis
4. Clique em "+ New Form"
5. Escolha um nome (ex: "Contato LAAQ")
6. Copie o código que aparecer
7. No seu arquivo `index.html`, procure por `<form class="contact-form"`
8. Adicione o código do FormSpree

**O código ficará assim:**
```html
<form class="contact-form" id="contactForm" action="https://formspree.io/f/SEU-CODIGO-AQUI" method="POST">
```

Agora quando alguém preencher o formulário, você receberá um e-mail!

---

### 7. ADICIONAR NOVO SERVIÇO (5 minutos)

**Arquivo:** `index.html`

**Procure por:** `<div class="services-grid">`

**Copie este bloco:**
```html
<div class="service-card">
    <div class="service-icon">💍</div>
    <h3>Casamentos</h3>
    <p>Do ensaio pré-wedding até o grande dia...</p>
</div>
```

**Cole abaixo e personalize:**
```html
<div class="service-card">
    <div class="service-icon">🎥</div>
    <h3>Vídeos Profissionais</h3>
    <p>Criamos vídeos emocionantes dos seus eventos</p>
</div>
```

💡 **Emojis:** Acesse https://emojipedia.org para copiar emojis

---

### 8. PUBLICAR SEU SITE NA INTERNET (10 minutos)

**Usando Netlify (GRÁTIS e FÁCIL):**

1. Acesse: https://app.netlify.com
2. Faça login (pode usar conta do Google)
3. Clique em "Sites" → "Add new site" → "Deploy manually"
4. Arraste a PASTA do seu projeto (com todos os arquivos)
5. Pronto! Seu site está online

**Você ganhará um link tipo:** `seu-site.netlify.app`

**Para ter domínio próprio (laaqstorymaker.com.br):**
- Compre um domínio em: registro.br (R$ 40/ano)
- Conecte no Netlify (tem tutorial lá)

---

## 🆘 RESOLUÇÃO DE PROBLEMAS

### Site aparece sem cores/formatação:
- Verifique se `styles.css` está na mesma pasta que `index.html`
- Veja se o nome do arquivo está exatamente: `styles.css` (minúsculo)
- Aperte Ctrl + F5 no navegador para limpar cache

### Botões não funcionam:
- Verifique se `script.js` está na mesma pasta
- Abra o Console (F12 no navegador) e veja se tem erros

### Fotos não aparecem:
- Veja se a pasta `images` está correta
- Confira se o nome do arquivo está certo (maiúsculas/minúsculas importam)
- Exemplo: se salvou como `Foto1.JPG`, use `<img src="images/Foto1.JPG">`

---

## 📞 PRÓXIMOS PASSOS

1. ✅ Mude e-mail e telefone
2. ✅ Adicione suas fotos
3. ✅ Configure FormSpree
4. ✅ Conecte redes sociais  
5. ✅ Publique no Netlify
6. ✅ Compartilhe o link!

---

**IMPORTANTE:** Sempre faça backup dos seus arquivos antes de modificar!

Copie a pasta do projeto para um lugar seguro (Pen drive, Google Drive, etc.)

---

💚 **Boa sorte com seu site da LAAQ Storymaker!**

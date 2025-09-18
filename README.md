# 🧪 Automação de Testes - Desafio Auvo

Automação de testes web criada com Playwright + JavaScript, utilizando a arquitetura Page Object Model (POM), para validar o fluxo de cadastro e pesquisa de produtos no e-commerce fictício SauceDemo.

## ✅ Funcionalidades testadas

### Login:
- Testes com todos os usuários válidos do sistema (`standard_user`, `locked_out_user`, `problem_user`, `performance_glitch_user`, `error_user`, `visual_user`).

### Navegação e Pesquisa:
- Navegação para a página de inventário.
- Busca de produtos pelo nome.

### Validação de Produto:
- Verificação de título, preço e descrição dos produtos.

### Adição ao Carrinho e Checkout:
- Adição de produtos ao carrinho.
- Acesso ao carrinho e navegação até checkout.

### Finalização de Pedido (Fluxo E2E):
- Preenchimento do formulário de checkout.
- Finalização completa da compra.
- Validação da mensagem de sucesso **"Thank you for your order!"**.

---

## 🧱 Tecnologias utilizadas
- Playwright
- JavaScript (Node.js)
- Jest (como test runner)
- Page Object Model (POM)

---

## 📁 Estrutura do Projeto
```
e2e-tests/
├── pages/
│   ├── login.page.js
│   ├── products.page.js
│   ├── product-detail.page.js
│   ├── cart.page.js
│   └── checkout.page.js
├── tests/
│   ├── login.test.js
│   ├── search.test.js
│   ├── product-validation.test.js
│   ├── checkout.test.js
│   └── checkout-flow.test.js   <-- Novo fluxo E2E (checkout completo)
├── jest.config.js
├── package.json
└── README.md
```

---

## ⚙️ Como rodar o projeto

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio
```

2. **Instale as dependências**
```bash
npm install
```

3. **Instale os navegadores do Playwright**
```bash
npx playwright install
```

4. **Execute os testes**

👉 Para rodar todos os testes:
```bash
npx jest
```

👉 Para rodar o fluxo E2E de Checkout:
```bash
npx jest tests/checkout-flow.test.js
```

---

## 👤 Usuários e credenciais

**Usuários aceitos:**
- `standard_user`
- `locked_out_user`
- `problem_user`
- `performance_glitch_user`
- `error_user`
- `visual_user`

**Senha para todos:**
```
xxxxxxxxxxxx
```

---

## 🧠 Decisões e observações
- A arquitetura **POM** foi aplicada para garantir modularidade e reutilização de código.
- Os testes foram escritos com **Jest**, mas podem ser facilmente migrados para o test runner nativo do Playwright.
- Usuários como `locked_out_user` e `error_user` não têm permissão de navegação — testes foram ajustados para refletir esse comportamento esperado.

---

## 📌 Requisitos
- Node.js >= 16
- npm

---

const { test, expect } = require('@jest/globals');
const { chromium } = require('playwright');
const LoginPage = require('../pages/login.page');

// Lista de usuários e senha
const users = [
  { username: 'standard_user', password: 'secret_sauce', expectedUrl: 'https://www.saucedemo.com/inventory.html' },
  { username: 'locked_out_user', password: 'secret_sauce', expectedUrl: 'https://www.saucedemo.com/lock.html' }, // Página de erro
  { username: 'problem_user', password: 'secret_sauce', expectedUrl: 'https://www.saucedemo.com/inventory.html' },
  { username: 'performance_glitch_user', password: 'secret_sauce', expectedUrl: 'https://www.saucedemo.com/inventory.html' },
  { username: 'error_user', password: 'secret_sauce', expectedUrl: 'https://www.saucedemo.com/error.html' }, // Página de erro
  { username: 'visual_user', password: 'secret_sauce', expectedUrl: 'https://www.saucedemo.com/inventory.html' },
];

test.each(users)(
  'Login para o usuário %s',
  async ({ username, password, expectedUrl }) => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    const loginPage = new LoginPage(page);

    // Navega até a página de login
    await page.goto('https://www.saucedemo.com/');
    
    // Faz login com o usuário e senha fornecidos
    await loginPage.login(username, password);

    // Verifica se a URL após o login está correta
    const url = page.url();
    expect(url).toBe(expectedUrl);

    await browser.close();
  }
);

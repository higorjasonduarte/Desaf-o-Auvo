// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests', // Onde estão os testes
  timeout: 30 * 1000, // Tempo máximo por teste (30s)
  expect: {
    timeout: 5000 // Tempo para comandos como expect().toHaveText()
  },
  fullyParallel: true, // Roda os testes em paralelo
  retries: 0, // Quantas vezes tentar se falhar
  reporter: 'html', // Relatório interativo
  use: {
    headless: true, // Modo sem interface gráfica
    viewport: { width: 1280, height: 720 },
    actionTimeout: 0, // Sem timeout por ação individual
    screenshot: 'only-on-failure', // Screenshot apenas se falhar
    video: 'retain-on-failure', // Gravação de vídeo em falhas
    baseURL: 'https://www.saucedemo.com', // URL base
  },
  // Browsers a usar nos testes (pode usar só um, se quiser)
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' }
    },
    {
      name: 'firefox',
      use: { browserName: 'firefox' }
    },
    {
      name: 'webkit',
      use: { browserName: 'webkit' }
    },
  ],
});

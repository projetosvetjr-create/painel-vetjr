# Painel VetJr no GitHub (app instalável)

## 1. Colocar no GitHub
1. Em github.com, clique em **New repository**, nome `painel-vetjr`, deixe **Public** e crie.
2. Em **Add file > Upload files**, arraste **todos** os arquivos desta pasta (index.html, config.js, manifest.webmanifest, sw.js e os 4 ícones .png) e clique em **Commit changes**.
3. Vá em **Settings > Pages**. Em *Branch* escolha `main` e a pasta `/ (root)`, e salve.
4. Em 1–2 minutos o endereço aparece no topo da mesma tela: `https://SEU-USUARIO.github.io/painel-vetjr/`.

## 2. Atualizar o servidor (Apps Script) — sem trocar o link
1. No Apps Script, cole o novo `Code.gs` (ele ganhou a função `doPost`).
2. **Implantar > Gerenciar implantações > lápis > Versão: Nova versão > Implantar.** O link /exec continua o mesmo e os dados ficam como estão.
3. Confirme que "Quem pode acessar" está como **Qualquer pessoa**.

## 3. Primeira abertura
Abra o endereço do GitHub, cole o link /exec do painel (só uma vez, fica guardado no aparelho) e digite o código de acesso.
Se preferir, abra `config.js` no GitHub, edite e coloque o link entre as aspas em `window.VETJR_API = '...'`: aí ninguém precisa colar nada.

## 4. Instalar no celular
- **Android (Chrome):** menu ⋮ > *Instalar app* (ou *Adicionar à tela inicial*).
- **iPhone (Safari):** botão compartilhar > *Adicionar à Tela de Início*.

## 5. Atualizar o painel depois
Para mudar a tela, substitua o `index.html` no repositório (Add file > Upload files, mesmo nome). O app pega a versão nova na próxima abertura.

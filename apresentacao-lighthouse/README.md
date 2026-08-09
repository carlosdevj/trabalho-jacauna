# Apresentação — Auditoria de Acessibilidade Web

Arquivos prontos para publicação estática no GitHub/Netlify.

## Antes de publicar

1. Abra `index.html`.
2. Procure por `REPORTS_URL` no final do arquivo.
3. Troque `COLE_AQUI_O_LINK_PUBLICO_DA_PASTA` pelo link público da pasta/ZIP com os relatórios do Lighthouse.
4. Confirme se os nomes do trio estão corretos na seção `#capa`.

## Publicação no Netlify

Você pode arrastar a pasta inteira para o deploy manual do Netlify ou conectar um repositório GitHub contendo `index.html` na raiz.

## Recursos de acessibilidade implementados

- HTML semântico (`header`, `nav`, `main`, `section`, `article`, `aside`, `footer`).
- Link para pular ao conteúdo.
- Foco visível e navegação por teclado.
- `alt` e `aria-label` em todas as imagens.
- Controle de tamanho da fonte.
- Tema claro/escuro.
- Alto contraste.
- Preferências persistidas no navegador.
- `aria-live` na dinâmica interativa.
- Suporte a `prefers-reduced-motion`.
- Layout responsivo.

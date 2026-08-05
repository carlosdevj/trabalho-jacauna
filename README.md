# Tipos de Interfaces de Usuário

Site estático acadêmico preparado para publicação no GitHub Pages.

## Antes da entrega

Edite o arquivo `index.html` e substitua:

1. `[Substituir pelo nome do professor]`;
2. `[Integrante 2]`;
3. `[Integrante 3]`;
4. a imagem `assets/foto-trio.svg` pela foto real do trio;
5. o texto `alt` da foto por uma descrição real dos integrantes.

Uma opção simples é salvar a fotografia como `assets/foto-trio.webp` e alterar no HTML:

```html
<img src="assets/foto-trio.webp"
     alt="Fotografia dos três integrantes do trabalho, da esquerda para a direita: Nome 1, Nome 2 e Nome 3.">
```

Comprima a imagem para evitar lentidão. Para uma foto horizontal, use aproximadamente 1600 × 900 pixels e, preferencialmente, formato WebP.

## Estrutura

```text
.
├── index.html
├── styles.css
├── script.js
├── README.md
└── assets/
    ├── ifrr-logo.svg
    ├── foto-trio.svg
    ├── gui.svg
    ├── cli.svg
    ├── menu.svg
    ├── touch.svg
    ├── vui.svg
    ├── formulario.svg
    ├── nlui.svg
    └── requisitos.svg
```

## Publicação no GitHub Pages

1. Crie um repositório público no GitHub.
2. Envie todos os arquivos mantendo a estrutura de pastas.
3. Abra **Settings → Pages**.
4. Em **Build and deployment**, selecione **Deploy from a branch**.
5. Escolha a branch `main` e a pasta `/ (root)`.
6. Salve e aguarde a URL no formato:

```text
https://seu-usuario.github.io/nome-do-repositorio/
```

## Colaboração exigida

Cada integrante deve:

- criar uma branch própria;
- fazer commits identificáveis;
- abrir ao menos um pull request;
- revisar ou aprovar mudanças de outro integrante.

Sugestão de divisão:

- `feature/conteudo-gui-cli-menu`
- `feature/conteudo-touch-vui-formulario`
- `feature/conteudo-nlui-requisitos`
- `feature/revisao-acessibilidade`

## Apresentação

O botão **Apresentação** ativa o modo de tela cheia.

Atalhos:

- `←` e `Page Up`: seção anterior;
- `→` e `Page Down`: próxima seção;
- `Home`: primeira seção;
- `End`: última seção;
- `Esc`: sair da apresentação.

## Acessibilidade aplicada

- HTML5 semântico;
- link para pular ao conteúdo;
- fonte-base de 24 px;
- contraste forte;
- foco visível;
- navegação por teclado;
- textos alternativos;
- créditos nas figuras;
- preferência por movimento reduzido;
- modo de alto contraste;
- layout responsivo.

## Testes recomendados

Antes da entrega, execute:

- W3C HTML Validator;
- WAVE;
- Lighthouse, na categoria Accessibility;
- navegação completa somente com `Tab`, `Shift + Tab` e `Enter`;
- teste em celular e computador.

> Validação automática não substitui teste manual nem avaliação com usuários.

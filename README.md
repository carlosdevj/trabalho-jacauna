# Tipos de Interfaces de Usuario

Site estatico academico preparado para publicacao no GitHub Pages.

## Antes da entrega

Antes da entrega, substitua:

1. a imagem `assets/foto-trio.svg` pela foto real do trio;
2. o texto `alt` da foto por uma descricao real dos integrantes.

Uma opcao simples e salvar a fotografia como `assets/foto-trio.webp` e alterar no HTML:

```html
<img src="assets/foto-trio.webp"
     alt="Fotografia dos tres integrantes do trabalho, da esquerda para a direita: Eric Freitas Sampaio, Carlos Gabriel de Morais Leal e Larissa dos Passos Costa Ferreira.">
```

Comprima a imagem para evitar lentidao. Para uma foto horizontal, use aproximadamente 1600 x 900 pixels e, preferencialmente, formato WebP.

## Estrutura

```text
.
|-- index.html
|-- styles.css
|-- script.js
|-- README.md
|-- validation-report.json
`-- assets/
    |-- ifrr-logo.svg
    |-- foto-trio.svg
    |-- gui.svg
    |-- cli.svg
    |-- menu.svg
    |-- touch.svg
    |-- vui.svg
    |-- formulario.svg
    |-- nlui.svg
    `-- requisitos.svg
```

## Publicacao no GitHub Pages

1. Crie um repositorio publico no GitHub.
2. Envie todos os arquivos mantendo a estrutura de pastas.
3. Abra **Settings -> Pages**.
4. Em **Build and deployment**, selecione **Deploy from a branch**.
5. Escolha a branch `main` e a pasta `/ (root)`.
6. Salve e aguarde a URL no formato:

```text
https://seu-usuario.github.io/nome-do-repositorio/
```

## Colaboracao exigida

Cada integrante deve:

- criar uma branch propria;
- fazer commits identificaveis;
- abrir ao menos um pull request;
- revisar ou aprovar mudancas de outro integrante.

Sugestao de divisao:

- `feature/conteudo-gui-cli-menu`
- `feature/conteudo-touch-vui-formulario`
- `feature/conteudo-nlui-requisitos`
- `feature/revisao-acessibilidade`

## Apresentacao

O botao **Apresentacao** ativa o modo de tela cheia.

Atalhos:

- seta para esquerda e `Page Up`: secao anterior;
- seta para direita e `Page Down`: proxima secao;
- `Home`: primeira secao;
- `End`: ultima secao;
- `Esc`: sair da apresentacao.

## Acessibilidade aplicada

- HTML5 semantico;
- link para pular ao conteudo;
- contraste forte;
- foco visivel;
- navegacao por teclado;
- textos alternativos;
- creditos nas figuras;
- preferencia por movimento reduzido;
- modo de alto contraste;
- layout responsivo;
- barra de acessibilidade recolhivel.

## Testes recomendados

Antes da entrega, execute:

- W3C HTML Validator;
- WAVE;
- Lighthouse, na categoria Accessibility;
- navegacao completa somente com `Tab`, `Shift + Tab` e `Enter`;
- teste em celular e computador.

Validacao automatica nao substitui teste manual nem avaliacao com usuarios.

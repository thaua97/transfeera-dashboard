# Tech Challenge Transfeera

O objetivo do desafio é transformar o design em um sistema funcional na web, integrando-o com a biblioteca JSON Server junto com o JSON fornecido, para simular um back-end para a aplicação. O sistema inclui funcionalidades de listagem com filtros, inclusão, edição e remoção de recebedores de pagamento.

[Design do figma]('https://www.figma.com/proto/8zSuDeDe8yI9zxP2mVKZnp/Teste-%7C-Dev?page-id=0%3A1&node-id=0-86&viewport=560%2C387%2C0.21&scaling=min-zoom&starting-point-node-id=0%3A86&t=RoxfOIyyIU4G1Duv-1')
[JSON fornecido]('https://drive.google.com/file/d/1-bsv_MowRHo00XYn_qLc5-f2S7mItIlt/view?usp=drive_link')

## Tecnologias
As tecnologias abaixo foram selecionadas considerando os fatores de escabilidade e complexibilidade da aplicacao.

- [Vue 3](https://vuejs.org/guide/introduction.html)
- [Nuxt 3](https://nuxt.com/docs/getting-started/introduction)
- [Typescript](https://www.typescriptlang.org/docs/)


As tecnologias abaixo foram selecionadas podem ser alteradas ou removidas depenendo da necessidade.
- [Yup](https://github.com/jquense/yup)
- [Pinia](https://pinia.vuejs.org/ssr/nuxt.html)
- [SASS](https://sass-lang.com/guide/)
- [Tailwindcss](https://tailwindcss.com/docs/installation)
- [UI](https://ui.nuxt.com/getting-started)
- [Axios](https://axios-http.com/ptbr/docs/intro)
- [JSON Server](https://www.npmjs.com/package/json-server#getting-started)
- [Vite](https://vitejs.dev/guide/)

Também foram utilizados alguns modulos do Nuxt 3 [disponiveis aqui](https://nuxt.com/modules).

# Passo a Passos

## Instalando o projeto
Apos o download devemos executar os seguintes comantos para instalar a dependencias. o comando pode variar de acordo com o seu terminal;

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Levantamento do projeto

O servidor de desenvolvimento fica disponivel em `http://localhost:3000`;
Ja o servidor back-end fica disponivel em `http://localhost:3001` (caso esteja utilizando esta porta, pode ser alterada no arquivo `package.json`).

O desafio apresentou apenas um modulo que foi desenvolvido nesta aplição. disponivel no caminho `/favorecidos`.

```bash
# npm
npm run dev
# Json server
npm run server

# pnpm
pnpm run dev
# Json server
pnpm run server

# yarn
yarn dev
# Json server
yarn server

# bun
bun run dev
# Json server
bun run server
```

## Produção

Build para produção:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Local preview do build de producao:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

# Planejamento
O planejamento e tarefas atreladas ao projeto estao disponivies no [seguinte link](https://github.com/users/thaua97/projects/1/views/6);


### Requisitos funcionais
Os requisitos funcionais para o modulo de **Favorecidos** sao:
- [RF001] O sistema deve listar os favorecidos;
- [RF002] O sistema deve cadastrar novos favorecidos;
- [RF003] O sistema deve alterar dados de favorecidos exixtentes;
- [RF004] O sistema deve excluir favorecidos exixtentes;
- [RF005] O sistema deve exibir dados de favorecidos validados;
- [RF006] O sistema deve proporcionar a busca de favorecidos;
- [RF007] O sistema deve proporcionar a exclusao de favorecidos em massa;
- [RF008] O sistema deve proporcionar a exclusao de favorecidos em massa;

### Requisitos Nao funcionais
- [RNF001] A aplicação deve possuir validacao de formulario;
- [RNF002] A aplicação deve contemplar testes unitarios;
- [RNF003] A aplicação deve contemplar a documentacao dos componentes;
- [RNF004] A aplicação deve rodar em navegadores modernos;

# 📁 Estrutura de pastas
O desenvolvimento da aplicação foi feito usando o padrao do [Nuxt 3](https://nuxt.com/docs/guide/directory-structure/app) e com ela temos a seguinte estrutura de pastas organizada:
#### 🎨 assets
Contém as imagens e arquivos estáticos como estilos utilizados no front-end; Os estilos globais ficam na raiz da pasta `styles`. os componentes globais sem estrutura HTML ficam na pasta `compontens`, com o prefixo `base-[nome-do-componente].scss`;
#### 🧱 components
Contém os compontens utilizados para a montagem das páginas da aplicação, componentes globais ficam na raiz da pasta, com o prefixo `base-[nome-do-componente].vue`;
#### 📚 constants
Contém as constantes de uso global compartilhando entre componentes;
#### #️⃣ interfaces
Contém as interfaces compartilhadas pelos componentes;
#### 💻 layouts
Contém o corpo principal das páginas;
#### 📃 pages
Contém as páginas web da aplicação separadas por modulos;
#### 🏗 plugins
Contém as páginas web da aplicação separadas por modulos;
#### 👨‍👩‍👧‍👦 public
Contém os arquivos pulbicos aplicação como favicon;
#### 🗄 server
Contém arquivos de configuração do nuxt;
#### 🦺 services
Contém os servicos criados para a aplicação;
#### 🔁 shared
Contém compontentes e funçoes compartilhadas globalmente;
#### 🏪 stores
Contém o estado da aplicação;
#### 🔧 utils
Contém funções uteis para componentes e páginas;
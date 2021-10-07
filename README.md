Isto é um  [Next.js](https://nextjs.org/) boilerplate.

## O que tem nesse projeto?

Este projeto utiliza de inumeras coisas, tais como:

- [TypeScript](https://www.typescriptlang.org/)
- [NextJS](https://nextjs.org/)
- [Styled Components](https://styled-components.com/)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [Storybook](https://storybook.js.org/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://github.com/typicode/husky)

## Primeiros passos

Primeiramente instale as dependências e rode o ambiente de desenvolvimento:

```bash
yarn
# ou
npm i
# e
npm run dev
# ou
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) com seu browser para ve ro resultado.


## Comandos

- `dev`: roda a aplicação na `localhost:3000`
- `build`: cria o build de produção
- `start`: inicia um servidor com o build do código de prod
- `lint`: roda o lint em todos os componentes e páginas
- `test`: roda o jest para testar todos os componentes e páginas
- `test:watch`: roda o jest no modo watch
- `storybook`: roda o storybook na `localhost:6006`
- `build-storybook`: cria uma versão de build do storybook

<h1>Docs</h1>

## NextJS
Um Framework Web desenvolvido em ReactJS lançado em 2016
Um sistema opinativo com estrutura e ferramentas ja definidas (extensiveis ou não)
	<h3> Porque usar Next</h3>
  - Webpack? Rollup? Parcel? Como faz as rotas? como gerar estático? e pra produção?
  - Geralmente todos os web frameworks ja facilitam essas partes acima
  - Rederização no servidor (SSR - Server Side Rendering)
  - Geração de estatico (SSG - Static Site Generation)
  - CSS-in-JS (styled-jsx, Styled Components, Emotion, etc.)
  - Zero Configuration (rotas, hot reloading, code splitting o next faz sozinho)
  - Completamente extensível (controle completo do babel/webpack)
  - Otimizado para produção
  - Next tem suporte para SSG,SSR e SPA

## Gatsby X CRA (Create React App) X NextJS
<h3> Static Site (html/css/js) - GatsbyJS, Hexo </h3>

<p>Servidor pega os dados da RestApi, joga pro server e dps joga pra
CDN (Servidor que serve arquivos estaticos),
ao abrir o site, ele manda uma chamada pra CDN,
a CDN vai pegar os arquivos que ja foram gerados e joga a pagina </p>

<details open>
			<summary><b>Vantagens</b></summary>
			<ul>
				<li>Uso quase nulo do servidor</li>
				<li>Pode ser servido em uma CDN (melhor cache) </li>
				<li>Melhor performance entre todos </li>
				<li>Flexibilidade para usar em qualquer servidor </li>
			</ul>
</details>

<details open>
		<summary> <b>Desvantagens</b> </summary>
			<ul>
			 <li> Tempo de build pode ser muito alto </li>
			 <li> Dificuldade para escalar em aplicações grandes </li>
			 <li> Dificuldade para realizar atualizações constantes </li>
			</ul>
</details>

<hr>

<h3>Client Side Rendering (SPA) - CRA (Create React App) </h3>

<p>Cliente abre a pagina -> ela bate na CDN, a CDN tem alguns arquivos ja,
no momento que carregar todos os files, ele ainda vai buscar os dados na API
e dps preenche o que for necessario para tela, prox pagina, o processo vai ser o mesmo,
mas não pesa pra carregar telas anteriores</p>

<details open>
		<summary> <b>Vantagens </b></summary>
			<ul>
				<li> Permite páginas ricas em interações sem recarregar </li>
				<li> Site rápido após o load inicial </li>
				<li> Ótimo para aplicações web </li>
				<li> Possui diversas libs boas </li>
			</ul>
</details>

<br>

<details open>
		<summary> <b>Desvantagens </b></summary>
		<ul>
			<li> Load inicial pode ser muito grande</li>
			<li> Performance imprevisível</li>
			<li> Dificuldade no SEO</li>
			<li> A maioria do conteúdo não é indexado</li>
		</ul>
</details>

<hr>

<h3> Server Side Rendering (SSR) - NextJS </h3>
<p>Usuario abre o site, chamada é feita pro server, bate na Api, cria um html e
dps retorna a pagina pro cliente com tudo renderizado, ao navegar pra outra pagina, mesma coisa </p>

<details open>
		<summary> <b>Vantagens </b></summary>
		<ul>
			<li> Ótimo em SEO</li>
			<li> Meta tags com previews mais adequados</li>
			<li> Melhor Performance para o usuário (o conteúdo vai ser visto mais rápido)</li>
			<li> Código compartilhado com backend em Node</li>
			<li> Menor processamento no lado do usuário</li>
		</ul>
</details>

<br>

<details open>
		<summary> <b>Desvantagens </b></summary>
		<ul>
			<li> TTFB (Time to first byte) maior, o servidor prepara todo o conteúdo para entregar</li>
			<li> HTML maior</li>
			<li> Reload completo nas mudanças de rota* (mas é possivel "desabilitar" esse reload)</li>
		<ul>
</details>
<hr>


<h3> Quando usar cada um? </h3>

<details open>
		<summary> <b>Static Site Genaration (SSG) (Gatsby/NextJS) </b></summary>
		<ul>
			<li> Sites simples sem muita interação do usuário</li>
			<li> Se vc é a unica pessoa que publica o conteudo</li>
			<li> Se o conteúdo muda pouco</li>
			<li> Se o site é simples sem tantas páginas</li>
			<li> Quanto a performance é extremamente importante</li>
		</ul>
Ex: Landing Page, Blogs, Portfólios
</details>

<br>


<details open>
		<summary> <b>Single Page Application (SPA) (CRA) </b></summary>
		<ul>
			<li> Quando não tem tanta necessidade de indexar informações no Google</li>
			<li> Quando o usuario faz muitas interações na página e não quero refreshes</li>
			<li> Quando as informações vão ser diferentes para cada usuário (autenticação, por exemplo)</li>
		</ul>
Ex: Twitter Web, Facebook Web, Spotify Web
</details>

<br>


<details open>
		<summary> <b>Server Side Rendering (SSR) - NextJS </b></summary>
		<ul>
			<li> Quando tem necessiade de um SPA, mas precisa de um loading mais rápido.</li>
			<li> Quando o conteúdo muda frequentemente.</li>
			<li> Quando trabalha com um número muito grande de páginas.</li>
			<li> Quando precisa de uma boa indexação no Google.</li>
		</ul>
Ex: Ecommerce, Sites de notícias
</details>

<hr>

## GraphQL
Linguagem de consulta de dados

<h3>Rest API x GraphQL</h3>

<details open>
  <summary> <b> Rest API </b></summary>
	<ul>
		<li> Usuario faz requisição pro servidor, respondia a chamada com JSON</li>
		<li> Trabalhando com várias rotas</li>
		<li> Dificuldade para evoluir a API (criação de N versões)</li>
		<li> Entrega de dados nem sempre necessários</li>
		<li> Rotas altamente acopladas (diversas rotas para apenas 1 funcionalidade)</li>
	</ul>
</details>

<br>

<details open>
  <summary> <b> GraphQL </b></summary>
	<ul>
		<li> Usuario faz requisição pro servidor, respondia a chamada com JSON</li>
		<li> Prepara um Schema -> busca apenas os dados que o cliente pediu e recebe apenas os dados solicitados</li>
		<li> Evolução constante </li>
		<li> Entrega apenas os dados requisitados (tamanho menor e mais rápido) </li>
		<li> Rota única, dados altamente desacoplados</li>
	</ul>
</details>

<hr>

## CSS-in-JS
Conjunto de ideias para resolver problemas de css.

<details open>
  <summary> <b> Problemas do CSS </b></summary>
		<ul>
			<li> Falta de escopo local (uma lib de terceiro pode colidir com o código).</li>
			<li> Especificidade causando colisão de estilos.</li>
			<li> Código não utilizado (dead code) diversos estilos em uma pagina só</li>
			<li> Falta de modularidade</li>
			<li> Dificuldade na manutenção e códico quebrando</li>
			<li> Pré processadores vieram mas abriram margem à más práticas</li>
		</ul>
</details>

<br>

<details open>
  <summary> <b> Bibliotecas de CSS-in-JS </b></summary>
		<ul>
			<li> Aphrodite</li>
			<li> Emotion</li>
			<li> Glamor</li>
			<li> Styled Components</li>
			<li> Styled JSX</li>
	</ul>
</details>

<br>

<details open>
  <summary> <b> Vantagens do Styled Components </b></summary>
		<ul>
			<li> Critical CSS automatico (carrega apenas o css especifico, carregando apenas por demanda/	necessidade) </li>
			<li> Escopo definido (sem colisão de classes)</li>
			<li> Remoção de CSS não utilizado</li>
			<li> Estilos dinâmicos</li>
			<li> Manutenção mais simplificada</li>
			<li> Vendor prefixing automatico (sem precisar falar o que é web-kit/ oq não é)</li>
	</ul>
</details>

<hr>

## Testes
<details open>
  <summary> <b> Porque escrever testes? </b></summary>
	<ul>
		<li> Código complexo não é simples de se debuggar só com olho</li>
		<li> Forma robusta de validar software</li>
		<li> Funciona da forma que eu espero?</li>
		<li> Funciona da forma que o usuario espera?</li>
		<li> Se atualizar esse trecho, o código quebra?</li>
		<li> Funciona como uma primeira documentação</li>
	</ul>
</details>
<br>

<h3> Que tipos de testes existem? </h3>

- Testes Unitários
	- Testam isoladamente pequenas unidades de código
	- O código está se comportando como o desenvolvedor espera?

<br>

- Testes Funcionais
	- Checa se as unidades funcionam também entre si
	- Testes podem conter multiplas classes, métodos, etc
	- O programa funciona de aocrdo com que o usuario espera?

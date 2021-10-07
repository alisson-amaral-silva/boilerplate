This is a [Next.js](https://nextjs.org/) boilerplate.

## What is inside?

This project uses lot of stuff as:

- [TypeScript](https://www.typescriptlang.org/)
- [NextJS](https://nextjs.org/)
- [Styled Components](https://styled-components.com/)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [Storybook](https://storybook.js.org/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://github.com/typicode/husky)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Commands

- `dev`: runs your application on `localhost:3000`
- `build`: creates the production build version
- `start`: starts a simple server with the build production code
- `lint`: runs the linter in all components and pages
- `test`: runs jest to test all components and pages
- `test:watch`: runs jest in watch mode
- `storybook`: runs storybook on `localhost:6006`
- `build-storybook`: create the build version of storybook

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

NextJS
	- Um Framework Web desenvolvido em ReactJS lançado em 2016
		- Um sistema opinativo com estrutura e ferramentas ja definidas (extensiveis ou não)

	- Porque usar Next
		- Webpack? Rollup? Parcel? Como faz as rotas? como gerar estático? e pra produção?
		- Geralmente todos os web frameworks ja facilitam essas partes acima
		- Rederização no servidor (SSR - Server Side Rendering)
		- Geração de estatico (SSG - Static Site Generation)
		- CSS-in-JS (styled-jsx, Styled Components, Emotion, etc.)
		- Zero Configuration (rotas, hot reloading, code splitting o next faz sozinho)
		- Completamente extensível (controle completo do babel/webpack)
		- Otimizado para produção
		- Next tem suporte para SSG,SSR e SPA
		
Gatsby X CRA (Create React App) X NextJS
	- Static Site (html/css/js) - GatsbyJS, Hexo
	
		- Servidor pega os dados da RestApi, joga pro server e dps joga pra 
		  CDN (Servidor que serve arquivos estaticos), 
		  ao abrir o site, ele manda uma chamada pra CDN,
		  a CDN vai pegar os arquivos que ja foram gerados e joga a pagina
		
		Vantagens
			- Uso quase nulo do servidor
			- Pode ser servido em uma CDN (melhor cache)
			- Melhor performance entre todos
			- Flexibilidade para usar em qualquer servidor
		Desvantagens
			- Tempo de build pode ser muito alto
			- Dificuldade para escalar em aplicações grandes
			- Dificuldade para realizar atualizações constantes
		  
	- Client Side Rendering (SPA) - CRA (Create React App)
	
		- Cliente abre a pagina -> ela bate na CDN, a CDN tem alguns arquivos ja,
		  no momento que carregar todos os files, ele ainda vai buscar os dados na API 
		  e dps preenche o que for necessario para tela, prox pagina, o processo vai ser o mesmo, 
		  mas não pesa pra carregar telas anteriores
		 
		Vantagens
			- Permite páginas ricas em interações sem recarregar
			- Site rápido após o load inicial
			- Ótimo para aplicações web
			- Possui diversas libs boas
		
		Desvantagens
			- Load inicial pode ser muito grande
			- Performance imprevisível
			- Dificuldade no SEO
			- A maioria do conteúdo não é indexado
			
		  
	- Server Side Rendering (SSR) - NextJS
		- Usuario abre o site, chamada é feita pro server, bate na Api, cria um html e 
		  dps retorna a pagina pro cliente com tudo renderizado, ao navegar pra outra pagina, mesma coisa
		  
		Vantagens
			- Ótimo em SEO
			- Meta tags com previews mais adequados
			- Melhor Performance para o usuário (o conteúdo vai ser visto mais rápido)
			- Código compartilhado com backend em Node
			- Menor processamento no lado do usuário
		
		Desvantagens
			- TTFB (Time to first byte) maior, o servidor prepara todo o conteúdo para entregar
			- HTML maior
			- Reload completo nas mudanças de rota* (mas é possivel "desabilitar" esse reload)
	
	- Quando usar cada um?
		- Static Site Genaration (SSG) (Gatsby/NextJS)
			- Sites simples sem muita interação do usuário
			- Se vc é a unica pessoa que publica o conteudo
			- Se o conteúdo muda pouco
			- Se o site é simples sem tantas páginas
			- Quanto a performance é extremamente importante
			
			Ex: Landing Page, Blogs, Portfólios

		- Single Page Application (SPA) (CRA)
			- Quando não tem tanta necessidade de indexar informações no Google
			- Quando o usuario faz muitas interações na página e não quero refreshes
			- Quando as informações vão ser diferentes para cada usuário (autenticação, por exemplo)
			
			Ex: Twitter Web, Facebook Web, Spotify Web
		
		- Server Side Rendering (SSR) - NextJS
			- Quando tem necessiade de um SPA, mas precisa de um loading mais rápido.
			- Quando o conteúdo muda frequentemente.
			- Quando trabalha com um número muito grande de páginas.
			- Quando precisa de uma boa indexação no Google.
			
			Ex: Ecommerce, Sites de notícias
			
GraphQL
Linguagem de consulta de dados
Rest API x GraphQL

	Rest API
		- Usuario faz requisição pro servidor, respondia a chamada com JSON
		- Trabalhando com várias rotas
		- Dificuldade para evoluir a API (criação de N versões)
		- Entrega de dados nem sempre necessários
		- Rotas altamente acopladas (diversas rotas para apenas 1 funcionalidade)
	
	GraphQL
		- Usuario faz requisição pro servidor, respondia a chamada com JSON
		- Prepara um Schema -> busca apenas os dados que o cliente pediu e recebe apenas os dados solicitados
		
		Vantagens
			- Evolução constante
			- Entrega apenas os dados requisitados (tamanho menor e mais rápido)
			- Rota única, dados altamente desacoplados
			
CSS-in-JS
Conjunto de ideias para resolver problemas de css.

	Problemas do CSS
		- Falta de escopo local (uma lib de terceiro pode colidir com o código).
		- Especificidade causando colisão de estilos.
		- Código não utilizado (dead code) diversos estilos em uma pagina só
		- Falta de modularidade
		- Dificuldade na manutenção e códico quebrando
		- Pré processadores vieram mas abriram margem à más práticas

	Bibliotecas de CSS-in-JS
		- Aphrodite
		- Emotion
		- Glamor
		- Styled Components
		- Styled JSX
		
	Vantagens do Styled Components
		- Critical CSS automatico (carrega apenas o css especifico, carregando apenas por demanda/necessidade)
		- Escopo definido (sem colisão de classes)
		- Remoção de CSS não utilizado
		- Estilos dinâmicos
		- Manutenção mais simplificada
		- Vendor prefixing automatico (sem precisar falar o que é web-kit/ oq não é)
		
		
Testes
	Porque escrever testes?
		- Código complexo não é simples de se debuggar só com olho
		- Forma robusta de validar software
			- Funciona da forma que eu espero?
			- Funciona da forma que o usuario espera?
			- Se atualizar esse trecho, o código quebra?
		- Funciona como uma primeira documentação
		
	Que tipos de testes existem?
		
		- Testes Unitários
			- Testam isoladamente pequenas unidades de código
			- O código está se comportando como o desenvolvedor espera?
		
		- Testes Funcionais
			- Checa se as unidades funcionam também entre si
			- Testes podem conter multiplas classes, métodos, etc
			- O programa funciona de aocrdo com que o usuario espera?
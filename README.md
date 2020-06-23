<img src="https://i.imgur.com/p35e8Ny.png" style='width:100%;max-width: 480px' alt="Angular Pokedek">
<br/>
<br/>

Projeto gerado com [Angular CLI](https://github.com/angular/angular-cli) versão 9.1.7.

## Scripts

#### `ng serve`

Executa o projeto em modo de desenvolvimento. Acesse `http://localhost:4200/` para visualizá-lo.

> reload automaticamente quando há alteração nos arquivos.

#### `ng generate component component-name` ou `ng g c component-name`

Gera um novo componente. Pode usar também: `ng generate directive|pipe|service|class|guard|interface|enum|module`.

#### `ng build`

Cria o projeto. Os arquivos serão salvo no diretório `dist/`. Adicione `--prod`, para uma construção de produção.

#### `ng test`

Executa os testes unitarios via [Karma](https://karma-runner.github.io).

#### `ng e2e`

Executas os testes ponta-a-ponta (end-to-end) via [Protractor](http://www.protractortest.org/).

#### `ng help`

Mostra uma lista de ajuda sobre o Angular CLI. Ou [veja direto aqui](https://github.com/angular/angular-cli/blob/master/README.md).

#### `npm run env-config`

Atualizar os arquivos de ambientes localizados no diretório _**src/environments/**_.

> Os arquivos são gerados com base na configurações em _**env.config.ts**_. Modo para usar as variáveis de ambiente, por exemplo `process`, implicitamente.

> Recomendável usá-lo apenas quando há atualização no arquivo _**env.config.ts**_.

### Estudo

- [x] Routes
  - [x] Lazy Component com Loader
  - [x] Uso de params
  - [ ] Uso de queryParams
  - [x] Tratamento de _errors_
- [ ] Forms
  - [ ] Forms reativo
- [x] RxJs
  - [x] Customização de operator rxJs
  - [x] Tratamento de dados
  - [x] Tratamento de _loading_
  - [x] Criação de _Observables/Subscriptions_
- [x] Http
  - [x] Tratamento de requisição
  - [x] Customizaão do Interceptor
  - [ ] Guard Auth
  - [ ] Tratamento de _errors_
- [x] Material Design
  - [x] Cusstomização de css
- [ ] Desenvolvimento de paginação
- [x] Uso de API ([pokeapi](https://pokeapi.co/))
  - [x] Criação dos Models
  - [x] Solicitação multiplas
- Typescript
  - Condições
- [x] [Gerenciamento/Criação de ambiente](./env.config.ts)
- [x] Input/ Output
- [x] Pipes
  - [x] Criação de pipe
- [x] Diretivas
  - [x] Criação de diretiva
    - [x] Criação de carregamento de imagem preguiçoso (lazy-src-load)

### Referências

- Angular
  - [Curso/Video aulas Angular 2+](https://www.youtube.com/watch?v=tPOMG0D57S0&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=1)
  - Meta tags
    - https://angular.io/api/platform-browser/Meta
    - https://angular.io/api/platform-browser/Meta
  - Document Title
    - https://angular.io/guide/set-document-title
  - Route
    - https://angular.io/guide/router
- Creating Custom Operators in RxJS
  - https://netbasal.com/creating-custom-operators-in-rxjs-32f052d69457
- FromEvent vs addListenerEvent
  http://cangaceirojavascript.com.br/rxjs-lidando-com-eventos-elegantemente/
- Diretivas
- Pipes
- Operators
- Views
  - https://indepth.dev/exploring-angular-dom-manipulation-techniques-using-viewcontainerref/
- Acessibilidade
  - https://stackblitz.com/edit/angular-akdjhg
  - https://stackblitz.com/edit/angular-keyb-1
    - https://netbasal.com/accessibility-made-easy-with-angular-cdk-1caaf3d98de2
- breakpoint scss @mixin
  - https://css-tricks.com/approaches-media-queries-sass/
- deploy ~ github page
  - https://blog.bitsrc.io/deploy-your-angular-project-to-github-pages-7cbacb96f35b
  - https://dzone.com/articles/deploy-angular-app-on-github-pages
- [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

# PokeDek

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Arquivos de ambientes

Execute `npm run env-config` para atualizar os arquivos de ambientes localizados no diretório _**src/environments/**_.

Os arquivos são gerados com base na configurações em _**env.config.ts**_. Modo para usar as variáveis de ambiente, por exemplo `process`, implicitamente.

> Recomendável usá-lo aepnas quando há atualização no arquivo _**env.config.ts**_.

### Estudo

- [x] Routes
  - [x] Lazy Component com Loader
  - [x] Uso de params
  - [ ] Uso de queryParams
  - [ ] Tratamento de _errors_
- [ ] Forms
- [x] RxJs
  - [x] Customização de operator rxJs
  - [x] Tratamento de dados
  - [ ] Tratamento de _loading_
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
- [ ] Typescript
  - Condições
- [x] [Gerenciamento/Criação de ambiente](./env.config.ts)
- [x] Input/ Output
- [x] Pipes
  - [ ] Criação de pipe
- [x] Diretivas
  - [ ] Criação de diretiva

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

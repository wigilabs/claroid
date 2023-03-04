# Claroid

## Estructura Repositorio

Se maneja como un monorepo utilizando [nx](https://nx.dev)

> Run `nx graph` to see a diagram of the dependencies of the projects.
> Run `npx nx connect-to-nx-cloud` to enable [remote caching](https://nx.app) and make CI faster.
> Visit the [Nx Documentation](https://nx.dev) to learn more.

- **Apps:** Todos los microfrontends
- **backends:** Todos los microservicios
- **libs:** Las utilidades compartidas

## Estrategia repositorio

- **Trunk based development:** Se tiene una única rama de vida larga (***main***), el resto de ramas son de vida corta, [más info](https://trunkbaseddevelopment.com/)
- **Ramas:** Se crea una rama principal (main) sobre la cual va a estar el código de producción. CUando se empieza a trabajar en algo del código se debe crear una rama, la cual va a ser de vida corta, con el nombre ***{type}_{scope}***
  - ***type***: Hace referencia a la categoría de trabajo que se va a realziar en la rama de vida corta y es un item del siguiente listado: `['build','chore','ci','docs','feat','fix','perf','refactor','revert','style','test']`.
  - ***scope:*** Hace referencia al detalle de lo que se va a realizar, ej: *login, bug123, api, etc ...*
- ***Commits:*** Los commits **deben** seguir [esta convención](https://www.conventionalcommits.org/en/v1.0.0/)

## Estándares de código

Se deben seguir los lineamientos del archivo *.editorconfig*, así como debe pasar las pruebas de lint de *eslint* y el estilo de codigo definido en *prettier*.

## Manjeador de paquetes

Se usa *pnpm* como manejador de paquetes por defecto.

## Validaciones

El proyecto utiliza *husky* para hacer las validaciones antes de ejecutar los commits.

## Pendientes

Si son generales se deben agregar al archivo *TODO.md*, si son especificos de codigo se debe dejar en un comentario **TODO: xxx** para poder hacerle seguimiento a los pendientes de código

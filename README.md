# Claroid

Este repo se maneja como un monorepo utilizando [turborepo](https://turbo.build/repo/docs) y [pnpm](https://pnpm.io) como manejador de paquetes.

## Comandos

### *Compilacción*

``` bash
cd claroid
pnpm run build
```

### *Desarrollo:*

``` bash
cd claroid
pnpm run dev
```

### *CI/CD*

Turborepo usa [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) para compartir el cache de artefactos entre máquinas, para activarlo es necesario una cuenta de [vercel](https://vercel.com/).

Para autenticar turborepo CLI con la [cuenta de vercel](https://vercel.com/docs/concepts/personal-accounts/overview), ejecutar el siguiente comando:

``` bash
cd claroid
pnpm dlx turbo login
```

Para vincular el repo con el *remote cache*, ejecutar el siguiente comando, en la raiz del repo:

``` bash
pnpm dlx turbo link
```

## Contenido

### Apps y Paquetes

- `docs`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app
- `ui`: a stub React component library shared by both `web` and `docs` applications
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo
- **Apps:** Todos los microfrontends
- **backends:** Todos los microservicios
- **libs:** Las utilidades compartidas

Cada paquete/app está hecho 100% en [TypeScript](https://www.typescriptlang.org/).

### Utilidades

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

## Estrategia repositorio

- **Trunk based development:** Se tiene una única rama de vida larga (***main***), el resto de ramas son de vida corta, [más info](https://trunkbaseddevelopment.com/)
- **Ramas:** Se crea una rama principal (main) sobre la cual va a estar el código de producción. CUando se empieza a trabajar en algo del código se debe crear una rama, la cual va a ser de vida corta, con el nombre {***user/yyyymmdd***} ej: ***jgaray/20230401***
- ***Commits:*** Los commits **deben** seguir [esta convención](https://www.conventionalcommits.org/en/v1.0.0/)

## Merge Request

Todos los cambios que se integren a la rama principal (*main*), deben pasar a través de un merge/pull request. El estandar del PR es el siguiente:

### Estándares de código

Se deben seguir los lineamientos del archivo *.editorconfig*, así como debe pasar las pruebas de lint de *eslint* y el estilo de codigo definido en *prettier*.

### Validaciones

El proyecto utiliza *husky* para hacer las validaciones antes de ejecutar los commits.

## Pendientes

Si son generales se deben agregar al archivo *TODO.md*, si son especificos de codigo se debe dejar en un comentario **TODO: xxx** para poder hacerle seguimiento a los pendientes de código

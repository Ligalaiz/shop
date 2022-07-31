
[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)


# Shop

Simple shop page with cart


## Tech Stack

**Client:** JS, Pug, SCSS

**Server:** Json-server


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`BASE_PATH`

`PATH_PRODUCTS`

`PATH_CART`

`SEARCH_PARAM`

`SORT_PARAM`

`ORDER_PARAM`

`FILTER_PARAM`

`LIMIT_PARAM`

`PAGE_PARAM`

## Run Locally

Clone the project

```js
  gh repo clone Ligalaiz/shop
```

Go to the project directory

```bash
  cd shop
```

Install dependencies

```bash
  npm install
```

Start the server and client

```bash
  npm run dev
```


## Running Tests

To run tests, run the following command

```js
  npm run test
```


## Running Lint

To run lint, run the following command

```js
  npm run lint
```

## Deployment

To run deploy, run the following command

```js
  npm run build
```
## Project structure


```
├── src/                             # Исходники
│   ├── assets/                      # Подключаемые ресурсы
│   │   ├── fonts/                   # Шрифты используемые в проекте
│   │   ├── img/                     # Изображения используемые в проекте
│   │   └── styles/                  # Стили
│   │       ├── global/              # Папка с глобальнымистилями
│   │       │   ├── _global.scss     # Файл с глобальными стилями
│   │       │   └── _fonts.scss      # Файл с подлючаемыми шрифтами
│   │       └── internals/           # Дополнения
│   │          ├── _mixins.scss      # Файл с миксинами
│   │          └── _variables.scss   # Файл с переменными
│   ├── components/                  # Папка с компонентами проекта
│   ├── internals/                   # Дополнения
│   ├── layouts/                     # Папка с шаблонами разметки
│   ├── pages/                       # Папка страниц проекта
│   └── utils/                       # Папкас утилитами
├── server/                          # Сервер
|    ├── products.db.json            # Файл с данными сервера
|    └── routes.json                 # Файл с кастомными роутами
├── config/                          # Конфигурация Webpack
|    ├── webpack.common.js           # Базовая конфигурация Webpack.js
|    ├── webpack.dev.js              # Конфигурация для dev сборки
|    └── webpack.prod.js             # Конфигурация для production сборки
├── .browserslistrc                  # Конфигурация Browserslist
├── .editorconfig                    # Конфигурация IDE
├── .env.example                     # Пример Environment Variables
├── .eslintignore                    # Список исключённых файлов из ESLint
├── .eslintrc.js                     # Конфигурация проверки JS в ESLint
├── .gitignore                       # Список исключённых файлов из Git
├── .gitattributes                   # Конфигурация GIT по отношению к путям
├── .npmrc                           # Конфигурация npm
├── .prettierignore                  # Список исключённых файлов из Prettier
├── .projections.json                # Конфигурация отношений между файлами
├── babel.config.js                  # Конфигурация компиляции Javascript в es5
├── jest.config.js                   # Конфигурация Jest
├── LICENSE                          # Файл лицензии
├── Makefile                         # Набор инструкций для программы Make
├── package.json                     # Список модулей и прочей информации
├── postcss.config.js                # Конфигурация компиляции стилей
├── prettier.config.js               # Конфигурация форматирования кода
└── README.md                        # Файл описания проекта
```

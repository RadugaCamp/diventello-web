# diventello-web
Diventello (web version) - Songs book

## Разворачивание среды разработки
Сборка проекта работает через (vue-cli)[https://cli.vuejs.org/] - систему сборки для проектов, построенных с использованием Vue.js 

Установка состоит из нескольких простых этапов:
- глобалная установка vue-cli `npm install -g @vue/cli`
- установка всех зависимостей и разворачивание проекта через `npm install`, описанных в `package.json`

Для локальной разработки достаточно запустить команду `npm run serve` - поднимится виртуальный сервер на `http://localhost:8077`
Для сборки проекта запускаем `npm run build`, после чего собранные файлы (папка dist) переносятся на рабочий сервер

*Дополнительные возможности сборки можно почитать в документации `vue-cli`*
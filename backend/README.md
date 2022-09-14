# Back

## entidades

## Game -> 1 game pode ter varios anuncios

id
title
bannerUrl

## Ad

id
gameId
name
yearsPlaying
discord
weekDays
hoursStart
hourEnd
useVoiceChannel
createdAt


## Casos de uso

- Listagem de games com contagem de anuncios
- criacao de novo anuncio
- listagem de anuncios por game
- Buscar discord pelo ID anuncio


## rotas
Http methods

- get -> leitura
- post -> criando algo
- put -> editando
- delete -> remover 
- patch -> editar uma informacao muito especifica

Http codes
- Tipo de resposta que estamos recebendo
- sucesso -> 2xx
- redirecionamento -> 3xx
- error -> 4xx
- server -> 5xx

## tipos de parametros
- Query -> quando vem o ponto de ?
    - exemplo: localhost:3333/users?page=2
    - Sao utilizados para persistir estados
    - filtros, ordenaçao
    - sao nomeados

- Route -> nao sao nomeados
    - exemplo: localhost:3333/users - basta olhar e ja sabe o que  a url faz;
    
- Body - enviar varias informacoes para criacao de alguma coisa.


## Migration
- versionamento
- Controle maior do banco

- npx prisma migrate dev


## prisma 

- ser um orm relacional
- facilita nossa vida 
- npx prisma studio (abre a interface do prisma com os dados da sua aplicacao)
- npm i @prisma/client

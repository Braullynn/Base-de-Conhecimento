# Projeto Base de Conhecimento

Uma plataforma que centraliza e organiza informações e conteúdos, organizando-os em tópicos e categorias.

## Requisitos

Para utilizar este projeto, é necessário ter o MongoDB e o Postgres instalados e executando na máquina.

## Primeiros passos

1. Clone ou faça o download deste projeto.
2. Abra 2 janelas para interface de linha de comando. 
3. Execute o comando `npm i` na pasta frontend.
4. Execute o comando `npm i` na pasta backend.

```bash
.. C:\frontend
      npm i
```

## Rodando o projeto
* Renomeie o arquivo "env_file" para ".env". 
* Na linha "authSecret: ‘’ ", crie uma chave de autenticação entre as aspas, ex.: authSecret:
‘5HJ8K9L0M1N2O3P4Q5R6S7T8U9V0W1X2Y3Z4A5B6C’. 
Na pasta backend, execute `npm start` para iniciar o Nodemon. Aparecendo a mensagem: "Backend executando..." indica que está tudo ok e siga na segunda janela de linha de comando na pasta frontend. 
* Execute `npm run serve` para iniciar o Vue. 
* Abra seu navegador e na barra de endereço digite “localhost:8080”. Se tudo deu certo, você irá encontrar a página de login do projeto.

## Executando o projeto em container Docker
...Em construção...

## Tecnologias utilizadas
### Frontend
* HTML/CSS/ JS
* VueJS
### Backend
* MongoDB
* PostgreSQL

# NLW05 - Chat

>Desenvolvimento de uma aplicação backend utilizando NodeJs, com o objetivo da criação de uma troca de mensagem instantânia utilizando um websocket. Foi desenvolvido um cadastro para as configurações, onde o administrador do sistema pode escolher se quer o chat e uma mensagem inicial padrão em sua aplicação e será possível cadastrar os clientes, dentro do cadastro do cliente é possível obter todo um histórico das conversas trocadas entre ele e o atendente. 


## Iniciar Projeto

Dependências 
```
npm i 
```

Cria tabela do banco de dados SQLite através do Migration 
```
npm run typeorm migration:run
```

Para vizualizar a arquitetura do banco criado ( extensão SQLite)
```
Atalho => Crtl + Shift + P


SQLite : Open Database
```

Executar 
```
npm run dev
```

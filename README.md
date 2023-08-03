# API Imobiliária
#### API Imobiliária um CRUD onde dependendo do nível do usuário pode adicionar imóveis para venda ou agendar visitas, depedendo do seu nível dentro da aplicação, existem usuários comuns e usuários.

## Tecnologias Utilizadas
### As principais tecnologias utilizadas neste projeto são:
- Node
- Express
- TypeScript
- TypeORM
- Bcryptjs
- JWT - Json Web Token
- YUP
- PostgreSQL (Banco de Dados)

## Diagrama do Projeto
![diagrama](/diagrama.jpg)

## 1 Instalação
### Para executar o projeto localmente, siga as etapas abaixo:


#### 1.1 Clone o repositório:
```
git clone git@github.com:jeanmbiz/API-Imobiliaria.git
```


#### 1.2 Acesse o diretório do projeto: 


#### 1.3 Instale as dependências do projeto:
```
yarn
```


#### 1.4 Configure o banco de dados criando arquivo .env com base no arquivo .env.example:


#### 1.5 Gerar Migrations:
```
yarn typeorm migration:generate -d src/data-source src/migrations/createTables
```


#### 1.6 Persistir Migrations:
```
yarn typeorm migration:run -d src/data-source
```


#### 1.7 Rode o Projeto no Servidor Local:
```
yarn dev
```


#### 1.8 Acesse o servidor local em seu navegador:
```
http://localhost:3000/
```
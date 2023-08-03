# API Imobiliária
#### API Imobiliária é um CRUD com diferentes níveis de usuário (comum e administrador) onde é possível adicionar imóveis para venda, agendar visitas, entre outras funções.

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

## 2 Regras de Negócio

#### Usuários
- A rota de criação de usuário deve retornar todos os dados, com exceção da hash de senha.
- Não podem ser cadastrados dois usuário com o mesmo e-mail.
- Para listar todos os usuários, a rota pode ser acessada apenas por administradores.
- Apenas administradores podem atualizar qualquer usuário, usuários não-administradores podem apenas atualizar seu próprio usuário.
- Realizar o soft delete do usuário, alterando isActive para false, não deve ser possível realizar um soft delete um usuário inativo, a rota pode ser acessada apenas por administradores.

#### Login
- Ao realizar o login deve validar se o usuário existe e validar se a senha está correta.

#### Categorias
- Ao criar uma nova categoria, não podem ser cadastradas duas categorias com o mesmo nome.
- Para listar todas as categorias a rota não precisa de autenticação para ser acessada.

#### Propriedades
- Ao criar uma nova propriedade, não podem ser cadastrados dois imóveis com o mesmo endereço. 
- Não podem ser cadastrados imóveis com o campo state maior que 2 dígitos. 
- Não podem ser cadastrados imóveis com o campo zipCode maior que 8 dígitos.

#### Agendamentos
- Para fazer um agendamento, não pode ser possível agendar uma visita a um imóvel com a mesma data e hora. 
- Só deve ser possível agendar uma visita durante horário comercial (08:00 as 18:00). 
- Só deve ser possível agendar uma visita durante em dias úteis (segunda à sexta).
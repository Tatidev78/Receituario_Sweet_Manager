🍰 Receituario Sweet Manager

API REST para gerenciamento de receitas de confeitaria, desenvolvida com Node.js, TypeScript, Express, Prisma ORM e PostgreSQL. O sistema permite cadastro de usuários, autenticação segura e gerenciamento completo de receitas.


🚀 Tecnologias utilizadas


Node.js — ambiente de execução
TypeScript — tipagem estática
Express 5 — framework web
Prisma ORM — mapeamento objeto-relacional
PostgreSQL — banco de dados relacional
JWT (jsonwebtoken) — autenticação via token
Bcrypt — criptografia de senhas
Dotenv — gerenciamento de variáveis de ambiente



📋 Pré-requisitos

Antes de começar, você vai precisar ter instalado:


Node.js (v18 ou superior)
PostgreSQL
npm



⚙️ Como rodar o projeto localmente

1. Clone o repositório

bashgit clone https://github.com/Tatidev78/Receituario_Sweet_Manager.git
cd Receituario_Sweet_Manager

2. Instale as dependências

bashnpm install

3. Configure as variáveis de ambiente

Crie um arquivo .env na raiz do projeto baseado no .env.example:

bashcp .env.example .env

Preencha com suas credenciais:

envDATABASE_URL="postgresql://seu_usuario:sua_senha@localhost:5432/sweet_manager"
JWT_SECRET="sua_chave_secreta_aqui"
PORT=3000

4. Execute as migrations do banco de dados

bashnpx prisma migrate dev

5. Inicie o servidor em modo desenvolvimento

bashnpm run dev

O servidor estará disponível em http://localhost:3000


🗂️ Estrutura do projeto

Receituario_Sweet_Manager/
├── prisma/
│   ├── schema.prisma       # Modelos do banco de dados
│   └── migrations/         # Histórico de migrations
├── src/
│   ├── controllers/        # Lógica das rotas
│   ├── middlewares/        # Autenticação e validações
│   ├── routes/             # Definição dos endpoints
│   └── index.ts            # Ponto de entrada da aplicação
├── .env.example            # Exemplo de variáveis de ambiente
├── .gitignore
├── package.json
├── prisma.config.ts
└── tsconfig.json


🔐 Autenticação

A API utiliza autenticação via JWT (JSON Web Token). Para acessar as rotas protegidas, inclua o token no header da requisição:

Authorization: Bearer <seu_token>


📡 Endpoints

Usuários

MétodoRotaDescriçãoAuthPOST/usuarios/cadastroCadastra novo usuário❌POST/usuarios/loginRealiza login e retorna token JWT❌

Receitas

MétodoRotaDescriçãoAuthGET/receitasLista todas as receitas✅GET/receitas/:idBusca receita por ID✅POST/receitasCria nova receita✅PUT/receitas/:idAtualiza uma receita✅DELETE/receitas/:idRemove uma receita✅


🧪 Testes

bashnpm test


Em desenvolvimento. Testes com Jest e Supertest serão adicionados em breve.




🔮 Próximas features


 Testes automatizados com Jest + Supertest
 Categorias de receitas
 Upload de imagens das receitas
 Cálculo automático de custo por receita
 Containerização com Docker

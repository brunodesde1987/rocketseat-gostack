🚀 [Sobre o desafio](README_ABOUT.md)

### ⚙️ Rodando o desafio

Basta executar `yarn && yarn dev` para instalar as dependências e iniciar o projeto.

![yarn](https://user-images.githubusercontent.com/28319535/79054700-74946700-7c1d-11ea-89aa-4323419b0887.png)

### 🔬 Testes

Basta executar `yarn test` para rodar os testes.

![jest](https://user-images.githubusercontent.com/28319535/79054687-4c0c6d00-7c1d-11ea-882d-125d0e76d4c7.png)

### 📌 Tarefas do Desafio 02 - Conceitos do Node.js

- [x] **`POST /repositories`**: A rota deve receber `title`, `url` e `techs` dentro do corpo da requisição, sendo a URL o link para o github desse repositório. Ao cadastrar um novo projeto, ele deve ser armazenado dentro de um objeto no seguinte formato: `{ id: "uuid", title: 'Desafio Node.js', url: 'http://github.com/...', techs: ["Node.js", "..."], likes: 0 }`; Certifique-se que o ID seja um UUID, e de sempre iniciar os likes como 0.
- [x] **`GET /repositories`**: Rota que lista todos os repositórios;
- [x] **`PUT /repositories/:id`**: A rota deve alterar apenas o `title`, a `url` e as `techs` do repositório que possua o `id` igual ao `id` presente nos parâmetros da rota;
- [x] **`DELETE /repositories/:id`**: A rota deve deletar o repositório com o `id` presente nos parâmetros da rota;
- [x] **`POST /repositories/:id/like`**: A rota deve aumentar o número de likes do repositório específico escolhido através do `id` presente nos parâmetros da rota, a cada chamada dessa rota, o número de likes deve ser aumentado em 1;


### Extra

- Adicionei um middleware nas rotas que contém `/repositories/:id` para validar se o `ID` é válido e se é de um projeto existente.
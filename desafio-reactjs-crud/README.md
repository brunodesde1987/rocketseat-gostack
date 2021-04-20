🚀 [Sobre o desafio](README_ABOUT.md)

### ⚙️ Rodando o desafio

- Inicie a fake API: `yarn json-server server.json -p 3333`

![fakeapi](https://user-images.githubusercontent.com/28319535/91173701-9e25ca80-e6b4-11ea-8f9e-0d848633938e.png)

- Execute `yarn && yarn start` para instalar as dependências e iniciar o projeto.

![yarn](https://user-images.githubusercontent.com/28319535/91176925-5bb2bc80-e6b9-11ea-9561-8fc8723e58b1.png)


### 💻 Prévia

![preview](https://user-images.githubusercontent.com/28319535/91176821-33c35900-e6b9-11ea-93aa-0ad4a5d1206a.gif)

### 🔬 Testes

Basta executar `yarn test` para rodar os testes.

![jest](https://user-images.githubusercontent.com/28319535/91176285-6b7dd100-e6b8-11ea-98c8-a711918bfa83.png)

### 📌 Tarefas do Desafio 10 - GoRestaurant Web

- [x] **`Listar os pratos de comida da sua API`**: Sua página `Dashboard` deve ser capaz de exibir uma listagem, com o campo `title`, `value`, e  `description` e `available` de todos os pratos de comida que estão cadastrados na sua API.

- [x] **`Adicionar novos pratos de comida a sua API`**: Em sua página Dashboard você deve abrir um modal ao clicar no botão `Novo Prato` no Header. Esse modal deve ser responsável por cadastrar uma nova `food` passando os campos `image`, `name`, `description`, `value`.

- [x] **`Editar pratos de comida da sua API`**: Em sua página Dashboard você deve abrir um modal ao clicar no botão `Editar Prato`. Esse modal deve ser responsável por editar uma `food` passando os campos `image`, `name`, `description`, `value`.

- [x] **`Remover pratos de comida da sua API`**: Em sua página Dashboard você deve remover um prato de comida ao clicar no botão com ícone de lixeira no componente Food.

- [x] **`Alterar disponibilidade dos pratos de comida da sua API`**: Em sua página Dashboard você deve alterar a disponibilidade de um prato de comida ao clicar no switch que é controlado pelo valor de `available`.

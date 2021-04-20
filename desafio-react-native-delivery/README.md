🚀 [Sobre o desafio](README_ABOUT.md)

### ⚙️ Rodando o desafio

> Antes de executar esse projeto é necessário configurar o seu ambiente. Basta seguir os passos deste guia: [Ambiente React Native](https://react-native.rocketseat.dev).

Caso esteja no Mac, utilize siga os seguintes passos:
- Instale as dependências: `yarn`
- Entre na pasta ios: `cd ios`
- Instale os pods: `pod install`
- Inicie a fake API: `yarn json-server server.json -p 3333`
- Inicie a aplicação: `yarn ios`

No Windows:
- Inicie a fake API: `yarn json-server server.json -p 3333`

![fakeapi](https://user-images.githubusercontent.com/28319535/91227037-3c894e80-e6fc-11ea-85b1-64d4f4d74eff.png)

- Configure o mapeamento de portas: `adb reverse tcp:3333 tcp:3333`

- Execute `yarn && yarn android` para instalar as dependências e iniciar o projeto.

![yarn](https://user-images.githubusercontent.com/28319535/91227269-9b4ec800-e6fc-11ea-82ee-7c23e952fd18.png)

![reactnative](https://user-images.githubusercontent.com/28319535/91227204-7e19f980-e6fc-11ea-8857-65fb155198c9.png)


### 💻 Prévia

![splash](https://user-images.githubusercontent.com/28319535/91227296-abff3e00-e6fc-11ea-93fc-282164c42531.png)

![category](https://user-images.githubusercontent.com/28319535/91227338-bcafb400-e6fc-11ea-87c8-debfd3c4a1e8.png)

![details](https://user-images.githubusercontent.com/28319535/91227412-d3eea180-e6fc-11ea-98db-e74a7c9526e6.png)

![favorites](https://user-images.githubusercontent.com/28319535/91227518-08faf400-e6fd-11ea-9581-5af12c5f8a0c.png)

### 🔬 Testes

Basta executar `yarn test` para rodar os testes.

![jest](https://user-images.githubusercontent.com/28319535/91226930-1499eb00-e6fc-11ea-9915-8522af4a200b.png)

### 📌 Tarefas do Desafio 11 - GoRestaurant Mobile

- [x]  **`Listar os pratos de comida da sua API`**: Sua página `Dashboard` deve ser capaz de exibir uma listagem, com o campo `name`, `value` e `description` de todos os pratos de comida que estão cadastrados na sua API.

- [x]  **`Listar as categorias da sua API`**: Sua página `Dashboard` deve ser capaz de exibir uma listagem, com o campo `title` e `image_url` de todas as categorias que estão cadastrados na sua API.

- [x]  **`Filtrar pratos de comida por busca ou por categorias`**: Em sua página Dashboard permitir que o input de pesquisa e os botões de categoria façam uma busca na API de acordo com o que estiver selecionado ou escrito no input.

- [x]  **`Listar os pedidos da sua API`**: Sua página `Orders` deve ser capaz de exibir uma listagem, com o campo as informações do produto pedido, com `name` e `description` de todos os pedidos que estão cadastrados na sua API.

- [x]  **`Listar os pratos favoritos da sua API`**: Sua página `Favorites` deve ser capaz de exibir uma listagem, com o campo as informações do produto favorito, com `name` e `description` de todos os pedidos que estão cadastrados na sua API.

- [x]  **`Realizar um pedido`**: Na sua página `Dashboard`, ao clicar em um item, você deve redirecionar o usuário para a página `FoodDetails`, onde será possível realizar um novo pedido, podendo controlar a quantidade desse item pedido, ou adicionar ingredientes extras. Todo o valor deve ser calculado de acordo com a quantidade pedida.

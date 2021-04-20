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

![fakeapi](https://user-images.githubusercontent.com/28319535/90628605-4854ac80-e1f4-11ea-8118-d1ac0227cdce.png)

- Configure o mapeamento de portas: `adb reverse tcp:3333 tcp:3333`

- Execute `yarn && yarn android` para instalar as dependências e iniciar o projeto.

![yarn](https://user-images.githubusercontent.com/28319535/90629279-7b4b7000-e1f5-11ea-96f0-3d9418903c40.png)

![reactnative](https://user-images.githubusercontent.com/28319535/90630189-f82b1980-e1f6-11ea-8f95-bb68427d169e.png)


### 💻 Prévia

![products](https://user-images.githubusercontent.com/28319535/90627340-370aa080-e1f2-11ea-9e1e-689a807e75a4.png)

![cart](https://user-images.githubusercontent.com/28319535/90627482-63262180-e1f2-11ea-9ba4-13a839fd57d7.png)

### 🔬 Testes

Basta executar `yarn test` para rodar os testes.

![jest](https://user-images.githubusercontent.com/28319535/90630791-0f1e3b80-e1f8-11ea-9667-0e13fe820498.png)

### 📌 Tarefas do Desafio 08 - Fundamentos do React Native

- [x] **`Listar os produtos da fake API`**: Sua página `Dashboard` deve ser capaz de exibir uma listagem através de uma tabela, com os campos `title`, `image_url` e `price`.

- [x] **`Adicionar itens ao carrinho`**: Em toda sua aplicação, você deve utilizar o Contexto chamado `cart` que deixamos disponível. Você vai precisar completar as funcionalidades dentro de `hooks/cart.tsx` para que você consiga adicionar itens ao carrinho.

- [x] **`Exibir itens do carrinho`**: Na página `Cart` você deve exibir todos os itens do carrinho, junto com a quantidade, valor único, valor subtotal dos itens e total de todos os items.

- [x] **`Aumentar quantidade de itens do carrinho`**: Na página `Cart` você deve permitir que o usuário aumente a quantidade de itens do mesmo produto, para isso você pode utilizar a função `increment` dentro do seu contexto em `/src/hooks/cart.tsx`.

- [x] **`Diminuir quantidade de um item do carrinho`**: Na página `Cart` você deve permitir que o usuário decremente a quantidade de itens do mesmo produto, para isso você pode utilizar a função `decrement` dentro do seu contexto em `/src/hooks/cart.tsx`.

- [x] **`Exibir valor total dos itens no carrinho`**: Tanto na página `Dashboard`, tanto na página `Cart` você deve exibir o valor total de todos os itens que estão no seu carrinho.

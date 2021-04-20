🚀 [Sobre o desafio](README_ABOUT.md)

### ⚙️ Rodando o desafio

Basta executar `yarn && yarn dev:server` para instalar as dependências e iniciar o projeto.

![yarn](https://user-images.githubusercontent.com/28319535/80710524-4344e380-8ac5-11ea-8a17-30435bfc6143.png)

### 🔬 Testes

Basta executar `yarn test` para rodar os testes.

![jest](https://user-images.githubusercontent.com/28319535/80710665-84d58e80-8ac5-11ea-9231-86657ac33872.png)

### 📌 Tarefas do Desafio 05 - Primeiro projeto Node.js

- [x] **`POST /transactions`**: A rota deve receber `title`, `value` e `type` dentro do corpo da requisição, sendo `type` o tipo da transação, que deve ser `income` para entradas (depósitos) e `outcome` para saidas (retiradas). Ao cadastrar uma nova transação, ela deve ser armazenada dentro de um objeto com o formato como o seguinte:

```json
{
  "id": "uuid",
  "title": "Salário",
  "value": 3000,
  "type": "income"
}
```

- [x] **`GET /transactions`**: Essa rota deve retornar uma listagem com todas as transações que você cadastrou até agora, junto com o valor de soma de entradas, retiradas e total de crédito. Essa rota deve retornar um objeto com o formato a seguir:

```json
{
  "transactions": [
    {
      "id": "uuid",
      "title": "Salário",
      "value": 4000,
      "type": "income"
    },
    {
      "id": "uuid",
      "title": "Freela",
      "value": 2000,
      "type": "income"
    },
    {
      "id": "uuid",
      "title": "Pagamento da fatura",
      "value": 4000,
      "type": "outcome"
    },
    {
      "id": "uuid",
      "title": "Cadeira Gamer",
      "value": 1200,
      "type": "outcome"
    }
  ],
  "balance": {
    "income": 6000,
    "outcome": 5200,
    "total": 800
  }
}
```

### Extra

- Validação para identificar se todos os campos foram preenchidos (`title`, `value` e `type`).
- Validação para identificar se `value` é um `number`.
- Validação para identificar se `type` é `'income'` ou `'outcome'`.

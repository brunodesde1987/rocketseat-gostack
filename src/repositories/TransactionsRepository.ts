import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface CreateTransaction {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    return this.transactions;
  }

  public getBalance(): Balance {
    const getIncomes = (acc: number, transaction: Transaction): number =>
      transaction.type === 'income' ? acc + transaction.value : acc;

    const getOutcomes = (acc: number, transaction: Transaction): number =>
      transaction.type === 'outcome' ? acc + transaction.value : acc;

    const income = this.transactions.reduce(getIncomes, 0);
    const outcome = this.transactions.reduce(getOutcomes, 0);
    const total = income - outcome;

    const balance = {
      income,
      outcome,
      total,
    };

    return balance;
  }

  public create({ title, value, type }: CreateTransaction): Transaction {
    const transaction = new Transaction({ title, value, type });
    this.transactions.push(transaction);

    return transaction;
  }
}

export default TransactionsRepository;

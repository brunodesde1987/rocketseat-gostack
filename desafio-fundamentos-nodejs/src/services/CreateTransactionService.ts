import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

interface Request {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute({ title, value, type }: Request): Transaction {
    if (!title || !value || !type) {
      throw Error('All fields are required: title, value and type.');
    }

    if (typeof value !== 'number') {
      throw Error('The value field has to be a number.');
    }

    if (!['income', 'outcome'].includes(type)) {
      throw Error('The type has to be income or outcome.');
    }

    const { total } = this.transactionsRepository.getBalance();
    if (type === 'outcome' && value > total) {
      throw Error('This outcome are more than you can afford at this moment.');
    }

    const transaction = this.transactionsRepository.create({
      title,
      value,
      type,
    });

    return transaction;
  }
}

export default CreateTransactionService;

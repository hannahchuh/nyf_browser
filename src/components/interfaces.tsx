export interface Household {
  id: string;
  name: string;
  users: Person[];
  currentTransactions: Transaction[];
  transactions: Transaction[];    // a history of all transactions that have occured
  billingStart: Date;
  billingCycle: number;
  recurringTransactions: Transaction[];
}

export interface Person {
  firstName: string;
  lastName: string;
  id: string;
  transactions: Transaction[];
}

export interface Transaction {
  householdId: string;
  comment: string;
  date: Date;
  price: number;
  purchaser: Person;
  debtors: Person[];
}

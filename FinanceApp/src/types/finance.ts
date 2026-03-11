export type MovementType = 'receita' | 'despesa';

export type BalanceTag = 'saldo' | MovementType;

export type BalanceData = {
  tag: BalanceTag;
  saldo: string;
};

export type MovementData = {
  id: string;
  type: MovementType;
  value: string;
  description?: string;
  date?: string;
};

export {};

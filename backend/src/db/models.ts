export interface IUser {
    user_id: number;
    name: string;
    lastname: string;
    email: string;
}

export interface IBills {
    bills_id: number;
    user_id: number;
    amount: number;
    monthly_fee: number;
    category: number;
    description: string;
    method: "debit" | "credit";
    is_paid: boolean;
    date: Date;
}

export interface IIncome {
    incomes_id: number;
    user_id: number;
    amount: number;
    category: number;
    description: string;
    date: Date;
}

export interface ICreditCard {
    credit_card_id: number;
    user_id: number;
    name: string;
    close_date: number;
    limit: number;
}

export interface ILoan {
    loan_id: number;
    user_id: number;
    amount: number;
    monthly_fee: number;
    description: string;
    date: Date
}

export interface ICategory {
    category_id: number;
    user_id: number;
    name: string;
    type: "income" | "bill"
}


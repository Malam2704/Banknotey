import currencyData from './assets/CountryCurrency.json';

type CurrencyCode = keyof typeof currencyData;

export type BankNote = {
    currency: CurrencyCode
    amount: string
}

export type User = {
    name: string
    collection: BankNote[];
}
type BankNote = {
    value: number;
    country: string;
    symbol: string;
}

type User = {
    name: string
    collection: BankNote[];
}
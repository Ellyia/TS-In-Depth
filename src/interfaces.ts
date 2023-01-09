import { Category } from './enums';

interface DamageLogger {
    (reason: string): void;
}

interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
    pages?: number;
    // markDamaged?: (reason: string) => void; // як проперти
    // markDamaged?(reason: string): void; // як метод
    markDamaged?: DamageLogger;
}

interface Person1 {
    name?: string;
    email: string;
}

interface Author extends Person1 {
    numBookPublished: number;
    // name: string; // обязательным необязательное поле сделать можно, а наоборот нет
    // email?: string; // обязательное поле необязательным сделать нельзя
}

interface Librarian extends Person1 {
    department: string;
    assistCustomer: (custName: string, booktitle: string) => void;
}

// interface LetterMap {
//     [index: string]: string;
//     first: string;
//     second?: string;
// }

// interface Colors {
//     [index: symbol]: number;
// }

interface A {
    [prop: string]: string;
    // [prop: string]: string | number;  // або так
}

interface TOptions {
    duration?: number;
    speed?: number;
}

interface Magazine {
    title: string;
    publisher: string;
}

interface ShelfItem {
    title: string;
}

export { ShelfItem, Magazine, Author, Book, Librarian, Person1, TOptions, A, DamageLogger as Logger }
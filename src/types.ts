

import { createCustomer, getBooksByCategoryPromise } from "./functions";
import { Author, Book, Person1 } from "./interfaces";

// export type Book = { // aleas - описуе объект: не важливо, використати type чи interface коли описуєш форму обєкта (потрібне присвоєння "=")
//     id: number;
//     title: string;
//     author: string;
//     available: boolean;
//     category: Category;
// };

export type BookProperties = keyof Book;
export type PersonBook = Person1 & Book;
export  type BookOrUndefined = Book | undefined;
// утиліти
export type BookRequiredFields = Required<Book>; // всі поля стали обовʼязковими
export type UpdatedBook = Partial<Book>; // всі поля стали не обовʼязковими
export type AuthorWoEmail = Omit<Author, 'email'>; // виключаємо поле
export type CreateCustomerFunctionType = typeof createCustomer;
// 07.05
export type fn = (a: string, b: number, c: boolean) => symbol;
export type Param1<T> = T extends (a: infer R, b: number, c: boolean) => symbol ? R : never;
export type Param2<T> = T extends (a: string, b: infer R, c: boolean) => symbol ? R : never;
export type Param3<T> = T extends (a: string, b: number, c: infer R) => symbol ? R : never;

export type P1 = Param1<fn>;
export type P2 = Param2<fn>;
export type P3 = Param3<fn>;

export type RequiredProps<T extends object> = { // конструкція mapped type, яка отримує обовʼязкові поля
    [prop in keyof T]: {} extends Pick<T, prop> ? never : prop
}[keyof T];
// використовуємо never, щоб виключити поле
export type OptionalProps<T extends object> = { // конструкція, яка отримує НЕ обовʼязкові поля
    [prop in keyof T]: {} extends Pick<T, prop> ? prop : never
}[keyof T];

type BookRequiredProps = RequiredProps<Book>;
type BookOptionalProps = OptionalProps<Book>;

type RemoveProps <T extends object, TProps extends keyof T> = {
    [prop in keyof T as Exclude<prop, TProps>]: T[prop];
}

type BookRequiredPropsType = RemoveProps<Book, BookOptionalProps>;
type BookOptionalPropsType = RemoveProps<Book, BookRequiredProps>;

export type Unpromisify<T> = T extends Promise<infer R> ? R : never;
export type UnArray<T> = T extends Array<infer R> ? R : never;
// type pr = return <typeof getBooksByCategoryPromise> // type Promise

type pr = Unpromisify<ReturnType<typeof getBooksByCategoryPromise>>;
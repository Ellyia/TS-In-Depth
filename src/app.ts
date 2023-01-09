/* eslint-disable no-underscore-dangle */
/* eslint-disable no-redeclare */

import { ReferenceItem, UL, RefBook, Shelf } from './classes';
import { Book, Logger, Magazine, ShelfItem } from './interfaces';
// import RefBook from './classes/encyclopedia';
import { getObjectProperty, purge, printRefBook, calcTotalPages, getAllBooks, getBookAuthorByIndex, getBookByID, getBookTitlesByCategory ,getProperty, getTitles, createCustomer } from './functions';
// import type { Library } from './classes/library';
import { Library } from './classes/library';
import { Category } from './enums';
import { BookRequiredFields, CreateCustomerFunctionType, UpdatedBook } from './types';

showHello('greeting', 'TypeScript');

// параметри ф - коли объявляемо ф
// аргументи - задаемо коли ми викликаемо
// рест параметр - масив

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

// enum Category {JavaScript, CSS, HTML, TypeScript, Angular}; // перечисление - позволяет определить набор именнованных констант, которые описывают определенные состояния

// type Book = { // aleas - описуе объект: не важливо, використати type чи interface коли описуєш форму обєкта (потрібне присвоєння "=")
//     id: number;
//     title: string;
//     author: string;
//     available: boolean;
//     category: Category;
// };

// interface більш швидкі (продуктивніші) за aleas та їм не потрібні присвоєння

// interface DamageLogger {
//     (reason: string): void;
// }

// interface Book { // interface - описує лише форму обєкта і крапка. Можна обявити кілька однакових інтерфейсів (з однаковим іменем) - іх властивості поєднуються. З алеасами так не можна
//     id: number;
//     title: string;
//     author: string;
//     available: boolean;
//     category: Category;
//     pages?: number;
//     // markDamaged?: (reason: string) => void; // як проперти
//     // markDamaged?(reason: string): void; // як метод
//     markDamaged?: DamageLogger;
// };

// interface Person1 { // 01.12.22
//     name?: string;
//     email: string;
// }

// interface Author extends Person1 {
//     numBookPublished: number;
//     // name: string; // обязательным необязательное поле сделать можно, а наоборот нет
//     // email?: string; // обязательное поле необязательным сделать нельзя
// }
// const author: Author = {
//     numBookPublished: 2,
//     email: 'em',
//     name: 'обязательное поле',
// };

// interface Librarian extends Person1 {
//     department: string;
//     assistCustomer: (custName: string, booktitle: string) => void;
// }
//

// type BookProperties = keyof Book;

// type PersonBook = Person1 & Book;

// type BookOrUndefined = Book | undefined;

//
// function getAllBooks(): readonly Book[] {
//     const books = <const> [
//         { id: 1, title: 'Refactoring JavaScript', category: Category.JavaScript, author: 'Evan Burchard', available: true },
//         { id: 2, title: 'JavaScript Testing', category: Category.JavaScript, author: 'Liang Yuxian Eugene', available: false },
//         { id: 3, title: 'CSS Secrets', category: Category.CSS, author: 'Lea Verou', available: true },
//         { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', category: Category.JavaScript, author: 'Andrea Chiarelli', available: true }
//     ];

//     return books;
// }

// function logFirstAvailable(books: readonly Book[] = getAllBooks()): void {
//     console.log(`Namber of books: ${books.length}`);

//     const title = books.find(({available}) => available)?.title; // optional chaining - повертає undefined
//     console.log(`First available book: ${title}`);
// }

// function getBookTitlesByCategory(inputCategory: Category = Category.JavaScript): string[] {
//     const books = getAllBooks();

//     const titles = books
//         .filter(book => book.category === inputCategory)
//         .map(({title}) => title);

//     return titles;
// }

// function logBookTitles(titles: Array<string>): void {
//     titles.forEach(title => console.log(title));
// }

// function getBookAuthorByIndex(index: number): /*Tuple*/[title: string, author: string] {
//     const books = getAllBooks();

//     const {title, author} = books[index];
//     return [title, author];
// }

// function calcTotalPages(): void {
//     const data = <const> [
//         {lib: 'libName1', books: 1_000_000_000, avgPagesBook: 250},
//         {lib: 'libName2', books: 5_000_000_000, avgPagesBook: 300},
//         {lib: 'libName3', books: 3_000_000_000, avgPagesBook: 280}
//     ];

//     const r = data.reduce((acc: bigint, obj) => {
//         return acc + BigInt(obj.books) * BigInt(obj.avgPagesBook);
//     }, 0n);

//     console.log(r);
// }

// 15.11.22

// function createCustomerID(name: string, id: number): string {
//     return `${id}/${name}`;
// }

//  //  Task 03.01
//const myID: string = createCustomerID('Ann', 10);
// console.log(myID);

// let idGenerator: (name: string, id: number) => string; // функциональный тип - це супупність типів параметрів і типу повертаємого значення
//let idGenerator: typeof createCustomerID; // или // функциональный тип

// idGenerator = (name: string, id: number) => `${id}/${name}`; // функция
// idGenerator = createCustomerID; // можемо, бо типи однаковi

//
// function createCustomer(name: string, age?: number, city?: string): void { // ничего не возвращает
//     console.log(console.log(`Customer name ${name}`));

//     if (age) {
//         console.log(`Customer age ${age}`);
//     }

//     if (city) {
//         console.log(`Customer city ${city}`);
//     }
// }

// 22.11.22

// function getBookByID(id: Book['id']): BookOrUndefined { // Book | undefined
// // function getBookByID(id: number): Book {
//     const books = getAllBooks();

//     return books.find(book => book.id === id);
// }

// function checkoutBooks(customer: string, ...bookIDs: number[]): string[] {
//     console.log(`Costomer name: ${customer}`);

//     return bookIDs.map(id => getBookByID(id))
//         .filter(book => book.available)
//         .map(book => book.title);
// }

// functions overlload - ф. перегрузки
// function getTitles(author: string): string[]; // це сигнатура
// function getTitles(available: boolean): string[];
// function getTitles(id: number, available: boolean): string[];
// function getTitles(...args: [string | boolean] | [number, boolean]): string[] { // це реализация
//     const books = getAllBooks();

//     if (args.length === 1) {
//         const [arg] = args;

//         if (typeof arg === 'string') {
//             return books.filter(book => book.author === arg).map(book => book.title);
//         } else if (typeof arg === 'boolean') {
//             return books.filter(book => book.available === arg).map(book => book.title);
//         }

//     } else if (args.length === 2) {
//             const [id, available] = args;

//             if (typeof id === 'number' && typeof available === 'boolean') {
//                 return books.filter(book => book.id === id && book.available === available).map(book => book.title);
//             }

//     }
// }

// assertion functions - ф.ствердження
// function assertStringValue(data: any): asserts data is string {
//     if (typeof data !== 'string') {
//         throw new Error('value should have been a string');
//     }
// }

// function bookTitleTransform(title: any): string {
//     assertStringValue(title);
//     return [...title].reverse().join(''); // перевернуть строку
// }

// interfaces - описуе форму обекта 1;23;00 lecture
// властивість функціонального типу - є метод

        // не до практичної роботи - begin
// example 1
// interface LetterMap {
//     [index: string]: string;
//     first: string;
//     second?: string;
// }

// const map: LetterMap = {first: 'D'};
// map['second'] = 'A';
// map['third'] = 'C';

// example 2
// interface Colors {
//     [index: symbol]: number;
// }

// const colors: Colors = {};
// const red = Symbol('red');
// colors[red] = 255;
// const redValue = colors[red];

// example 3 шаблонний рядок

// interface DataOptions {
//     //[optName: `data-${string}`]: unknown;
//     //[optName: string | symbol]: any;
// }

// interface A { // у обєкті може бути 0 і більше властивостей
//     [prop: string]: string;
//     // [prop: string]: string | number;  // або так
// }

// interface TOptions {
//     duration?: number;
//     speed?: number;
// }

// let dataOptions: DataOptions = {
//     'data-x': 100,
//     //'unknown-property': true // так нельзя!
// }

// index access types

// type Persona = {age: number; name: string; alive: boolean}; // or inerface
// type I1 = Persona["age"]; // number - так можна отримати тип
// type I2 = Persona["age" | "name"]; // number | string  - так можна отримати типu

// const People = [
//     {name: "Anna", age: 15},
//     {name: "Boris", age: 23},
//     {name: "Chisa", age: 48},
// ]

// отримати тип обєкта масиву:
// type Persona = typeof People[number]; // type Person = {anme: string; age: number;}
// не до практичної роботи - end

// Practice 04.01

// function printBook(book: Book): void {
//     console.log(`${book.title} by ${book.author}`)
// }

// літерали - там, де є фігурні дужки // ! до класу (Class може реалізувати інтерфейс і щось ще/ додаткові властивості) це не відноситься
// const myBook: Book = {
//     id: 5,
//     title: 'Colors, Backgrounds, and Gradients',
//     author: 'Eric A. Meyer',
//     available: true,
//     category: Category.CSS,
//     // year: 2015, // якщо у змінної конкретного інетерфейса і їй присвоєно літерал, то в ньому повинні бути чітко ті властивості, які є в інтерфейсі (не більше і не менше)
//     // copies: 3,
//     pages: 280,
//     // markDamaged: (reason: string) => console.log(`Damaged: ${reason}`)
//     markDamaged(reason: string) {
//         console.log(`Damaged: ${reason}`);
//     }
// }

// printBook(myBook);
// myBook.markDamaged('missing back cover');


// 01.12.22
// 04.03
// const favoriteAuthor: Author = {
//     name: 'Anna',
//     email: 'email',
//     numBookPublished: 2,
// }
// //
// const favoriteLibrerian: Librarian = {
//     name: 'Boris',
//     email: 'email',
//     department: 'classical literature',
//     assistCustomer: null

// }
// //

// // let title = offer?.book?.getTitle()// optional chaining - повертае undefined, якщо не знаходить

// const offer: any = {
//     book: {
//         title: 'Essential TypeScript',
//     },
//}

// console.log(offer.magazine?.getTitle())
// console.log(offer.book.getTitle?.()) // is not a function - не иснуе - з ?. поверне undefined
// console.log(offer.book.authors?.[10]?.) // коли э складни обекти чи велика вкладенисть

// keyof operator

// function getProperty(book: Book, prop: BookProperties): any {
//     const value = book[prop];
//     return typeof value === 'function' ? value.name : value;
// }

// function setDefaultConfig(options: TOptions) {
//     options.duration ??= 100;
//     options.speed ??= 60;

//     return options;
// }

// 2.12.22
// 05
// class ReferenceItem {
// abstract class ReferenceItem {
//     // title: string;
//     // year: number;

//     // constructor(newTitle: string, newYear: number) {
//     //     console.log('Creating a new ReferenceItem...');
//     //     this.title = newTitle;
//     //     this.year = newYear;
//     // }

//     #id: number; // hard-private

//     private _publisher: string; // soft-private

//     get publisher(): string {
//         return this._publisher.toUpperCase();
//     }

//     set publisher(newPublisher: string) {
//         this._publisher = newPublisher;
//     }

//     static department: string = 'Research Dep.'; // инициализация - присваивание, когда прописиваем после обьявления: = 'Research Dep.';

//     constructor(
//         id: number,
//         public title: string,
//         // privat year: number // не видно у потомков из-за модификатора privat
//         protected year: number // privat - не можем использовать в потомках, а protected - можем, а напрямую - нет
//         ) {
//         console.log('Creating a new ReferenceItem...');
//         this.#id = id;
//     }

//     printItem(): void {
//         console.log(`${this.title} was published in ${this.year}`);
//         console.log(ReferenceItem.department); // вивести значення статичної властивості - через клас
//         console.log(Object.getPrototypeOf(this).constructor.department);
//     }

//     getID(): number {
//         return this.#id;
//     }

//     abstract printCitation(): void; // абстрактний метод - це тільки сигнатура (декларація); без реалізації
//     // заставляє нащадків обовʼязково реалізовувати абстрактні методи
// }

// classes - шаблон для створення однотипних обектив (вони видризняются станом (значеннями у властивостях) state а схожи behavior - поведением - методами) з реализацией
// використання для анотации - опису - з позиции типу та значення - з реализацией (у интерфейса только сигнатура - тип)

// constructor - функция, яка створюе ...

// 6.12.22

// абстрактні класи: я не можу створити екземпрляр цього класу, але можу використати як базовий: використати його реалізацію (властивостей, методів) в нащадках
// як і interface - не можемо створити за допомогою NEW
// або
// якщо конструктор protected, то не можна створювати екземпляри такого класу (але не може бути в ньому абстрактних класів та властивостей)

// class Encyclopedia extends ReferenceItem {
//     constructor (
//         id: number,
//         title: string,
//         year: number,
//         public edition: number
//     ) {
//         super(id, title, year);
//     }

//     override printItem(): void {
//         super.printItem(); // беремо все, що вже робив цей метод з базового класу через super
//         console.log(`Edition: ${this.edition} (${this.year})`); // додатково нове
//     }

//     printCitation(): void {
//         console.log(`${this.title} - ${this.year}`);
//     }
// }

// функціональні типи і інтерфейси для класів та класс конструктор - коли пишу функцію, яка приймає клас чи повертає клас
// interface B {
//     b: number,
// }
// class UniversityLibrarian implements Librarian {
//     name: string;
//     email: string;
//     department: string;

//    // b: number = 1;

//     assistCustomer(custName: string, booktitle: string): void {
//         console.log(`${this.name} is assisting ${custName} width book ${booktitle}`);
//     }
//}

// intersection(перетин ( & )- для обʼєктів - будуть всі методи із кожного типу) and union(обʼєднання - для обʼєктів та примітивів)

// 8.12.22
// обʼєднання ( | ) - будуть лише ті методи, які є в кожному типі (і там є і там є)

// type guards function - функції захисники типу (коли є бінарне обʼєднання - є 2 типи)

// TASKS //
    // 02.01
// console.log(getAllBooks());
// logFirstAvailable(getAllBooks());
// logBookTitles(getBookTitlesByCategory(Category.CSS));
// console.log(getBookAuthorByIndex(0));
// calcTotalPages();
// console.log(idGenerator('Boris', 20));

// createCustomer('Asta');
// createCustomer('Asta', 30);
// createCustomer('Asta', 30, 'Kopen');

// console.log(getBookTitlesByCategory());
// console.log(getBookTitlesByCategory(Category.CSS));
// logFirstAvailable();
// console.log(getBookByID(1));

// console.log(checkoutBooks('noname customer', 1, 2, 3, 4)); // or
// console.log(checkoutBooks('noname customer', ...[1, 2, 3, 4]));
        // 03.03
// console.log(getTitles(1, true));
// console.log(getTitles(true));
// console.log(getTitles(false));
// console.log(getTitles(1, false));
// console.log(getTitles('Lea Verou'));
        // 03.04
// bookTitleTransform('Learn TypeScript');
// bookTitleTransform(123);
        // 30.11.22
        // 04.02
// const logDamage: DamageLogger = (reason: string) => console.log(`Damaged: ${reason}`);
// const logDamage: Logger = (reason: string) => console.log(`Damaged: ${reason}`);
// logDamage('missing back cover');
        // 04.05
// console.log(getProperty(myBook, 'title'));
// console.log(getProperty(myBook, 'markDamaged'));
// console.log(getProperty(myBook, 'isbn'));
        // 05.01
// const ref = new ReferenceItem(1, 'learn TS', 2022); // проинициализируйте змінну реф обєктом ReferenceItem
// console.log(ref)
// ref.printItem();
// ref.publisher = 'abc group'; // set - реалізація властивості встановлення значення (не метод)
// console.log(ref.publisher); // get - реалізація властивості зчитування значення (не метод)
// console.log(ref.getID());
        // 05.02 // 05.03
//const refBook: Encyclopedia = new Encyclopedia(1, 'learn TS', 2022, 2);
// const refBook: RefBook = new RefBook(1, 'learn TS', 2022, 2);
// refBook.printItem();
// console.log(refBook);
// refBook.printCitation();
        // 05.04
// const favoriteLibrarian = new UL.UniversityLibrarian(); // різний тип
// const favoriteLibrarian: Librarian & B = new UL.UniversityLibrarian(); // & - операція перетину
// favoriteLibrarian.name = 'Annet';
// favoriteLibrarian.assistCustomer('Bet', 'Learn TS');
// favoriteLibrarian.b = 2;

//const s: string | number = 'abc';
// (<string>s).toUpperCase(); // це звуження типу <оце>s
// або (s as string).toUpperCase();
        // 05.05
// const personBook: PersonBook = {
//     name: 'Annet',
//     author: 'Annet',
//     available: false,
//     category: Category.Angular,
//     email: 'annax@ann.com',
//     id: 1,
//     title: 'Unknown'
// }

// const options = {};
// const options1: TOptions = {duration: 800};
// const options2 = setDefaultConfig(options);
// console.log(options)
// console.log(options1)
// const options01 = setDefaultConfig(options1);
// console.log(options1, options01)
// console.log(options2)
// console.log(Object.is(options, options2));

// export & re-export 13.12.22
        //06.03 // 06.04
// const refBook: RefBook = new RefBook(2, 'Learn TypeScript', 2022, 2);
// printRefBook(refBook);

// const favoriteLibrarian = new UL.UniversityLibrarian();
// printRefBook(favoriteLibrarian);

// dynamic import expression
        // Task 06.05
// const flag = true; // - условие использования импорта, чтобы импортировать не всегда

// if (flag) {
//         import('./classes')
//                 .then(o => {
//                        const reader = new o.Reader();
//                        reader.name = 'Annet';
//                        reader.take(getAllBooks()[0]);

//                        console.log(reader);
//                 })
//                 .catch(err => console.log(err))
//                 .finally(() => console.log('complite!'))
// }

// await
// if (flag) {
//     const o = await import('./classes');
//     const reader = new o.Reader();
//     reader.name = 'Annet';
//     reader.take(getAllBooks()[0]);

//     console.log(reader);
// }

// type-only imports and exports - імпортують типи для анотацій (є лише в TS)

        // Task 06.06
//   export type { Library } from './classes/library'; // як тип, а не значення
//   let library: Library; // як тип можу використовувати
// let library: Library = new Library; // не можу так використовувати 'new Library'як значення

// let library: Library = new Library();
// let library: Library = {
//         id: 1,
//         address: '',
//         name: 'Anna'
// };

//// Generics - загальні типи - 13.12.22 - працюють з множиною типів

        // Task 07.01
const inventory: Book[] = [
        {id: 10, title: 'The C Programming Language', author: '???', available: true, category: Category.Software},
        {id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software},
        {id: 12, title: '8-Bit Graphics width Cobol', author: 'A. B.', available: true, category: Category.Software},
        {id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software},
];

// const result1 = purge<Book>(inventory);
// console.log(result1);
// const result2 = purge([1, 2, 3]);
// console.log(result2);

// 14.12.22 Generic interfaces and classes
        // Task 07.02
// const bookShelf: Shelf<Book> = new Shelf<Book>(); // or
// const bookShelf = new Shelf<Book>();
// inventory.forEach(book => bookShelf.add(book));
// console.log(bookShelf.getFirst().title);

// const magazines: Magazine[] = [
//         { title: 'Programming Language Monthly', publisher: 'Code Mags'},
//         { title: 'Literary Fiction Quaterly', publisher: 'College Press'},
//         { title: 'Five Points', publisher: 'GSU'}
// ];

// const magazineShelf = new Shelf<Magazine>();
// magazines.forEach(mag => magazineShelf.add(mag));
// console.log(magazineShelf.getFirst().title);

// Generic constrains - обмеження - 15.12.22
        // 07.03
// magazineShelf.printTitles();
// console.log(magazineShelf.find('Five Points'));

// console.log(getObjectProperty(magazines[0], 'title'));
// console.log(getObjectProperty<Book, 'author' | 'title'>(inventory[1], 'author'));

// Mapped Types - сопоставимі типи - конструкція для перетворення типів, ітерування по властивостях даного інтерфейсу або типу, який описує обʼєкт

// 21.12.22
        // 07.04
// const bookRequiredFields: BookRequiredFields = {
//     author: 'Anna',
//     available: false,
//     category: Category.Angular,
//     id: 1,
//     markDamaged: null,
//     pages: 200,
//     title: 'Learn Angular',
// }

// const updatedBook: UpdatedBook = {
//         id: 1,
//         pages: 300
// };

// let params: Parameters<CreateCustomerFunctionType>;
// params = ['Anna', 30, 'Kyiv'];
// createCustomer(...params);

// conditional types - умовні типи (виглядає як тернарний оператор) 07.05

// 08.01, 08.02
// const favouriteLibrarian = new UL.UniversityLibrarian();
// const favouriteLibrarian1 = new UL.UniversityLibrarian();
// favouriteLibrarian['a'] = 1;
// UL.UniversityLibrarian['a'] = 2; // на класі не дозволяє
// UL.UniversityLibrarian.prototype['a'] = 3; // не дозволяє

// console.log(favouriteLibrarian);
// favouriteLibrarian.name = 'Anna';
// favouriteLibrarian['printLibrarian']();

// 08.03
// const favouriteLibrarian = new UL.UniversityLibrarian();
// console.log(favouriteLibrarian);
// favouriteLibrarian.assistFaculty = null; //
// favouriteLibrarian.teachCommunity = null;

// 08.04
// const refBook: RefBook = new RefBook(2, 'Learn TypeScript', 2022, 2);
// refBook.printItem();

// 08.05
// const favouriteLibrarian = new UL.UniversityLibrarian();
// console.log(favouriteLibrarian);
// favouriteLibrarian.name = 'Anna';
// favouriteLibrarian.assistCustomer('Boris', 'LearnTypeScript');

// 08.06
// const favouriteLibrarian = new UL.UniversityLibrarian();
// favouriteLibrarian.name = 'Anna';
// console.log(favouriteLibrarian.name);
// favouriteLibrarian.assistCustomer('Boris', 'LearnTypeScript');
// console.log(favouriteLibrarian);
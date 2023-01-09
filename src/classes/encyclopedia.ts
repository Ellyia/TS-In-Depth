// import { ReferenceItem } from "../classes";
import { ReferenceItem } from './reference-item';

export default class Encyclopedia extends ReferenceItem {
    constructor (
        id: number,
        title: string,
        year: number,
        public edition: number
    ) {
        super(id, title, year);
    }

    override printItem(): void {
        super.printItem(); // беремо все, що вже робив цей метод з базового класу через super
        console.log(`Edition: ${this.edition} (${this.year})`); // додатково нове
    }

    printCitation(): void {
        console.log(`${this.title} - ${this.year}`);
    }
}

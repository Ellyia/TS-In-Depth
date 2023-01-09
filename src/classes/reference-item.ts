/* eslint-disable no-underscore-dangle */

import { timeout } from "../decorators";

abstract class ReferenceItem {
    #id: number; // hard-private

    private _publisher: string; // soft-private

    get publisher(): string {
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }

    static department: string = 'Research Dep.'; // инициализация - присваивание, когда прописиваем после обьявления: = 'Research Dep.';

    constructor(
        id: number,
        public title: string,
        protected year: number // privat - не можем использовать в потомках, а protected - можем, а напрямую - нет
        ) {
        console.log('Creating a new ReferenceItem...');
        this.#id = id;
    }

    @timeout(2000)
    printItem(): void {
        console.log(`${this.title} was published in ${this.year}`);
        console.log(ReferenceItem.department); // вивести значення статичної властивості - через клас
        console.log(Object.getPrototypeOf(this).constructor.department);
    }

    getID(): number {
        return this.#id;
    }

    abstract printCitation(): void;
}

export { ReferenceItem };
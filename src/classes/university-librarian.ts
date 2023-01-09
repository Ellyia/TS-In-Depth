
import { format, logger, logMethod, logParameter, sealed, writable } from '../decorators';
import * as Interfaces from './../interfaces';

// interface B {
//     b: number,
// }

// @sealed('UniversityLibrarian')
// @logger
class UniversityLibrarian implements Interfaces.Librarian {
    @format()
    name: string;
    email: string;
    department: string;

   // b: number = 1;
    @logMethod
    assistCustomer(@logParameter custName: string, @logParameter booktitle: string): void {
        console.log(`${this.name} is assisting ${custName} width book ${booktitle}`);
    }

    @writable(true)
    // static assistFaculty(): void {
    assistFaculty(): void {
        console.log('Assisting faculty');
    }

    @writable(false)
    teachCommunity(): void {
        console.log('Teaching community');
    }
}

export { UniversityLibrarian };
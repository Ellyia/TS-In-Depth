showHello('greeting', 'TypeScript');
function showHello(divName, name) {
    var elt = document.getElementById(divName);
    elt.innerText = "Hello from ".concat(name);
}
var Category;
(function (Category) {
    Category[Category["JavaScript"] = 0] = "JavaScript";
    Category[Category["CSS"] = 1] = "CSS";
    Category[Category["HTML"] = 2] = "HTML";
    Category[Category["TypeScript"] = 3] = "TypeScript";
    Category[Category["Angular"] = 4] = "Angular";
})(Category || (Category = {}));
;
function getAllBooks() {
    var books = [
        { id: 1, title: 'Refactoring JavaScript', category: Category.JavaScript, author: 'Evan Burchard', available: true },
        { id: 2, title: 'JavaScript Testing', category: Category.JavaScript, author: 'Liang Yuxian Eugene', available: false },
        { id: 3, title: 'CSS Secrets', category: Category.CSS, author: 'Lea Verou', available: true },
        { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', category: Category.JavaScript, author: 'Andrea Chiarelli', available: true }
    ];
    return books;
}
function logFirstAvailable(books) {
    var _a;
    console.log("Namber of books: ".concat(books.length));
    var title = (_a = books.find(function (_a) {
        var available = _a.available;
        return available;
    })) === null || _a === void 0 ? void 0 : _a.title; // optional chaining - повертає undefined
    console.log("First available book: ".concat(title));
}
console.log(getAllBooks());
logFirstAvailable(getAllBooks());
function getBookTitlesByCategory(inputCategory) {
    var books = getAllBooks();
    var titles = books
        .filter(function (book) { return book.category === inputCategory; })
        .map(function (_a) {
        var title = _a.title;
        return title;
    });
    return titles;
}
function logBookTitles(titles) {
    titles.forEach(function (title) { return console.log(title); });
}
logBookTitles(getBookTitlesByCategory(Category.CSS));
function getBookAuthorByIndex(index) {
    var books = getAllBooks();
    var _a = books[index], title = _a.title, author = _a.author;
    return [title, author];
}
console.log(getBookAuthorByIndex(0));
function calcTotalPages() {
    var data = [
        { lib: 'libName1', books: 1000000000, avgPagesBook: 250 },
        { lib: 'libName2', books: 5000000000, avgPagesBook: 300 },
        { lib: 'libName3', books: 3000000000, avgPagesBook: 280 }
    ];
    var r = data.reduce(function (acc, obj) {
        return acc + BigInt(obj.books) * BigInt(obj.avgPagesBook);
    }, 0n);
    console.log(r);
}
calcTotalPages();

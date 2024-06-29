// function borrowBook(bookName) {

//   console.log(`${this.name} borrowed ${bookName}.`);
    
// }
    
//      const studentA = { name: 'Alice' };
    
//     const studentB = { name: 'Bob' };
    
//     borrowBook.call(studentA, 'The Great Gatsby');

    
//  borrowBook.call(studentB, 'Moby Dick');


// function borrowbooks(book1, book2) {
//     console.log(`${this.name} borrowed ${book1} and ${book2}`);
// }

// const books = ['The Catcher in the Rye', 'To Kill a Mockingbird'];
// const studentA = {
//     name: 'Student A'
// };

// borrowbooks.apply(studentA, books);






function returnBook(bookName) {
    console.log(`${this.name} returned ${bookName}.`);
}

const studentA = {
    name: 'Student A'
};

const studentB = {
    name: 'Student B'
};

const studentAReturn = returnBook.bind(studentA);
const studentBReturn = returnBook.bind(studentB);

studentAReturn('The Great Gatsby');
studentBReturn('Moby Dick');




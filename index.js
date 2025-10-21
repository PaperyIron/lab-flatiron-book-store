const bookStore = {
    name: 'Flatbooks Technical Books',
    books: [
        {
            id:1,
            title: 'Eloquent JavaScript: A Modern Introduction to Programming',
            author: 'Marjin Haverbeke',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
            
        },
        {
            id:2,
            title: 'JavaScript & JQuery: Interactive Front-End Web Development',
            author: 'Jon Duckett',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/31SRWF+LkKL._SX398_BO1,204,203,200_.jpg'
        },
        {
            id:3,
            title: 'JavaScript: The Good Parts',
            author: 'Douglas Crockford',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
        },
        {
            id:4,
            title: 'JavaScript: The Definitive Guide',
            author: 'David Flanagan',
            imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51wijnc-Y8L._SX379_BO1,204,203,200_.jpg"
            
        },
        {
            id:5,
            title: 'You Don’t Know JS',
            author: 'Kyle Simpson',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41T5H8u7fUL._SX331_BO1,204,203,200_.jpg'
        },
        {
            id:6,
            title: 'Cracking the Coding Interview',
            author: 'Gayle Laakmann McDowell',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SY344_BO1,204,203,200_.jpg'
            
        }
    ]
}

// Write your code here!
const bookStoreTitle = document.querySelector("#header"); //select h1 element

bookStoreTitle.textContent = bookStore.name; //change h1 to title of bookstore

for(let i = [0]; i < bookStore.books.length; i++) { //for loop to loop over each book in bookStore array
    const book = bookStore.books[i];

    const bookContainer = document.createElement("li"); //create new li
    const bookTitle = document.createElement("h3"); //create new h3
    const bookAuthor = document.createElement("p"); //create new p
    const bookImage = document.createElement("img"); //create new img

    bookTitle.textContent = book.title; //change text content of each element to reflect the bookstore array
    bookAuthor.textContent = book.author;
    bookImage.src = book.imageUrl;

    bookContainer.append(bookTitle); //append the new elements to the book container
    bookContainer.append(bookAuthor);
    bookContainer.append(bookImage);

    const bookList = document.querySelector("#book-list"); //select ul element
    bookList.append(bookContainer);     //append the new container to the DOM
};

const exampleBook = document.querySelector("#delete-this"); //remove the example book from the list.
exampleBook.remove();
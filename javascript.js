let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const addBook = document.querySelector(".addbook");
addBook.addEventListener('click', (event) => {
    event.preventDefault()
    addBooktoLibrary();
});

function addBooktoLibrary() {
    const title = document.getElementById("title");
    const author = document.getElementById("author");
    const pages = document.getElementById("pages");
    const read = document.getElementById("read");

    let readRegex = /^(Yes|yes|No|no)$/;
    if (title.value && author.value && pages.value && readRegex.test(read.value)) {
        const newBook = new Book(title.value, author.value, pages.value, read.value);
        myLibrary.push(newBook);

        const addedBook = document.createElement("div");
        addedBook.className = "card";

        const library = document.querySelector(".library");
        library.appendChild(addedBook);

        const addedTitle = document.createElement("p");
        addedTitle.className = "title-card";
        addedTitle.innerHTML = title.value;

        const addedAuthor = document.createElement("p");
        addedAuthor.className = "author-card";
        addedAuthor.innerHTML = author.value;

        const addedPages = document.createElement("p");
        addedPages.className = "pages-card";
        addedPages.innerHTML = pages.value;

        const addedRead = document.createElement("p");
        addedRead.className = "read-card";
        addedRead.innerHTML = read.value.toUpperCase();



        const readButton = document.createElement("button");
        readButton.className = "readButton-card";
        readButton.innerHTML = "Change Read";

        readButton.addEventListener('click', () => {
            if (addedRead.innerHTML == "YES") {
                addedRead.innerHTML = "NO"; 
            } else {
                addedRead.innerHTML = "YES";
            }
        });


        const removeButton = document.createElement("button");
        removeButton.className = "removeButton-card";
        removeButton.innerHTML = "❌";

        removeButton.addEventListener('click', () => {
            addedBook.remove();
        });

        addedBook.appendChild(addedTitle);
        addedBook.appendChild(addedAuthor);
        addedBook.appendChild(addedPages);
        addedBook.appendChild(addedRead);
        addedBook.appendChild(readButton);
        addedBook.appendChild(removeButton);
    } else {
        alert("Enter the correct information");
    }
}



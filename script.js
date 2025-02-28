const form = document.querySelector("#form");

function submitting() {
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        let text = document.querySelector("#quote").value;
        let author = document.querySelector("#author").value;
        console.log(text);
        console.log(author);
        addQuote(quote, author);
    })
}

function addQuote(quote, author) {
    let textQuote = document.createElement("p");
    let textAuthor = document.createElement("p");
    
    textQuote.textContent = quote;
    textAuthor.textContent = author;

    textQuote.classList.add("text");
    textAuthor.classList.add("author");

    let quoteList = document.createElement("div");
    quoteList.classList.add("quote");
    
    quoteList.appendChild(textQuote);
    quoteList.appendChild(textAuthor);

    document.querySelector(".quote-list").appendChild(quoteList);
}

submitting();
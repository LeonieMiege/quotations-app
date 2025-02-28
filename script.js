const form = document.querySelector("#form");

function submitting() {
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        let text = document.querySelector("#quote").value;
        let author = document.querySelector("#author").value;
        console.log(text);
        console.log(author);
    })
}

submitting();
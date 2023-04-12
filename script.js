document.querySelector('#todoform').addEventListener("submit", function (event) {
    event.preventDefault();
    var newEl = document.createElement("li");
    newEl.textContent = textfield.value;

    document.body.appendChild(newEl);

})
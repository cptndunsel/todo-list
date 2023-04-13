document.querySelector('#todoform').addEventListener("submit", function (event) {
    event.preventDefault();
    var newEl = document.createElement("li");

    if (textfield.value === '') {
        return; //prevents submission of empty input field
    }

    newEl.textContent = textfield.value;
    textfield.value = ''; //resets the input to blank

    document.body.appendChild(newEl);
    
})

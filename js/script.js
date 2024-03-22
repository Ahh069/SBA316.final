// Cache at least one element using selectElementById.
const title = document.getElementById('main-heading');
console.log(title);

// Cache at least one element using querySelector or querySelectorAll.
const container = document.querySelectorAll('div');
console.log(container);

// Use the parent-child-sibling relationship to navigate between elements at least once (firstChild, lastChild, parentNode, nextElementSibling, etc.).
document.addEventListener("DOMContentLoaded", function () {
    var firstNameInput = document.getElementById("firstName");
    var lastNameLabel = firstNameInput.parentElement.nextElementSibling.firstChild;

    console.log("The label of the Last Name input field is:", lastNameLabel.textContent);
});


// Create at least one element using createElement.
let aTag = document.createElement('a');
aTag.textContent = "About Us";
aTag.setAttribute('href', 'https://www.google.com');
console.log(aTag);

// Iterate over a collection of elements to accomplish some task.
document.addEventListener("DOMContentLoaded", function () {
    var registerBtn = document.getElementById("registerBtn");
    registerBtn.addEventListener("click", function () {

// Modify the HTML or text content of at least one element in response to user interaction using innerHTML, innerText, or textContent.
        document.querySelector('.cool').textContent = 'Registration Successful!';
        console.log(registerBtn);

        // Iterate over input fields and log their IDs and values
        var inputs = document.querySelectorAll('input[type="text"], input[type="date"], input[type="radio"], input[type="checkbox"]');
        inputs.forEach(function (input) {
            console.log("Input ID:", input.id, "Value:", input.value);
        });
    });
});

// Use appendChild and/or prepend to add new elements to the DOM.
document.body.appendChild(aTag);

// // Modify the style and/or CSS classes of an element in response to user interactions using the style or classList properties.
// body.style.backgroundColor = 'blue';
// console.log()








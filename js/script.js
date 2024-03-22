// Cache at least one element using selectElementById.
const title = document.getElementById('main-heading');
console.log(title);

// Cache at least one element using querySelector or querySelectorAll.
const container = document.querySelectorAll('div');
console.log(container);

// Use the parent-child-sibling relationship to navigate between elements at least once (firstChild, lastChild, parentNode, nextElementSibling, etc.).
document.addEventListener("DOMContentLoaded", function() {
    var firstNameInput = document.getElementById("firstName");
    var lastNameLabel = firstNameInput.parentElement.nextElementSibling.firstChild;
    
    console.log("The label of the Last Name input field is:", lastNameLabel.textContent);
});


// Create at least one element using createElement.
let aTag = document.createElement('a');
aTag.textContent = "About Us";
aTag.setAttribute('href', 'https://www.google.com');
console.log(aTag);




function register() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var dob = document.getElementById("dob").value;
    var sportsCheckbox = document.getElementById("sportsCheckbox").checked;
    var eatCheckbox = document.getElementById("eatCheckbox").checked;
    var sleepCheckbox = document.getElementById("sleepCheckbox").checked;

     // Selecting the additional input element
     var additionalInput = document.getElementById("additionalInput").value;
    
    // You can do whatever you want with the collected data
    console.log("First Name:", firstName);

    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
    console.log("Gender:", gender);
    console.log("Date of Birth:", dob);
    console.log("Sports Checkbox:", sportsCheckbox);
    console.log("Eat Checkbox:", eatCheckbox);
    console.log("Sleep Checkbox:", sleepCheckbox);
}
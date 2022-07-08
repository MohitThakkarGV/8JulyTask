
function validation()
{
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const email = document.getElementById('emailAddress').value;
    const gender = document.getElementById('gender').value
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    console.log("firstName ", firstName);
    console.log("lastName ",lastName);
    console.log("Phone ",lastName);
    console.log("email ", email);
    console.log("Gender ==> ", gender);
    console.log("password, confirmPassword", password, confirmPassword);


    if(firstName.trim().length == 0 || firstName.length < 3)
    {
        alert("First Name is required and must be at least 3 characters");
        return;
    }
    if(lastName.trim().length == 0 || lastName.length < 3)
    {
        alert("Last Name is required and must be at least 3 characters");
        return;
    }
    if(phoneNumber.trim().length == 0 || phoneNumber.length < 10 || phoneNumber.length > 10)
    {
        alert("Phone Number is required and must be at least 10 characters");
        return;
    }
    if(email.trim().length == 0 || email.includes('@') == false || email.includes('.') == false)
    {
        alert("Email is required and must be a valid email address");
        return;
    }
   

    if(password.length < 8 && password.trim().length == 0)
    {
        alert("Password must have one capital letter, number, length greater than 8")
        return;
    }
    if(confirmPassword != password)
    {
        alert("Password and Confirm Password must match");
        return;
    }

   if(firstName.trim().length > 0 && lastName.trim().length > 0 && phoneNumber.trim().length > 9 && 
    email.trim().length > 0 && password.trim().length > 0 && confirmPassword.trim().length > 0 && password == confirmPassword &&
    email.split('@').length > 1 && email.split('.').length > 1)
   {
       
       const user = {
        firstName: firstName.split(" ").join(""),
        lastName: lastName,
        phoneNumber: phoneNumber,
        email: email,
        password: password,
        confirmPassword: confirmPassword
    
    }
    localStorage.setItem('user', JSON.stringify(user));
    console.log(user);
    alert("Registration Successful");
    document.getElementById('loginform').style.display = "block";
    document.getElementById('registerform').style.display = "none";
   }

}

function login()
{
    const loginEmail = document.getElementById('loginEmail').value;
    const loginPassword = document.getElementById('loginPassword').value;

    console.log("loginEmail ", loginEmail);
    console.log("loginPassword ",loginPassword);

    if(loginEmail.trim().length == 0 || loginEmail.includes('@') == false || loginEmail.includes('.') == false)
    {
        alert("Email is required and must be a valid email address");
    }
    if(loginPassword.trim().length == 0)
    {
        alert("Password is required");
    }
    var user =  JSON.parse(localStorage.getItem('user')); 
    console.log(user);
    if(user.email == loginEmail && user.password == loginPassword)
    {
        alert("Login Successful");
    }
    else
    {
        alert("Login Failed because of invalid credentials");
    }

}
function signup() {
    var firstName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var age = document.getElementById("age");
    var gender = document.getElementById("gender");
    var phone = document.getElementById("phone");
    var adress = document.getElementById("adress");
    var country = document.getElementById("country");
    var description =document.getElementById("description");
    var message = document.getElementById("message");

    var user = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value,
        age: age.value,
        gender: gender.value,
        phone: phone.value,
        adress: adress.value,
        country: country.value,
        description: description.value
    }
    var users = JSON.parse(localStorage.getItem("users")) || [];
    // get indx
    var userIdx = users.findIndex(function (val) {
        return val.email.toLowerCase() === user.email.toLowerCase()
    });

    if (userIdx === -1) {
        // this user is not exist
        users.push(user);
        // store in storage
        localStorage.setItem("users", JSON.stringify(users));
        // redirect to login page
        location.href = "login.html";
    } else {
        message.innerHTML = user.email + " use in another account";
    }
    // clear state
    setTimeout(() => {
        message.innerHTML = "";
    }, 2000);


    // console.log(user);


}

function login() {
    // get input values
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var message = document.getElementById("message");

    var user = {
        email: email.value,
        password: password.value,
    }

    var users = JSON.parse(localStorage.getItem("users")) || [];
    // get indx
    var currentUser = users.find(function (val) {
        return val.email.toLowerCase() === user.email.toLowerCase() && val.password === user.password;
    });

    if (currentUser) {
        localStorage.setItem("user", JSON.stringify(currentUser));
        // user login
        location.href = "dashboard.html";
    } else {
        message.innerHTML = "Invalid credentials";
    }
    // clear state
    setTimeout(() => {
        message.innerHTML = "";
    }, 2000);
}

function logout() {
    var message = document.getElementById("message");
    localStorage.removeItem("user");
    message.innerHTML = "Good Bye.!";
    // clear state
    setTimeout(() => {
        location.href = "login.html";
    }, 2000);
}

var list = document.getElementById("list");
function setDetails() {
    var title = document.getElementById("title").value;
    var description = document.getElementById("Description").value;

    var li = document.createElement("li");
    li.innerHTML = `
    <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="https://image.freepik.com/free-psd/youtube-mobile-phone-mockup_106244-1675.jpg" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${title}</h5>
    <p class="card-text">${description}</p>

  </div>
</div>
    `

    list.appendChild(li);

}

function getCurrentUser() {
    var detail = document.getElementById("detial");
    var user = JSON.parse(localStorage.getItem("user"));
    detail.innerHTML = "Loggedin as " + user.email.split("@")[0];
    firstName.innerHTML = user.firstName;
    email.innerHTML = user.email;
    phone.innerHTML = user.phone;
    adress.innerHTML = user.adress;
    description.innerHTML= user.description;

}
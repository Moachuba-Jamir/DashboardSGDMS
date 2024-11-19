const adminLogin = "https://dglmawjx1pzub.cloudfront.net/dashAdmin";
var login = document.querySelector(".login-form");

function isLoggedOut() {
  fetch("https://dglmawjx1pzub.cloudfront.net/dashAdmin/checkLogout")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (data.isLoggedOut) {
        // disable the back button
        window.history.go(1);
      } else {
        window.location.href = "./dashboard.html";
      }   
    })
    .catch((err) => {
      console.log("Could not automatically redirect user to dashboard", err);
    });
}

login.addEventListener("submit", (event) => {
  event.preventDefault();
  // get form values
  var username = document.getElementById("username").value.trim();
  var password = document.getElementById("password").value.trim();

  // post the form values to the required endpoint
  fetch("https://dglmawjx1pzub.cloudfront.net/dashAdmin", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data.isLoggedIn);
      if (data.success) {
        window.location.href = "./dashboard.html";
        window.history.replaceState({}, "", "./dashboard.html");
        // disabling the back button
        window.history.pushState(null, "", "./dashboard.html");
      } else {
        alert("Login failed. Please enter the correct credentials!");
      }
    })
    .catch((err) => {
      console.log("there was an error loggin admin user in ", err);
    });
});

document.addEventListener("DOMContentLoaded", () => {
  isLoggedOut();
});

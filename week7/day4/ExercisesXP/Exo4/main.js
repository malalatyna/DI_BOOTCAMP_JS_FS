//Exercise 4 : Welcome
//John has just signed in to your website and you want to welcome him.
//Create a Bootstrap Navbar in your HTML file.
//In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
//The function should add a div in the nabvar, displaying the name of the user and his profile picture.


  (function(username) {
    // Create user info element
    let userInfo = document.createElement("div");
  
    // Create user profile picture element
    let userProfile = document.createElement("img");
    userProfile.src = "https://picsum.photos/200"; 
    userProfile.classList.add("rounded-circle", "mr-2");
    userProfile.style.width = "40px"; 
  
    // Create user name element
    let userName = document.createElement("span");
    userName.textContent = username;
  
    // Append profile picture and name to the user info element
    userInfo.appendChild(userProfile);
    userInfo.appendChild(userName);
  
    // Append the user info element to the navbar
    let userNav = document.getElementById("user-profile");
    userNav.appendChild(userInfo);
  })("John");
  
// Username Array
let usernames = ["Harry", "Elizabeth", "Shana"];


function validateForm() {
  const password = document.forms["form"]["password"].value;
  const confirmPassword = document.forms["form"]["confirmPassword"].value;
  const username = document.forms["form"]["username"].value;

  // If passwords do not match 
  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return false;
  }
  //If username is in Username Array
  if (usernames.includes(username)) {
    alert("Username is already taken, please try a different username.");
    return false;
  } else {
    //If username is not in the array, add it and then give success message
    usernames.push(username);
    alert("Username accepted.");
    return true;
  }
}
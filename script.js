// Username Array to 'act' as a database
//Array will not reset upon submition / page refresh however because it isn't locally stored or using an actual DB
const usernames = ["Harry", "Elizabeth", "Shana"];

//Function for form validation
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
    alert("Welcome");
    return true;
  }
}
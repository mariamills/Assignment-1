// Username Array to 'act' as a database
//Array will not reset upon submition / page refresh however because it isn't locally stored or using an actual DB
const usernames = ["Harry", "Elizabeth", "Shana"];

//Getting the canvas by Class name using querySelector
const canvas = document.querySelector('.canvas');
// Use getContext to use the canvas for drawing
const ctx = canvas.getContext("2d");


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

//Function for drawing text using HTML Canvas
function drawText() {
  //Setting fill (color)
  ctx.fillStyle = "#262261";
  //Setting the font style for the text after
  ctx.font = "Italic 30px Sans-Serif";

  ctx.textBaseline = "middle";

  ctx.fillText("Move aside!", 40, 100);

  //Setting the font style for the text after
  ctx.font = "Bold 24px Sans-Serif";
  //Stroke text, makes text using outline
  ctx.strokeText("Hello world!", 40, 50);
}

//If the browser supports canvas
if (canvas.getContext) {
  drawText();
}

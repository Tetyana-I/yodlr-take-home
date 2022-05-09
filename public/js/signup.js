// Handle signup form submission

const $signupForm = $('#signup-form');

async function signup(evt) {
  console.debug("signup", evt);
  evt.preventDefault();

  const firstName = $("#signup-firstName").val();
  const lastName = $("#signup-lastName").val();
  const email = $("#signup-email").val();

  try {
    let res = await axios.post('http://localhost:3000/users',
     {
        firstName: firstName,
        lastName: lastName,
        email: email
    });
    console.log("res:", res);
    
  } catch (err) {
    console.log("Couldn't submit a user", err);
  }
    $signupForm.trigger("reset");
}

$signupForm.on("submit", signup);
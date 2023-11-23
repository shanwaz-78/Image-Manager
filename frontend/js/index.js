const form = document.getElementById("login-form");
const API_URL = `http://localhost:8000`;

async function getStoredCredentials(url) {
  try {
    const userEmail = document.getElementById("email").value;
    const response = await fetch(`${url}/login?email=${userEmail}`);
    if (!response.ok) {
      throw new Error(`Email is not Valid`);
    }
    const data = await response.json();
    return [userEmail, data];
  } catch (error) {
    console.log(error.message);
  }
}

async function isValidEmail() {
  try {
    const [userEmail, storedData] = await getStoredCredentials(API_URL);
    const validateEmail = new RegExp(userEmail, "g");
    if (validateEmail.test(storedData[0].email)) {
      window.location.href = "../html/uploadfile.html";
    } else {
      console.log("Email is not valid");
      return;
    }
  } catch (error) {
    console.log(error.message);
  }
}

form.addEventListener("submit", isValidEmail);

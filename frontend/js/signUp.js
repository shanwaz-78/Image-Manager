const form = document.getElementById("submit-form");
const API_URL = "http://localhost:8000";

async function handleFormData() {
  try {
    const requestObj = {};
    const formData = new FormData(form);
    for (const [eachKey, eachValue] of formData) {
      requestObj[eachKey] = eachValue;
    }
    return requestObj;
  } catch (error) {
    console.log(`Got Empty data from FormData `, error);
  }
}

async function postRequest(url, data) {
  try {
    const requestHeader = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(url, requestHeader);
    if (!response.ok) {
      throw new Error(`Cannot send request`);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}

async function postData() {
  try {
    const data = await handleFormData();
    const response = await postRequest(`${API_URL}/sign-up/`, data);
    return response;
  } catch (error) {
    console.log("Error", error);
  } finally {
    console.log(`Data Posted Successfully`);
  }
}

form.addEventListener("submit", postData);

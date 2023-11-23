const fileIcon = document.getElementById("file-icon");
const fileInput = document.getElementById("file-input");
const allImagesBtn = document.getElementById("all-images");
const API_URL = `http://localhost:8000`;

function getSelectedFile() {
  fileInput.click();
  fileInput.onchange = (event) => {
    const selectedFile = event.target.files[0];
    uploadImage(selectedFile);
  };
}

async function uploadImage(selectedFile) {
  try {
    const imageBlob = new Blob([selectedFile], { type: selectedFile.type });
    const formData = new FormData();
    formData.append("image", imageBlob, selectedFile.name);

    const requestHeader = {
      method: "POST",
      body: formData,
    };

    const response = await fetch(`${API_URL}/upload-image`, requestHeader);

    if (!response.ok) {
      throw new Error(`Invalid URL`);
    }
    return response;
  } catch (error) {
    console.error(error.message);
  }
}

fileIcon.addEventListener("click", getSelectedFile);

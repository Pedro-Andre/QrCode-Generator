import myQrCode from "./qrCode-service.js";

async function clearQrCode() {
  // Elements
  const urlInput = document.getElementById("link");
  const clearInputBtn = document.querySelector(".clear-btn");

  clearInputBtn.addEventListener("click", async () => {
    if (urlInput.value === "") {
      alert("O campo já está limpo!\nAdicione um link para gerar um QrCode.");
      return;
    }

    urlInput.value = "";
  });
}

export default clearQrCode;

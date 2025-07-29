import createQrCode from "../services/createQrCode-service.js";

async function qrCodeErrors(error) {
  await createQrCode();

  const urlInput = document.getElementById("link");

  if (urlInput.value === "") {
    alert(`O campo não estar vazio!\nPor favor, insira algum texto.\n${error}`);
    return;
  }
}

export default qrCodeErrors;

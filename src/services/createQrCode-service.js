import myQrCode from "./qrCode-service.js";

async function createQrCode() {
  const createQrBtn = document.querySelector(".create-btn");
  const downloadQrBtn = document.querySelector(".download-btn");
  const spinner = document.querySelector(".spinner");
  const canvas = document.getElementById("canvas");
  const urlInput = document.getElementById("link");

  createQrBtn.addEventListener("click", () => {
    spinner.style.display = "block";
    canvas.style.filter = "brightness(0.4)";

    setTimeout(async () => {
      await myQrCode();
      spinner.style.display = "none";
      canvas.style.filter = "brightness(1)";

      if (urlInput.value === "") {
        downloadQrBtn.style.display = "none";
        return;
      } else {
        downloadQrBtn.style.display = "block";
        return;
      }
    }, 1000);
  });
}

export default createQrCode;

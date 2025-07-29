import downloadQrCode from "./downloadQrcode-service.js";

async function downloadQrCodeImage() {
  const downloadQrBtn = document.querySelector(".download-link");

  downloadQrBtn.addEventListener("click", async (e) => {
    await downloadQrCode();
  });
}

export default downloadQrCodeImage;

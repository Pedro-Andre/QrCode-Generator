async function downloadQrCode() {
  const downloadQrBtn = document.querySelector(".download-link");
  const canvas = document.getElementById("canvas");

  const imageQrCode = canvas.toDataURL("image/png");
  downloadQrBtn.href = imageQrCode;
  downloadQrBtn.download = "qrcode.png";
}

export default downloadQrCode;

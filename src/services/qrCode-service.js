import QRCode from "https://cdn.skypack.dev/qrcode";
import qrCodeImageCorrection from "../middlewares/qrCodeImageCorrection.js";
import qrCodeErrors from "../middlewares/qrCodeErrors.js";

// Create QrCode
async function myQrCode() {
  // Elements
  const urlInput = document.getElementById("link");
  const canvas = document.getElementById("canvas");
  const urlString = urlInput.value;

  try {
    await QRCode.toCanvas(
      canvas,
      urlString,
      qrCodeImageCorrection,
      qrCodeErrors
    );
  } catch (err) {
    console.error(err);
  }
}

export default myQrCode;

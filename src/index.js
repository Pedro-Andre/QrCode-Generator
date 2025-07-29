import createQrCode from "./services/createQrCode-service.js";
import clearQrCode from "./services/clearQrCode-service.js";
import downloadQrCodeImage from "./services/downloadQrCodeImage-service.js";

async function main() {
  // Function to create QrCode
  await createQrCode();

  // Function to download QrCode
  await downloadQrCodeImage();

  // Function clear the url input
  await clearQrCode();
}

main();

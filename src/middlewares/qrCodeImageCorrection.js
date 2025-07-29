const qrCodeImageCorrection = {
  // Error correction = Qr Code is dirty, damaged or showed through a monitor
  errorCorrectionLevel: "H",

  // QrCode specifications
  type: "image/png",
  margin: 1.2,
  width: 300,
  color: {
    dark: "#111",
    light: "#eee",
  },
};

export default qrCodeImageCorrection;

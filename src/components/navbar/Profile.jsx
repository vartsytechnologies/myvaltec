// import React from "react";
// import Button from "react-bootstrap/Button";

// const DownloadButton = () => {
//   const handleDownload = () => {
//     const link = document.createElement("a");
//     link.href = "/file/VALTEC-Corporate-Profile.pdf"; // ✅ Correct file path
//     link.download = "VALTEC-Corporate-Profile.pdf"; // ✅ Sets default download name
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <Button
//       className="d-lg-block d-md-none"
//       variant="secondary"
//       onClick={handleDownload}
//     >
//       Company Profile
//     </Button>
//   );
// };

// export default DownloadButton;

import React from "react";
import Button from "react-bootstrap/Button";

const DownloadButton = ({ className }) => {
  const handleOpenPdf = () => {
    const pdfUrl = "/file/VALTEC-Corporate-Profile.pdf";
    window.open(pdfUrl, "_blank");
  };

  return (
    <Button className={className} onClick={handleOpenPdf}>
      Company Profile
    </Button>
  );
};

export default DownloadButton;

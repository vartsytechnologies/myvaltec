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

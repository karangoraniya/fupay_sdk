import QRCode from "qrcode.react";
import React from "react";

interface GeneratorProps {
  address: string;
  amount: number;
  reference: number;
}

const QRCodeGenerator: React.FC<GeneratorProps> = ({
  address,
  amount,
  reference,
}) => {
  const data = {
    address,
    amount: amount,
    reference: reference,
  };

  const dataQr = JSON.stringify(data);

  return (
    <div>
      <>
        <p>Please Do Not Refresh This Page</p>
        <QRCode value={dataQr} />
      </>
    </div>
  );
};

export default QRCodeGenerator;

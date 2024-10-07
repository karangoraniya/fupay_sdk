declare module "qrcode.react" {
  import React from "react";

  export interface QRCodeProps {
    value: string;
    size?: number;
    level?: string;
    bgColor?: string;
    fgColor?: string;
    style?: React.CSSProperties;
    includeMargin?: boolean;
    imageSettings?: {
      src: string;
      x?: number;
      y?: number;
      height?: number;
      width?: number;
      excavate?: boolean;
    };
  }

  const QRCode: React.FC<QRCodeProps>;

  export default QRCode;
}

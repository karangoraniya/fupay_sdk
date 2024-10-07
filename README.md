# FuPay SDK

FuPay SDK is a TypeScript library for integrating Fuel blockchain payments into your applications. It provides easy-to-use functions for wallet integration and QR code generation for payment requests.

## Table of Contents

- [Installation](#installation)
- [Wallet Integration](#wallet-integration)
- [Frontend Usage](#frontend-usage)
- [API Reference](#api-reference)

## Installation

Install the FuPay SDK using npm:

```bash
npm install fupay
```

Or using yarn:

```bash
yarn add fupay
```

## Wallet Integration

The FuPay SDK provides a `FuPay` class for interacting with the Fuel blockchain and performing transfers.

### Basic Usage

```typescript
import { FuPay } from "fupay";
import { Wallet, Provider } from "fuels";

async function main() {
  // Initialize provider and wallet
  const provider = await Provider.create("https://beta-3.fuel.network/graphql");
  const wallet = Wallet.fromPrivateKey("your_private_key_here", provider);

  // Create FuPay instance
  const fuPay = new FuPay(wallet);

  // Perform a transfer
  try {
    const recipientAddress = "fuel1your_recipient_address_here";
    const amount = 100; // Amount in the smallest unit of the token
    const result = await fuPay.transfer(recipientAddress, amount);
    console.log("Transfer result:", result);
  } catch (error) {
    console.error("Transfer failed:", error);
  }
}

main();
```

## Frontend Usage

The SDK includes a React component for generating QR codes for payment requests.

### QR Code Generator

```typescript
import React from "react";
import { Generator } from "fupay";

const PaymentPage: React.FC = () => {
  const paymentData = {
    merchantAddress: "fuel1your_merchant_address_here",
    amount: 100,
    reference: 578475847,
  };

  return (
    <div>
      <h1>Scan QR Code to Pay</h1>
      <Generator {...paymentData} />
    </div>
  );
};

export default PaymentPage;
```

## API Reference

### `FuPay` Class

- `constructor(wallet: Wallet)`: Creates a new FuPay instance.
- `transfer(recipientAddress: string, amount: number): Promise<TransferResult>`: Performs a transfer.

### `Generator` Component

React component for generating QR codes.

Props:

- `merchantAddress: string`: The merchant's Fuel address.
- `amount: number`: The payment amount.
- `reference: number`: A reference for the payment (e.g., invoice number).

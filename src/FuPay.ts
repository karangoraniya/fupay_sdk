import { Provider, Wallet, Contract, BN, Account } from "fuels";
import { abiFuPay } from "./utils/FuPayAbi";
import { BASE_ASSET_ID, CONTRACT_ADDRESS } from "./utils/utils";

export class FuPay {
  private contract: Contract;
  private provider: Provider;

  constructor(wallet: Account | Provider) {
    this.contract = new Contract(CONTRACT_ADDRESS, abiFuPay, wallet);
    this.provider = wallet instanceof Provider ? wallet : wallet.provider;
  }

  async transfer(
    recipientAddress: string,
    amount: number,
    reference: number
  ): Promise<any> {
    try {
      const response = await this.contract.functions
        .transfer(
          { bits: recipientAddress },
          { bits: BASE_ASSET_ID },
          amount,
          reference
        )
        .callParams({
          forward: [new BN(amount), BASE_ASSET_ID],
          gasLimit: new BN(1000000),
        })
        .call();

      const result = await response.waitForResult();

      console.log("Transfer successful");
      console.log("Result:", result);

      // Log each event
      result.logs.forEach((log, index) => {
        console.log(`Log ${index}:`, log);
      });

      return result;
    } catch (error) {
      console.error("Error during transfer:", error);
      throw error;
    }
  }

  generateQRCodeData(
    address: string,
    amount: number,
    reference: number
  ): string {
    const data = {
      address,
      amount,
      reference,
    };
    return JSON.stringify(data);
  }

  //   async verifyTransaction(orderId: string, amount: number): Promise<boolean> {
  //     // This is a placeholder. You'll need to implement the actual verification logic
  //     // based on your contract's events and structure
  //     const events = await this.fetchEvents();
  //     return events.some(
  //       (event) => event.orderId === orderId && event.amount === amount
  //     );
  //   }

  //   async fetchEvents(customRpcUrl?: string): Promise<any[]> {
  //     const provider = customRpcUrl ?
  //       await Provider.create(customRpcUrl) :
  //       this.provider;

  //     // This is a placeholder. You'll need to implement the actual event fetching
  //     // based on your contract's event structure and the Fuel blockchain's API
  //     const latestBlock = await provider.getLatestBlock();
  //     const events = await this.contract.getEvents(latestBlock);
  //     return events.map(event => ({
  //       orderId: event.orderId,
  //       amount: event.amount,
  //       // ... other relevant fields
  //     }));
  //   }
}

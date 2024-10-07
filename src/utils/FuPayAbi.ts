export const abiFuPay = {
  programType: "contract",
  specVersion: "1",
  encodingVersion: "1",
  concreteTypes: [
    {
      type: "()",
      concreteTypeId:
        "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d",
    },
    {
      type: "struct TransferEvent",
      concreteTypeId:
        "a6230b7a08f198b6dd0fa8299d16a3879c8d0373c87422af40b1b558e5885994",
      metadataTypeId: 2,
    },
    {
      type: "struct std::address::Address",
      concreteTypeId:
        "f597b637c3b0f588fb8d7086c6f4735caa3122b85f0423b82e489f9bb58e2308",
      metadataTypeId: 3,
    },
    {
      type: "struct std::asset_id::AssetId",
      concreteTypeId:
        "c0710b6731b1dd59799cf6bef33eee3b3b04a2e40e80a0724090215bbf2ca974",
      metadataTypeId: 4,
    },
    {
      type: "u64",
      concreteTypeId:
        "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0",
    },
  ],
  metadataTypes: [
    {
      type: "b256",
      metadataTypeId: 0,
    },
    {
      type: "enum std::identity::Identity",
      metadataTypeId: 1,
      components: [
        {
          name: "Address",
          typeId: 3,
        },
        {
          name: "ContractId",
          typeId: 5,
        },
      ],
    },
    {
      type: "struct TransferEvent",
      metadataTypeId: 2,
      components: [
        {
          name: "token",
          typeId: 4,
        },
        {
          name: "from",
          typeId: 1,
        },
        {
          name: "to",
          typeId: 1,
        },
        {
          name: "amount",
          typeId:
            "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0",
        },
        {
          name: "reference",
          typeId:
            "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0",
        },
      ],
    },
    {
      type: "struct std::address::Address",
      metadataTypeId: 3,
      components: [
        {
          name: "bits",
          typeId: 0,
        },
      ],
    },
    {
      type: "struct std::asset_id::AssetId",
      metadataTypeId: 4,
      components: [
        {
          name: "bits",
          typeId: 0,
        },
      ],
    },
    {
      type: "struct std::contract_id::ContractId",
      metadataTypeId: 5,
      components: [
        {
          name: "bits",
          typeId: 0,
        },
      ],
    },
  ],
  functions: [
    {
      inputs: [
        {
          name: "recipient",
          concreteTypeId:
            "f597b637c3b0f588fb8d7086c6f4735caa3122b85f0423b82e489f9bb58e2308",
        },
        {
          name: "asset_id",
          concreteTypeId:
            "c0710b6731b1dd59799cf6bef33eee3b3b04a2e40e80a0724090215bbf2ca974",
        },
        {
          name: "amount",
          concreteTypeId:
            "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0",
        },
        {
          name: "reference",
          concreteTypeId:
            "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0",
        },
      ],
      name: "transfer",
      output:
        "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d",
      attributes: [
        {
          name: "payable",
          arguments: [],
        },
      ],
    },
  ],
  loggedTypes: [
    {
      logId: "11971424853244876982",
      concreteTypeId:
        "a6230b7a08f198b6dd0fa8299d16a3879c8d0373c87422af40b1b558e5885994",
    },
  ],
  messagesTypes: [],
  configurables: [],
};

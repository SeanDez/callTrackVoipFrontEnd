export default interface IFormattedCampaignCall {
  "phoneNumber": string; // "9093455007",
  "name": string | null,
  "status": string; // "active",
  "caller_id": string; // "8335951058",
  "date": string; // "2020-09-04T17:00:00.000Z",
  "weekDate": string;
  "description": string; // "Inbound DID",
  "disposition": string; // "ANSWERED",
  "seconds": number; // 7,
}
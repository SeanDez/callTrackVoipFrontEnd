import { PhoneNumberData } from "./PhoneNumberDataInterface";
import { PhoneNumberStatuses } from "./PhoneNumberStatuses";

export const fakeData: PhoneNumberData[] = [
  {
    phoneNumber: "8332818870", campaignName: "Birm. Investor - A", status: PhoneNumberStatuses.active, callData: [
      { weekMonthYear: "2020-03-21", rawCallCount: 4, filteredCallCount: 3 },
      { weekMonthYear: "2020-03-28", rawCallCount: 21, filteredCallCount: 18 },
      { weekMonthYear: "2020-04-05", rawCallCount: 15, filteredCallCount: 15 },
      { weekMonthYear: "2020-04-12", rawCallCount: 3, filteredCallCount: 1 },
      { weekMonthYear: "2020-04-19", rawCallCount: 18, filteredCallCount: 11 }
    ]
  },
  {
    phoneNumber: "382918870", campaignName: "Birm. Investor - B", status: PhoneNumberStatuses.active, callData: [
      { weekMonthYear: "2020-03-21", rawCallCount: 4, filteredCallCount: 3 },
      { weekMonthYear: "2020-03-28", rawCallCount: 21, filteredCallCount: 18 },
      { weekMonthYear: "2020-04-05", rawCallCount: 15, filteredCallCount: 15 },
      { weekMonthYear: "2020-04-12", rawCallCount: 3, filteredCallCount: 1 },
      { weekMonthYear: "2020-04-19", rawCallCount: 18, filteredCallCount: 11 }
    ]
  },
  {
    phoneNumber: "2632818870", campaignName: null, status: PhoneNumberStatuses.active, callData: [
      { weekMonthYear: "2020-03-21", rawCallCount: 4, filteredCallCount: 3 },
      { weekMonthYear: "2020-03-28", rawCallCount: 21, filteredCallCount: 18 },
      { weekMonthYear: "2020-04-05", rawCallCount: 15, filteredCallCount: 15 },
      { weekMonthYear: "2020-04-12", rawCallCount: 3, filteredCallCount: 1 },
      { weekMonthYear: "2020-04-19", rawCallCount: 18, filteredCallCount: 11 }
    ]
  },
  {
    phoneNumber: "8332818870", campaignName: "Birm. Investor - A", status: PhoneNumberStatuses.inactive, callData: [
      { weekMonthYear: "2020-03-21", rawCallCount: 4, filteredCallCount: 3 },
      { weekMonthYear: "2020-03-28", rawCallCount: 21, filteredCallCount: 18 },
      { weekMonthYear: "2020-04-05", rawCallCount: 15, filteredCallCount: 15 },
      { weekMonthYear: "2020-04-12", rawCallCount: 3, filteredCallCount: 1 },
      { weekMonthYear: "2020-04-19", rawCallCount: 18, filteredCallCount: 11 }
    ]
  },
  {
    phoneNumber: "382918870", campaignName: "Birm. Investor - B", status: PhoneNumberStatuses.inactive, callData: [
      { weekMonthYear: "2020-03-21", rawCallCount: 4, filteredCallCount: 3 },
      { weekMonthYear: "2020-03-28", rawCallCount: 21, filteredCallCount: 18 },
      { weekMonthYear: "2020-04-05", rawCallCount: 15, filteredCallCount: 15 },
      { weekMonthYear: "2020-04-12", rawCallCount: 3, filteredCallCount: 1 },
      { weekMonthYear: "2020-04-19", rawCallCount: 18, filteredCallCount: 11 }
    ]
  },
  {
    phoneNumber: "2632818870", campaignName: null, status: PhoneNumberStatuses.inactive, callData: [
      { weekMonthYear: "2020-03-21", rawCallCount: 4, filteredCallCount: 3 },
      { weekMonthYear: "2020-03-28", rawCallCount: 21, filteredCallCount: 18 },
      { weekMonthYear: "2020-04-05", rawCallCount: 15, filteredCallCount: 15 },
      { weekMonthYear: "2020-04-12", rawCallCount: 3, filteredCallCount: 1 },
      { weekMonthYear: "2020-04-19", rawCallCount: 18, filteredCallCount: 11 }
    ]
  },
  {
    phoneNumber: "8332818870", campaignName: "Birm. Investor - A", status: PhoneNumberStatuses.archived, callData: [
      { weekMonthYear: "2020-03-21", rawCallCount: 4, filteredCallCount: 3 },
      { weekMonthYear: "2020-03-28", rawCallCount: 21, filteredCallCount: 18 },
      { weekMonthYear: "2020-04-05", rawCallCount: 15, filteredCallCount: 15 },
      { weekMonthYear: "2020-04-12", rawCallCount: 3, filteredCallCount: 1 },
      { weekMonthYear: "2020-04-19", rawCallCount: 18, filteredCallCount: 11 }
    ]
  },
  {
    phoneNumber: "382918870", campaignName: "Birm. Investor - B", status: PhoneNumberStatuses.archived, callData: [
      { weekMonthYear: "2020-03-21", rawCallCount: 4, filteredCallCount: 3 },
      { weekMonthYear: "2020-03-28", rawCallCount: 21, filteredCallCount: 18 },
      { weekMonthYear: "2020-04-05", rawCallCount: 15, filteredCallCount: 15 },
      { weekMonthYear: "2020-04-12", rawCallCount: 3, filteredCallCount: 1 },
      { weekMonthYear: "2020-04-19", rawCallCount: 18, filteredCallCount: 11 }
    ]
  },
  {
    phoneNumber: "2632818870", campaignName: null, status: PhoneNumberStatuses.archived, callData: [
      { weekMonthYear: "2020-03-21", rawCallCount: 4, filteredCallCount: 3 },
      { weekMonthYear: "2020-03-28", rawCallCount: 21, filteredCallCount: 18 },
      { weekMonthYear: "2020-04-05", rawCallCount: 15, filteredCallCount: 15 },
      { weekMonthYear: "2020-04-12", rawCallCount: 3, filteredCallCount: 1 },
      { weekMonthYear: "2020-04-19", rawCallCount: 18, filteredCallCount: 11 }
    ]
  },
];

import { WeeklyCallData } from './WeeklyCallDataInterface';
import { PhoneNumberStatuses } from './PhoneNumberStatuses';

export interface PhoneNumberData {
  phoneNumber: string;
  status: PhoneNumberStatuses;
  campaignName: string | null;
  callData: Array<WeeklyCallData>;
}

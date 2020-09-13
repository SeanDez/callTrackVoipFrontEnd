import { WeeklyCallData } from './IWeeklyCallData';
import { PhoneNumberStatuses } from '../EPhoneNumberStatuses';

export interface PhoneNumberData {
  phoneNumber: string;
  status: PhoneNumberStatuses;
  campaignName: string | null;
  callData: Array<WeeklyCallData>;
}

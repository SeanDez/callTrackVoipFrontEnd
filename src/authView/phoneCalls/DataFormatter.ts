import moment, { Moment } from 'moment';
import lodash from 'lodash';
import IJoinedCampaignCall from './interfaces/IJoinedCampaignCall';
import IFormattedCampaignCall from './interfaces/IFormattedCampaignCall';
import * as Filter from './Filter';

type CampaignCallUnion = IJoinedCampaignCall | IFormattedCampaignCall;

export default class CampaignCallDataFormatter {

  constructor(
    private campaignCallData: object
  ) {} 

  private aggregateDataByWeek(campaignCallData: IJoinedCampaignCall[])
  : { [k: string]: IFormattedCampaignCall[] } {
    const normalizedByWeek = campaignCallData.map((record: IJoinedCampaignCall) => {
      const weekDateMoment: Moment = this.extractWeek(record.date);
      const stringWeekDate: string = weekDateMoment.format('YYYY-MM-DD');
      const { phoneNumber, name, status, caller_id, date, description, disposition, seconds } = record;
      const formattedCampaigncall: IFormattedCampaignCall = {
        phoneNumber, name, status, caller_id, date, weekDate: stringWeekDate, description, disposition, seconds
      }

      return formattedCampaigncall;
    });

    const keyedByWeekDate: { [k: string]: IFormattedCampaignCall[] } = lodash.groupBy(normalizedByWeek, record => record.weekDate);
    return keyedByWeekDate;
  }

  // todo remove if unused
  private extractWeek(timestamp: string): Moment {
    const year = moment(timestamp);
    const weekOfYear: number = moment(timestamp).week();
    const week: Moment = moment(year).add(weekOfYear, 'weeks');
    return week;
  }
}

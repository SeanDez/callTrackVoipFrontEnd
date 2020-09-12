import moment, { Moment } from 'moment';
import IJoinedCampaignCall from './interfaces/IJoinedCampaignCall';
import { AnyNsRecord } from 'dns';

interface FilterableStrings {
  "description": string;
  "disposition": string; 
} 

interface G2 <GR> {

}

/* 
    filters unqualified records and returns an array at the end
  */
export function andCount(
  record: unknown,
  minSeconds: number | undefined = undefined,
  descriptionMatcher: string | undefined = undefined,
  dispositionPattern: string | undefined = undefined,
  dateCutoff: Moment | undefined = undefined,
): number {
  let counter = 0;

  if (typeof minSeconds !== 'undefined') {
    // for each record
    // if (method test) count += 1

    secondsLongerThan(record as { seconds: number }, minSeconds);
  }

  if (typeof descriptionMatcher !== 'undefined') {

  }

  if (typeof dispositionPattern !== 'undefined') {

  }

  if (typeof dateCutoff !== 'undefined') {

  }

  return 0;
}

export function onlyAfterDate <Record extends { timestamp: string }>(record: Record, cutoffDaysBack: number = 180): Record | void {
  const cutoffDate = moment().subtract(cutoffDaysBack, "days");
  const isAfterCutoff: boolean = moment(record.timestamp).isAfter(cutoffDate);
  if (isAfterCutoff) {
    return record;
  } 
}

export function matchesRegexp <Record extends { [key in keyof FilterableStrings]: string }, str extends string>(record: Record, matchPattern: RegExp): Record | void {
  const matchFound: boolean = matchPattern.test(record['' as keyof FilterableStrings]);
  if (matchFound) return record;
}

export function secondsLongerThan <Record extends { seconds: number }>(record: Record, cutoff: number): Record | void {
  if (record.seconds >= cutoff) return record;
}
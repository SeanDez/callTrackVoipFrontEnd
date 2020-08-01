import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import styled from 'styled-components';
import { fakeData } from './fakeData';
import { PhoneNumberData } from './PhoneNumberDataInterface';
import Utilities from "../Utilities";
import { WeeklyCallData } from "./WeeklyCallDataInterface";

const data = fakeData

const data2 = [
  {name: 'Page A', uv: 400, pv: 2400, amt: 2400},
  {name: 'Page B', uv: 500, pv: 2400, amt: 2400},
  {name: 'Page C', uv: 800, pv: 2400, amt: 2400},
  {name: 'P D', uv: 400, pv: 2400, amt: 2400},
  {name: 'Page E', uv: 300, pv: 2400, amt: 2400},
];

const tooltipWrapperStyle = { 
  border: "1px solid black !important",
  padding: "0 !important",
  margin: "0 !important"
}

interface PropsShape {}

export default (props: PropsShape) => (
  <section>
    { fakeData.map((dataItem: PhoneNumberData) => {
      const formattedPhoneNumber = formatIntoUSAStylePhoneNumber(dataItem.phoneNumber);
      const totalFilteredCalls = sumFilteredWeeklyCallCounts(dataItem.callData);
      const recordStatus: string = Utilities.capitalize(dataItem.status);

      return (
        <OuterContainer>
          <WrappedHeaderLine>
            <p>{formattedPhoneNumber}</p>
            <p>{dataItem.campaignName || "Click to add a campaign name"}</p>
          </WrappedHeaderLine>

          <WrappedHeaderLine>
            <p>Campaign Start Date: Click to add</p>
            <p>Total Filtered Calls: {totalFilteredCalls}</p>
            <p>Status: {recordStatus}</p>
            <ResponsiveContainer width="80%" height={200}>
            <LineChart width={700} height={300} data={dataItem.callData}>
              <Line type="monotone" dataKey="rawCallCount" stroke="#8884d8" />
              <Line type="monotone" dataKey="filteredCallCount" stroke="#666" />
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="weekMonthYear" />
              <YAxis />
              <Tooltip wrapperStyle={tooltipWrapperStyle} />
            </LineChart>
            </ResponsiveContainer>
          </WrappedHeaderLine>
        </OuterContainer>
      )
    })
    }
  </section>
);

const WrappedHeaderLine = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  max-width: 1200px;
`;

const OuterContainer = styled.div`
  border: 1px solid darkturquoise;
`;


function sumFilteredWeeklyCallCounts(weeklyCounts: Array<WeeklyCallData>): number {
  return weeklyCounts.reduce((runningTotal: number, currentObject) => {
    return runningTotal + currentObject.filteredCallCount;
  }, 0)
}

function formatIntoUSAStylePhoneNumber(phoneNumber: string): string {
  const tooLong = phoneNumber.length > 11;
  const tooShort = phoneNumber.length < 10;
  if (tooLong || tooShort) { return phoneNumber; };

  const p = phoneNumber;
  if (phoneNumber.length === 11) {
    return `+${p[0]} (${p[1]}${p[2]}${p[3]}) ${p[4]}${p[5]}${p[6]}-${p[7]}${p[8]}${p[9]}${p[10]}`
  }

  return `(${p[0]}${p[1]}${p[2]}) ${p[3]}${p[4]}${p[5]}-${p[6]}${p[7]}${p[8]}${p[9]}`;
}
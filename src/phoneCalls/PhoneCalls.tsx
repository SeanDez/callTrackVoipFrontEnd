import React, { useState, useEffect } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import styled from 'styled-components';
import { fakeData } from './fakeData';
import { PhoneNumberData } from './interfaces/IPhoneNumberData';
import Utilities from "../Utilities";
import { WeeklyCallData } from "./interfaces/IWeeklyCallData";
import DataFormatter from './DataFormatter';

const data = fakeData

const tooltipWrapperStyle = { 
  border: "1px solid black !important",
  padding: "0 !important",
  margin: "0 !important"
}

interface PropsShape {
  
}

export default (props: PropsShape) => { 
  const [formattedData, setFormattedData] = useState(null);

  useEffect(() => {
    // take the data from props
    // format it here, since each view formats it differently
    // set it to state
  });
  
  return (
    <section>
      { fakeData.map((dataItem: PhoneNumberData, index: number) => {
        const formattedPhoneNumber = formatIntoUSAStylePhoneNumber(dataItem.phoneNumber);
        const totalFilteredCalls = sumFilteredWeeklyCallCounts(dataItem.callData);
        const recordStatus: string = Utilities.capitalize(dataItem.status);

        return (
          <OuterContainer key={index}>
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
                <XAxis dataKey="yearWeek" />
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
}

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
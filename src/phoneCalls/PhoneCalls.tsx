import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { NONAME } from 'dns';

interface SingleCallData {
  sourceNumber: string,
  destinationNumber: string,
  callTime: string
}

interface NumberData {
  phoneNumber: string,
  campaignName: string | null,
  callData: Array<SingleCallData>
}

const fakeData: NumberData[] = [
  { phoneNumber: "8332818870", campaignName: "Birm. Investor - A", callData: [
    { sourceNumber: "3823844123", destinationNumber: "8332818870", callTime: "00:32" },
    { sourceNumber: "8323844123", destinationNumber: "2332818870", callTime: "00:12" }
  ] },
  { phoneNumber: "2632818870", campaignName: null, callData: [
    { sourceNumber: "3823844123", destinationNumber: "8332818870", callTime: "00:32" },
    { sourceNumber: "8323844123", destinationNumber: "2332818870", callTime: "00:12" }
  ] },
];

interface PropsShape {}

const data = [
  {name: 'Page A', uv: 400, pv: 2400, amt: 2400},
  {name: 'Page B', uv: 500, pv: 2400, amt: 2400},
  {name: 'Page C', uv: 800, pv: 2400, amt: 2400},
  {name: 'P D', uv: 400, pv: 2400, amt: 2400},
  {name: 'Page E', uv: 300, pv: 2400, amt: 2400},
];

const tooltipWrapperStyle = { 
  width: 100, 
  border: "1px solid black !important",
  padding: "0 !important",
  margin: "0 !important"
}

export default (props: PropsShape) => (
  <section>
    { fakeData.map

    }
    <p>Phone numbers here. update 1</p>

    <LineChart width={320} height={400} data={data}>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip wrapperStyle={tooltipWrapperStyle} />
    </LineChart>
  </section>
);
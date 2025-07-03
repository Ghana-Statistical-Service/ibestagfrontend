'use client'
import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { curveCardinal } from 'd3-shape';
import TextUi from './Text';
import GraphContainer from './GraphContainer';
import InputUi from './input';
import SectionUI from './section';

const data = [
    
    {
        "region": "",
        "turnout": 0,
        "percent": 0
    },
    {
        "region": "Greater Accra",
        "turnout": 4000,
        "percent": 60
    },
    {
        "region": "Ashanti",
        "turnout": 5000,
        "percent": 60
    },
    {
        "region": "Bono",
        "turnout": 2000,
        "percent": 60
    },
    {
        "region": "Bono East",
        "turnout": 3000,
        "percent": 60
    },
    {
        "region": "Ahafo",
        "turnout": 1500,
        "percent": 60
    },
    {
        "region": "Central",
        "turnout": 3500,
        "percent": 60
    },
    {
        "region": "Eastern",
        "turnout": 4500,
        "percent": 60
    },
    {
        "region": "Northern",
        "turnout": 4000,
        "percent": 60
    },
    {
        "region": "Savannah",
        "turnout": 1000,
        "percent": 60
    },
    {
        "region": "North East",
        "turnout": 1200,
        "percent": 60
    },
    {
        "region": "Upper East",
        "turnout": 2200,
        "percent": 60
    },
    {
        "region": "Upper West",
        "turnout": 1800,
        "percent": 60
    },
    {
        "region": "Volta",
        "turnout": 2500,
        "percent": 60
    },
    {
        "region": "Oti",
        "turnout": 1100,
        "percent": 60
    },
    {
        "region": "Western",
        "turnout": 3700,
        "percent": 60
    },
    {
        "region": "Western North",
        "turnout": 1300,
        "percent": 60
    }
    ,
    {
        "region": "",
        "turnout": 0,
        "percent": 0
    },
  ]
const cardinal = curveCardinal.tension(0.2);

export default class TurnOutGraph extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/area-chart-different-shapes-6lwnhy';

  render() {
    return (
     <div>
          <GraphContainer 
          bottom={<div>
                <SectionUI gap={1} />
                <TextUi text="Updated At 15:45" size='bigger' color='dark400'/>
          </div>}
          right={<div>
        <InputUi label={"Select time"} select options={[
            {
                text: 'Select Time',
                value: ''
            },
            { text: '6:00', value: '6' },
            { text: '7:00', value: '7' },
            { text: '8:00', value: '8' },
            { text: '9:00', value: '9' },
            { text: '10:00', value: '10' },
            { text: '11:00', value: '11' },
            { text: '12:00', value: '12' },
            { text: '13:00', value: '13' },
            { text: '14:00', value: '14' },
            { text: '15:00', value: '15' },
            { text: '16:00', value: '16' },
            { text: '17:00', value: '17' },
            { text: '18:00', value: '18' }
        ]}/>
       </div>} title={"Voter TurnOuts"} subtitle={"This graphs shows the number of total turn outs accross the whole country."}>
            <AreaChart width={1100} height={300} data={data}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#0C8D43" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#C1EBD3" stopOpacity={0}/>
    </linearGradient>
   
  </defs>
  <XAxis dataKey="region" angle={45}/>
  <Tooltip />
  <Area dot={{r:4}} activeDot={{ r: 10 }} type="monotone" dataKey="turnout" stroke="#08612E" fillOpacity={1} fill="url(#colorUv)" strokeWidth={2} />
</AreaChart>
       </GraphContainer>
   
     </div>
    );
  }
}

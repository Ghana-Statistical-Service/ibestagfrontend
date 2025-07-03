'use client'
import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { curveCardinal } from 'd3-shape';
import TextUi from './Text';
import GraphContainer from './GraphContainer';

const data = [
    
    {
        "region": "",
        "functioning": 0,
        "not_functioning": 0,
        "percent": 0
    },
    {
        "region": "Greater Accra",
        "functioning": 4000,
        "not_functioning": 2400,
    },
    {
        "region": "Ashanti",
        "functioning": 5000,
        "not_functioning": 3000,
    },
    {
        "region": "Bono",
        "functioning": 2000,
        "not_functioning": 1200,
    },
    {
        "region": "Bono East",
        "functioning": 3000,
        "not_functioning": 1800,
    },
    {
        "region": "Ahafo",
        "functioning": 1500,
        "not_functioning": 900,
    },
    {
        "region": "Central",
        "functioning": 3500,
        "not_functioning": 2100,
    },
    {
        "region": "Eastern",
        "functioning": 4500,
        "not_functioning": 2700,
    },
    {
        "region": "Northern",
        "functioning": 4000,
        "not_functioning": 2400,
    },
    {
        "region": "Savannah",
        "functioning": 1000,
        "not_functioning": 600,
    },
    {
        "region": "North East",
        "functioning": 1200,
        "not_functioning": 720,
    },
    {
        "region": "Upper East",
        "functioning": 2200,
        "not_functioning": 1320,
    },
    {
        "region": "Upper West",
        "functioning": 1800,
        "not_functioning": 1080,
    },
    {
        "region": "Volta",
        "functioning": 2500,
        "not_functioning": 1500,
    },
    {
        "region": "Oti",
        "functioning": 1100,
        "not_functioning": 660,
    },
    {
        "region": "Western",
        "functioning": 3700,
        "not_functioning": 2220,
    },
    {
        "region": "Western North",
        "functioning": 1300,
        "not_functioning": 780,
    }
    ,
    {
        "region": "",
        "functioning": 0,
        "not_functioning": 0,
        "percent": 0
    },
  ]

export default class Functionality extends PureComponent {

  render() {
    return (
       <GraphContainer 
       title={"Functional & Not Functioning Devices"} 
       subtitle={"This graphs shows all devices which are functioning and deveives which are not functioning in all regions."}
       >
            <AreaChart width={1100} height={300} data={data}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#0C8D43" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#C1EBD3" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#ec4899" stopOpacity={0.8}/> ,
      <stop offset="95%" stopColor="#f9a8d4" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="region" angle={45}/>
  {/* <CartesianGrid strokeDasharray="3 3" /> */}
  <Tooltip />
  <Area dot={{r:4}} activeDot={{ r: 8 }} type="monotone" dataKey="functioning" stroke="#08612E" fillOpacity={1} fill="url(#colorUv)" strokeWidth={2} />
  <Area dot={{r:4}} type="monotone" dataKey="not_functioning" stroke="#ec4899" fillOpacity={1} fill="url(#colorPv)" />
</AreaChart>
       </GraphContainer>
    );
  }
}

'use client';
import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
} from 'recharts';
import TextUi from './Text';
import GraphContainer from './GraphContainer';
import RowFlexUi from './RowFlex';
import AnimationUi from './Animation';



const MainChart = ({data}) => {
  return (
    <GraphContainer 
      title='All Devices' 
      subtitle="This graphs shows all devices collected from all over the regions"
      bottom={
        <RowFlexUi justify='center' responsiveMedium>
          {data.map((doc) => (
            <div className="padding col" key={doc.label}>
              <AnimationUi animation='fade-down'> 
                <div className='card hover-up padding roundEdgeSmall' style={{borderRight:`0.5rem solid ${doc.fill}`}}>
                  <TextUi text={doc.y ? doc.y : doc.x ? doc.x : doc.y} bold heading="h3"/>
                  <TextUi text={doc.label} block size="minified"/>
                </div>
              </AnimationUi>
            </div>
          ))}
        </RowFlexUi>
      }
    >
      <BarChart
        width={1100}
        height={300}
        data={data}
      >
        <XAxis dataKey="label" />
        <Tooltip />
        <Bar dataKey="y" fill="#82ca9d" />
      </BarChart>
    </GraphContainer>
  );
};

export default MainChart;

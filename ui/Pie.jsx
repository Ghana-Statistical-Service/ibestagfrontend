'use client'
import React, { useEffect } from 'react'
import CanvasJSReact from '@canvasjs/charts';
import Grid from "funuicss/ui/grid/Grid"
import Text from "funuicss/ui/text/Text"
import TextUi from './Text';
import RowFlexUi from './RowFlex';

function PieGraph({id , data , title, subtitle, height}) {
    useEffect(() => {
        const chart = new CanvasJSReact.Chart(id, {
    
          animationEnabled: true,
          title: {
            // text: title,
            horizontalAlign: "left"
          },
          data: [{
            type: "doughnut",
            startAngle: 60,
            // innerRadius: 60,
            indexLabelFontSize: 17,
            indexLabel: "{label} - #percent%",
            toolTipContent: "<b>{label}:</b> {y} (#percent%)",
            dataPoints: data
          }]
        });
        chart.render();
      }, []);



    return (
        <div className=' fit _card margin-top-40 padding-20  text-smaller text-bold'>
            <TextUi text={title} heading="h2" bold/>
            <TextUi text={subtitle} />
            <div className='dark900 padding-20 roundEdgeSmall section'>
            <div id={id}  style={{ height: height ? height : '350px', width: '100%' }}></div>
            </div>
              <RowFlexUi funcss="padding  central" gap={1}>

{
    data.map(( doc) => (
      <div className=" width-200 " key={doc.label}>
          <div className='card padding roundEdgeSmall' >
            <Text heading='h1' bold text={doc.y ? doc.y : doc.x ? doc.x : doc.y} />
            <Text text={doc.label} block bold/>
        </div>
      </div>
    ))
}

</RowFlexUi>
        </div>
  )
}

export default PieGraph

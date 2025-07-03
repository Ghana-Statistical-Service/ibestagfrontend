import CardBack from '@/component/CardBack'
import React from 'react'

export default function Back() {
  return (
    <div className="" >
          <center>
        <div className="row ">
        <div className="col sm-12 md-6 lg-6 margin-top-10">
              <CardBack />
          </div>
        <div className="col sm-12 md-6 lg-6 margin-top-10">
              <CardBack />
          </div>
        <div className="col sm-12 md-6 lg-6 margin-top-10">
              <CardBack />
          </div>
        <div className="col sm-12 md-6 lg-6 margin-top-10">
              <CardBack />
          </div>
        </div>
    </center>
    </div>
  )
}

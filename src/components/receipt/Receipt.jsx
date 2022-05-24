import React from 'react'
import "./receipt.css"

export default function Receipt() {
  return (
    <div>
      <label className="title-receipt">Receipt</label>
      <div className='receipt'>
        <div className='row namePro'>Muong Thanh Grand Da Nang Hotel</div>
        <div className='row nameLegal'>Muong Thanh Grand Da Nang Hotel</div>
        <br/>
        <div className='row date-booking'>
          <div className='row'>
            <div className='col-5'>Check-in date:</div>
            <div className='col-7'>Wed, 18 May 2022, Từ 14:00</div>
          </div>
        </div>
        <div className='row date-booking'>
          <div className='row'>
            <div className='col-5'>check-out date:</div>  
            <div className='col-7'>Thu, 19 May 2022, Trước 12:00</div>
          </div>
        </div>
        <hr/>
        <div className='row namePro'>(1x) Superior Twin Room</div>
        <div className='row date-booking'>
          <div className='row'>
            <div className='col-5'>Guest/room:</div>
            <div className='col-7'>2 guests</div>
          </div>
        </div>
        <div className='row date-booking'>
          <div className='row'>
            <div className='col-5'>Bed Type:</div>  
            <div className='col-7'>2 single beds</div>
          </div>
        </div>
        <br/>
      </div>
    </div>
    
  )
}

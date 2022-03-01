import React from 'react'

export const TotalHours = ({total}) => {
  return (
    <div className="row mt-2m pb-5 fs-3 fw-bolder text-info">
        <div className="col text-center">
                    Total time allocated this week = <span className= "text-primary" id="Total"> {total} </span>
                    hrs &nbsp; Hours left to allocate = <span className="text-primary" id="hoursLeft"> 0 </span>
                    hrs
        </div>
    </div>
  )
}

import React from 'react'

const TourCard = ({tour}) => {

    const {id,title,city,photo,price,featured,reviews} = tour;

    const totalRating = reviews?.reduce((acc,item)=>acc+item.rating,0);

    const zero = totalRating === 0 ;
    const one = totalRating === 1;

    const avgRating = totalRating === 0 ? "" : totalRating === 1 ? totalRating : (totalRating/reviews?.length)

  return (
    <div className="card">
        <div className="tour__img">
            <img src={photo} className='w-100' alt="" />
        </div>
        <div className="card-body">
            <div className="d-flex align-items-center justify-content-between">
               <h6>
                 {avgRating === 0 ? "0" : avgRating}
                 {totalRating === 0 ? ("Not Rated") : (<span>({reviews.length})</span>)}
               </h6>
            </div>

        </div>
    </div>
  )
}

export default TourCard
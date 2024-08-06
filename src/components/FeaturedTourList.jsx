import React from 'react';
import tourData from '../assets/data/tours';
import TourCard from './TourCard';

const FeaturedTourList = () => {
  return (
    <>
    {tourData?.map((tour)=>(
        <div className="col-3">
           <TourCard tour={tour} />
        </div>
    ))}
    </>
  )
}

export default FeaturedTourList
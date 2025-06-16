import React from 'react'
import './FeaturedTourList.css'

import TourCard from '../../shared/TourCard'
import tourData from '../../file/data/tours'
import { Col, Button } from 'reactstrap'



const FeaturedTourList = () => {
   const firstFourTours = tourData.slice(0, 4);

   return (
      <>
      {firstFourTours.map((tour) => (
         <Col lg='3' md='4' sm='6' className='FeaturedTourList mb-2' key={tour.id}>
           <TourCard tour={tour} />
         </Col>
       ))}
       {tourData.length > 4 && ( // Render "Explore more places" button only if there are more than 4 tours
         <Col lg='12' className='text-center mt-4'>
           <Button className='explore-button' color="info" style={{
            color: 'black',
            padding: '10px 30px',
            boxShadow: '0 3px 0px', 
          }}   href='/Travel'>
             Explore More Places
           </Button>
         </Col>
       )
      }
         
      </>
   )
}

export default FeaturedTourList 
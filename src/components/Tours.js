import React from 'react'
import Card from './Card';

export const Tours = ({tours,removeTour}) => {
  return (
      <div>
          <div>
          <h2>Plan with Love</h2>
          </div>
          <div>
              {
                  tours.map((tour) => {
                      return (
                         <Card {...tour} key={tour.id}  removeTour={removeTour}></Card>
                      );
                  })
              }
              
          </div>
    </div>
  )
}

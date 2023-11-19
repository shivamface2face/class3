import React,{useState} from 'react'

const Card = ({ id, name, info, image, price, removeTour }) => {
    const [readmore, setreadmore] = useState(false);
    const discription =readmore?info:`info.substring(0, 200)}......`;
 

    function readmoreHandler() {
        setreadmore(!readmore);
 }

  


    return (
      <>
      <div className='card'>
          <img src={image} className='img' alt="" />

          <div className='tour-details'>
              <h4 className='price'>{price}</h4>
              <h4 className='name'>{ name}</h4>
          </div>
          <div className='discription'>
              {discription}
              <span className='read-more' onClick={readmoreHandler}>
                  {readmore?`show less`:`show more`}
              </span>
                </div>
                
                <button onClick={()=>removeTour(id)} className='button-red'>Not Intrested</button>

            </div>


            </>
  )
}

export default Card
import React from 'react'
import './Card.css'
import Graveyard from './img/graveyard.jpeg'
import SirEdward from './img/sirEdwards.jpeg'
import Bookmark from './img/bookmark.svg'

function Card() {
  return (
    <>
  {/* parent contaier is for scrolling */}
  <div className = 'parent-contain'>


    {/* holds rank 1 card */}
    <div className = 'card-container'>

        <div className = 'image-container'>
         <img src={Graveyard} className = 'photo' alt = "Graveyard"/>
        </div>
       
        <div className = 'title-text'>
              DEATH IN THE GRAVEYARD
        </div>
        
        <div className = 'body-text'>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat...
        </div>


       
        <div className = 'circle-border'>
            <div className = 'rank-text'>
                  1
            </div>
        </div>

       
        <img src={Bookmark} className = 'bookmark' alt = "BookMark"/>

        <div className='tag-sus-card'>
          SUSPICIOUS DEATH
        </div>

      
       
    </div>
    
    
     {/* holds rank 2 card */}
    <div className = 'card-container2'>

        <div className = 'image-container'>
            <img src={SirEdward} className = 'photo' alt = "SirEdward"/>
        </div>

        <div className = 'title-text'>
            MURDER OF SIR EDWARDS
        </div>

        <div className = 'body-text'>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat...
        </div>

        <div className = 'circle-border'>
          <div className = 'rank-text'>
              2
          </div>


        </div>

        <img src={Bookmark} className = 'bookmark' alt = "BookMark"/> 
        
        <div className= 'murder-tag-card'>
            MURDER
        </div >

        <div className= 'following-tag-card'>
            FOLLOWING
        </div >
      

     
    </div>

     {/* holds rank 3 card */}
   <div className = 'card-container2'>

  <div className = 'image-container'>
    <img src={Graveyard} className = 'photo' alt = "SirEdward"/>
  </div>

  <div className = 'title-text'>
    YEEDLE SKEEDLE YEEHAW    
  </div>

  <div className = 'body-text'>
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat...
  </div>

  <div className = 'circle-border'>
    <div className = 'rank-text'>
      3
    </div>
  </div>

  <img src={Bookmark} className = 'bookmark' alt = "BookMark"/> 


        <div className='tag-sus-card'>
          SUSPICIOUS DEATH
        </div>

</div>
        
  </div>
      
        
    </>
  )
}

export default Card


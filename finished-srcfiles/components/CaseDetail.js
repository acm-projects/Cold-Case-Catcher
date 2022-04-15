import React from 'react'
import './CaseDetail.css'
import DefaultProfile from './img/defaultProfile.svg'
//-------------------------------------------------

function CaseDetail() {
  return (
    <>
    
    <div className='case-detail-background'>
        <div className='case-title'>
          DEATH IN THE GRAVEYARD
        </div>
        <div className='case-tag'>
            <div className='case-tag-description'>
            MURDER
            </div>
          </div>

          <div className='case-decription'>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat...
            <br/>
            
          
            <br/>
            <div className='description-title'> DOCUMENTATION: </div>
            <br/>
            <br/>
            <div className='txt-underline'>
              CASE FILE
            </div>

            <br/> <br/>
            <div className='description-title'> COMMENTS: </div>
          </div>

          <div className='case-stats'> 
              DATE:  <br/>
            <div className='txt-color'>03/12/18</div>
              <br/>
              <br/>
              LAST UPDATED:  <br/>
            <div className='txt-color'>06/28/21</div>
              <br/>
              <br/>
              LOCATION: <br/>
              <div className='txt-color'>Blobfish, Texas</div>
          </div>

        
        <div className='divider'>
        </div>


        <div className='lined-comment-container'>

       

        <div className='comment-container'>

         
          {/* Comment from user 1 */}
            <img src={DefaultProfile} className = 'default-profile' alt = " Default Profile Icon"/>

            <div className='comment1'>
               Wow this is crazy! I can’t believe there would be death in a graveyard. Stay safe out there everyone and your vegetables
            </div>

          
          {/* Comment from user 2 */}
            <img src={DefaultProfile} className = 'default-profile2' alt = " Default Profile Icon"/>

           <div className='comment2'>
                According to my calculations I think the dirt was the killer. It was the only thing there at the time of the crime          
            </div>
            

          {/* Comment from user 3 */}
             <img src={DefaultProfile} className = 'default-profile2' alt = " Default Profile Icon"/>

           <div className='comment2'>
                Looking at the case file of the crime, it seems probable that this wasn't an isolated incident. We should look at other murders in the area too.
            </div>


          {/* Comment from user 4 */}
             <img src={DefaultProfile} className = 'default-profile2' alt = " Default Profile Icon"/>

               <div className='comment2'>
                 OMG!! Good work to the detectives... I would have never thought to have even patrolled a graveyard         
              </div>

              {/* Comment from user 5 */}
              <img src={DefaultProfile} className = 'default-profile2' alt = " Default Profile Icon"/>

              <div className='comment2'>
                 Honestly I think the cops were in on it 🧑‍🦳 they so sus 🤨
              </div>
        </div>

        </div> 




        {/*comment bar code*/}

        <div className="comment-bar">
      <input
        type="text"
        name="comment-bar"
        id="comment-bar"
        placeholder="Write a comment"
      />

      <input
        type="text"
        name="comment-bar"
        id="comment-bar2"
      />
    </div> 


       
    </div>

    </>
  )
}

export default CaseDetail



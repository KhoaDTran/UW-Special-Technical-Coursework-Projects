import React, { useState, useEffect } from 'react'; //import React Component
import Moment from 'react-moment';
import './Chirper.css'; //load module-specific CSS


//A list of chirps that have been posted
export default function ChirpList(props) {
  const [chirps, setChirps] = useState([]) //an array!



  if(chirps.length == 0) return null; //if no chirps, don't display

  /* TODO: produce a list of `<ChirpItems>` to render */
  let chirpItems = []; //REPLACE THIS with an array of actual values!


  return (
    <div className="container">
        {chirpItems}
    </div>
  );
}

//A single Chirp
function ChirpItem(props) {

  const likeChirp = () => {
    /* TODO: update the chirp when it is liked */
  }
 
  let chirp = props.chirp; //current chirp (convenience)

  //counting likes
  let likeCount = 0; //count likes
  let userLikes = false; //current user has liked
  if(chirp.likes){
    likeCount = Object.keys(chirp.likes).length;
    if(chirp.likes[props.currentUser.uid]) //if user id is listed
      userLikes = true; //user liked!
  }

  return (
    <div className="row py-4 bg-white border">
      <div className="col-1">
        <img className="avatar" src={chirp.userPhoto} alt={chirp.userName+' avatar'} />
      </div>
      <div className="col pl-4 pl-lg-1">

        <span className="handle">{chirp.userName} {/*space*/}</span>

        <span className="time"><Moment date={chirp.time} fromNow/></span>

        <div className="chirp">{chirp.text}</div>

        {/* A section for showing chirp likes */}
        <div className="likes">          
          <i className={'fa fa-heart '+(userLikes ? 'user-liked': '')} aria-label="like" onClick={likeChirp} ></i>
          <span>{/*space*/} {likeCount}</span>
        </div>
      </div>
    </div>      
  );
}

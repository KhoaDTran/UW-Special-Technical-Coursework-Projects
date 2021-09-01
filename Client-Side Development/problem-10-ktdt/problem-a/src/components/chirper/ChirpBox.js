import React, { useState } from 'react'; //import React Component

import './Chirper.css'; //load module-specific CSS

//SOLUTION
import firebase from 'firebase/app';


//A form the user can use to post a Chirp
export default function ChirpBox(props) {
  const [post, setPost] = useState('')

  //when the text in the form changes
  const updatePost = (event) => {
    setPost(event.target.value);
  }

  //post a new chirp to the database
  const postChirp = (event) => {
    event.preventDefault(); //don't submit
    
    /* TODO: add a new Chirp to the database */

    setPost(''); //empty out post for next time
  }

  //You do not need to modify the below code!!
  let user = props.currentUser; //the current user (convenience)

  return (
    <div className="container">
      <div className="row py-3 chirp-box">
        <div className="col-1">
          <img className="avatar" src={user.photoURL} alt={user.displayName+' avatar'} />
        </div>
        <div className="col pl-4 pl-lg-1">
          <form>
            <textarea name="text" className="form-control mb-2" placeholder="What's Happening...?" 
              value={post} 
              onChange={updatePost}
              />

            {/* Only show this if the post length is > 140 */}
            {post.length > 140 &&
              <small className="form-text">140 character limit!</small>
            }
            
            <div className="text-right">
              {/* Disable if invalid post length */}
              <button className="btn btn-primary" 
                disabled={post.length === 0 || post.length > 140}
                onClick={postChirp} 
                >
                <i className="fa fa-pencil-square-o" aria-hidden="true"></i> Share
              </button> 					
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

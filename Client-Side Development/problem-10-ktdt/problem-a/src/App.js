import React, { useState, useEffect } from 'react';
import SignUpForm from './components/signup/SignUpForm';

function App(props) {
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [user, setUser] = useState(undefined);


  //A callback function for registering new users
  const handleSignUp = (email, password, handle, avatar) => {
    setErrorMessage(null); //clear any old errors

  }

  //A callback function for logging in existing users
  const handleSignIn = (email, password) => {
    setErrorMessage(null); //clear any old errors

  }

  //A callback function for logging out the current user
  const handleSignOut = () => {
    setErrorMessage(null); //clear any old errors

  }


  let content = null; //content to render

  if(!user) { //if logged out, show signup form
    content = (
      <div className="container">
        <h1>Sign Up</h1>
        <SignUpForm 
          signUpCallback={handleSignUp} 
          signInCallback={handleSignIn} 
          />
      </div>
    );
  } 
  else { //if logged in, show welcome message
    content = (
      <div>
        <WelcomeHeader user={user}>
          {/* log out button is child element */}
          {user &&
            <button className="btn btn-warning" onClick={handleSignOut}>
              Log Out {user.displayName}
            </button>
          }
        </WelcomeHeader>
      </div>
    );
  }

  return (
    <div>
      {errorMessage &&
        <p className="alert alert-danger">{errorMessage}</p>
      }
      {content}
    </div>
  );
}

//A component to display a welcome message to a `user` prop (for readability)
function WelcomeHeader(props) {
  return (
    <header className="container">
      <h1>
        Welcome {props.user.displayName}!
        {' '}
        <img className="avatar" src={props.user.photoURL} alt={props.user.displayName} />
      </h1>
      {props.children} {/* for button */}
    </header>
  );
}

export default App;
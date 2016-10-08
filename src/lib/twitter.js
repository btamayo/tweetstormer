/* eslint-disable */
document.addEventListener("DOMContentLoaded", function() {
  initializeAuth();
});


const updateLocalUserInformation = (user) => {
  if (user != null) {
    console.log(user);
    user.providerData.forEach(function (profile) {
      console.log(profile);
      console.log("Sign-in provider: "+profile.providerId);
      console.log("  Provider-specific UID: "+profile.uid);
      console.log("  Name: "+profile.displayName);
      console.log("  Email: "+profile.email);
      console.log("  Photo URL: "+profile.photoURL);
    });
  }
}

const initializeAuth = () => {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      updateLocalUserInformation(user);
      console.log('User is signed in.');
    } else {
      console.log('No user');
    }
  });
}

const twitterLogin = () => {
  var provider = new firebase.auth.TwitterAuthProvider();

  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
    // You can use these server side with your app's credentials to access the Twitter API.
    var token = result.credential.accessToken;
    var secret = result.credential.secret;
    // The signed-in user info.
    var user = result.user;
    console.log(result.user);
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}

const storeSettings = () => {
  var database = firebase.database();

  function writeUserData(userId, name, email, imageUrl) {
    firebase.database().ref('users/' + userId).set({
      username: name,
      email: email,
      profile_picture : imageUrl
    });
  }
}

const deleteUser = (user) => {
  // @TODO: Reauthenticate
  var user = firebase.auth().currentUser;

  user.delete().then(function() {
    // User deleted.
  }, function(error) {
    // An error happened.
  });
}

export { twitterLogin }
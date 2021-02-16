// Listener for form submit

// put in your own firebase config below.

var firebaseConfig = {
    apiKey: "XXXxxx",
    authDomain: "XXXxxx",
    projectId: "XXXxxx",
    storageBucket: "XXXxxx",
    messagingSenderId: "XXXxxx",
    appId: "XXXxxx",
    measurementId: "XXXxxx"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // reference messages collection
  const messagesRef = firebase.database().ref('messages');

document.getElementById('contactForm').addEventListener('submit', submitForm);

// submitting the form

function submitForm (e) {
    e.preventDefault();

    // get all values from form

    const name = getInputValue('name')
    const company = getInputValue('company')
    const email = getInputValue('email')
    const phone = getInputValue('phone')
    const message = getInputValue('message')

    // set up firebase 

    // save messages
    saveMessage(name, company, email, phone, message);

    // show alert 
    document.querySelector('.alert').style.display = 'block'

    // hide alert

    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none'
    }, 3000)

    // clear form
    document.getElementById('contactForm').reset();

}

// function for form values 

function getInputValue (id) {
return document.getElementById(id).value;

}

// save messages to firebase

function saveMessage(name, company, email, phone, message) {
    
    const newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name, company: company, email: email, phone: phone, message: message
    })
}

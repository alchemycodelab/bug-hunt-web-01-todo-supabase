import { 
    redirectIfLoggedIn, 
    signInUser, 
    signupUser,
} from './fetch-utils.js';

const signInForm = document.getElementById('sign-in');
const signInEmail = document.getElementById('email');
const signInPassword = document.getElementById('sign-in-password');

const signUpForm = document.getElementById('sign-up');
const signUpPassword = document.getElementById('sign-up-password');

// if user currently logged in, redirect
redirectIfLoggedIn();

signUpForm.addEventListener('submit', async(event)=>{
    event.preventDefault();
    const user = await signupUser(signUpEmail.value, signUpPassword.value);

    if (user){
        redirectIfLoggedIn();
    } else {
        console.error(user);
    }
});

signInForm.addEventListener('submit', async(event)=>{
    event.preventDefault();
    const user = await signInUser(signInEmail, signInPassword);
  
    if (user){
        redirectIfLoggedIn();
    } else {
        console.error(user);
    }
});
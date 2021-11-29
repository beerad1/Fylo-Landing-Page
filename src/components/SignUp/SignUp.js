import React from "react";
import "./SignUp.css";

const SignUp = () => {
  return(
    <form class="signupContainer">
        <h1>Get early access today</h1>

        <p>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>

        <input type="email" value="email@example.com" />

        <button class="signupBtn">Get Started For Free</button>
    </form>
  )
}

export default SignUp;
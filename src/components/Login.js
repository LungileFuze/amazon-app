import  React, {useState, useRef, useEffect} from "react"
import { Link } from "react-router-dom"
import "./Login.css" 


const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const emailRef = useRef()
  const passwordRef = useRef()

  //Prevent signing the user out without removing it from the  storage when refreshing the page
  useEffect(() => {
    const user = localStorage.getItem("isLoggedIn")

    if(user) {
      setIsLoggedIn(true)
    }
  }, [])

  const signIn = e => {
    e.preventDefault()
    const enteredEmail = emailRef.current.value
    const enteredPassword = passwordRef.current.value
    console.log("Email: ", enteredEmail + " Password: ", enteredPassword)
    localStorage.setItem("isLoggedIn", 1)
    setIsLoggedIn(true)
  }

  const signOut = () => {
    setIsLoggedIn(false)
    localStorage.removeItem("isLoggedIn")
  }

  return (
    <div className="login">
      {isLoggedIn && (
        <p>You are logged in <button onClick={signOut}>SignOut</button></p>
      )}
      
        <Link to="/" className="custom-links">
            <img
              src="https://ledgergurus.com/wp-content/uploads/2019/02/amazon-logo-transparent-800x258.png"
              alt="amazon-logo"
              className="login-logo"
            />
        </Link>
        <div  className="login-container">
          <h1>Sign in</h1>
          <form>
            <label>E-mail or mobile phone number</label>
            <input type="text" ref={emailRef} />
            <label>Password</label>
            <input type="password" ref={passwordRef} />
            <button type="submit" className="signIn-button" onClick={signIn}>
              Sign in
            </button>
          </form>
          <p>By continuing, you agree to Amazon's <a href="">Conditions of Use </a> and <a href="">Privacy Notice</a>.</p>
          <p>
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
            <span> <a href="#">Need help?</a></span>
          </p>
          <hr aria-hidden="true" className="a-divider-normal"></hr>
          <p>Buy for work?</p>
          <div><a href="">Shop on amazon business</a></div>
          
        </div>
        <p className="separator">New to amazon?</p>
        <button className="register-button">Create your Amazon Account</button>
    </div>
  )
}

export default Login

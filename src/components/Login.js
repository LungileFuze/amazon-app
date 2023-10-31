import  React, {useState, useReducer, useEffect} from "react"
import { Link } from "react-router-dom"
import "./Login.css" 


const reducer = (state, action) => {
  if(action.type === "EMAIL_INPUT") {
    return {...state, emailValue: action.payload }
  }
 

  if(action.type === "PASSWORD_INPUT") {
    return {...state, passwordValue: action.payload }
  }
  return {...state, emailValue: "", passwordValue: ""}
}

const Login = () => {
  const [formIsValid, setFormIsValid] = useState(false)

  const [state, dispatch] = useReducer(reducer, {
    emailValue: "",
    passwordValue: ""
  })

    const {emailValue: email, passwordValue: password} = state

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("Checking for form validity")
    setFormIsValid(email.includes("@") && password.trim().length > 6)
    }, 500);
    
    
    return () => {
      console.log("Clean-up function before the next side effect")
      clearTimeout(identifier)
    }    
  },[email,password])

  const emailChangedHandler = (e) => {
    dispatch({type: "EMAIL_INPUT", payload: e.target.value})
    // setFormIsValid(e.target.includes("@") && password.trim().length > 6)
    // setEmail(e.target.value)
    
  }

  const passwordChangedHandler = (e) => {
    dispatch({type: "PASSWORD_INPUT", payload: e.target.value})
    // setPassword(e.target.value)
  }

  const signIn = (e) => {
    e.preventDefault()
    console.log("Entered email: ", email + "  Entered password: ", password)
  }
  return (
    <div className="login">
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
            <input type="text" value={email} onChange={emailChangedHandler} />
            <label>Password</label>
            <input type="password" value={password} onChange={passwordChangedHandler} />
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

import  React, {useState, useReducer, useEffect, useContext} from "react"
import { Link, useHistory } from "react-router-dom"
import "./Login.css" 
import AuthContext from "../context/authContext"


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
  const ctx = useContext(AuthContext)
  const history = useHistory()
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
  }, [email, password])

  const emailChangedHandler = (e) => {
    dispatch({type: "EMAIL_INPUT", payload: e.target.value})
  }

  const passwordChangedHandler = (e) => {
    dispatch({type: "PASSWORD_INPUT", payload: e.target.value})
  }

  const signIn = (e) => {
    e.preventDefault()
    console.log(formIsValid)
    console.log("Entered email: ", email + "  Entered password: ", password)
    ctx.onLogin(state.emailValue, state.passwordValue)

    history.push("/")
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
            <input type="text" value={state.emailValue} onChange={emailChangedHandler} />
            <label>Password</label>
            <input type="password" value={state.passwordValue} onChange={passwordChangedHandler} />
            <button type="submit" className="signIn-button" onClick={signIn}>
              Sign in
            </button>
          </form>
          <p>By continuing, you agree to Amazon's <Link to="/">Conditions of Use </Link> and <Link to="/">Privacy Notice</Link>.</p>
          <p>
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
            <span> <Link to="/">Need help?</Link></span>
          </p>
          <hr aria-hidden="true" className="a-divider-normal"></hr>
          <p>Buy for work?</p>
          <div><Link to="/">Shop on amazon business</Link></div>
          
        </div>
        <p className="separator">New to amazon?</p>
        <button className="register-button">Create your Amazon Account</button>
    </div>
  )
}

export default Login

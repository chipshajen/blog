import { useContext } from "react"
import LoginForm from "./LoginForm"
import Button from "./Button"
import { AuthContext } from "../context/AuthContext"
import { Link } from "react-router-dom"


export default function Home() {

    const { user, logout } = useContext(AuthContext)

    console.log(user)
    console.log(AuthContext)

    function handleLogin(formData){
        console.log(formData)
        fetch('http://localhost:3000/auth/login', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        })
        .then((response) => response.json())
        .then((data) => { 
            console.log(data)
            localStorage.setItem("jwt", data.token)
            localStorage.setItem("username", data.username)
        })
        .catch((error) => console.error(error))
    }

    function handleCheckLocalStorage(){
        console.log(localStorage.getItem("jwt"))
        console.log(localStorage.getItem("username"))
        console.log(user)
    }

  return (
    <>
        <LoginForm onLogin={handleLogin}/>
        <Button onClick={handleCheckLocalStorage} text="Check LocalStorage"/>
        {!user && (
            <Link to="/register"><button>Register</button></Link>
        )}
    </>
  )
}
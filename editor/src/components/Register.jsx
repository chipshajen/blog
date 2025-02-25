import { useState, useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { Link, useNavigate } from "react-router-dom"

export default function Register(){

    const navigate = useNavigate()
const { user } = useContext(AuthContext)

const [registerForm, setRegisterForm] = useState({
    username: "",
    password: "",
    email: ""
})

function handleChange(e){
    const { name, value } = e.target

    setRegisterForm((prevState) => ({
        ...prevState,
        [name]: value
    }))

    console.log(registerForm)
}

function handleSubmit(e){
    e.preventDefault()
    console.log(registerForm)
    fetch('http://localhost:3000/auth/register', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(registerForm)
    })
    .then((response) => response.json())
    .then((data) => {
        alert('succesfully created an account')
        navigate('/')
    })
    .catch((error) => console.error(error))
}

        return (
            <>
            {!user ? (
                <form className="login-form" onSubmit={handleSubmit}>
                <div className="login-username">
                <label htmlFor="username">Username: </label>
                <input type="text" name="username" id="username" value={registerForm.username} onChange={handleChange}/>
                </div>
                <div className="login-password">
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" id="password" value={registerForm.password} onChange={handleChange}/>
                </div>
                <div className="login-email">
                <label htmlFor="email">Email: </label>
                <input type="email" name="email" id="email" value={registerForm.email} onChange={handleChange}/>
                </div>
                <button type="submit">Register</button>
            </form>
            ) :
            <Link to="">You are already logged in, back to home</Link>
            }
            
        
            </>
          )
}
import { useState } from "react"

function LoginForm({ onLogin }) {

    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })

    function handleChange(e){
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
        console.log(formData)
    }

    function handleSubmit(e){
        e.preventDefault()
        onLogin(formData)
    }

  return (
    <>
    <form className="login-form" onSubmit={handleSubmit}>
        <div className="login-username">
        <label htmlFor="username">Username: </label>
        <input type="text" name="username" id="username" value={formData.username} onChange={handleChange}/>
        </div>
        <div className="login-password">
        <label htmlFor="password">Password: </label>
        <input type="password" name="password" id="password" value={formData.password} onChange={handleChange}/>
        </div>
        <button type="submit">Log In</button>
    </form>

    </>
  )
}

export default LoginForm
import { useContext } from "react"
import LoginForm from "./LoginForm"
import Button from "./Button"
import { AuthContext } from "../context/AuthContext"
import { Link } from "react-router-dom"


export default function Home() {

    const { user, logout, login, loading } = useContext(AuthContext)

    function handleLogin(formData){
        fetch('http://localhost:3000/auth/login', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        })
        .then((response) => response.json())
        .then((data) => { 
            login(data.token, data.username)
        })
        .catch((error) => console.error(error))
    }

    function handleCheckLocalStorage(){
        console.log(localStorage.getItem("jwt"))
        console.log(localStorage.getItem("username"))
        console.log(user)
    }

    return (
        <div className="welcome">
            {loading ? (
                <h1>Loading</h1>
            ) : (
                <>
                    {!user ? (
                        <>
                            <LoginForm onLogin={handleLogin} />
                            <Button onClick={handleCheckLocalStorage} text="Check LocalStorage" />
                            <Link to="/register">
                                <button>Register</button>
                            </Link>
                        </>
                    ) : (
                        <>
                        <h1>Welcome {user.username}</h1>
                        <Button onClick={logout} text="Log Out"/>
                        <Link to="/posts">Manage Posts</Link>
                        </>
                    )}
                </>
            )}
        </div>
    )}
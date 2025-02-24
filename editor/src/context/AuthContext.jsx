import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext({ user: null, login: () => {}, logout: () => {}, loading: true });

export function AuthProvider({ children }) {

    console.log("🔍 AuthProvider is mounting...");  // ✅ Debugging log

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem("jwt");
        if (token) {
            fetch("http://localhost:3000/auth/validate", {
                headers: { Authorization: `Bearer ${token}` },
            })
            .then((response) => response.json())
            .then((data) => {
                if (data.valid) {
                    setUser({ username: data.username, token });
                } else {
                    localStorage.removeItem("jwt");
                    setUser(null);
                }
            })
            .catch(() => setUser(null))
            .finally(() => setLoading(false));
        } else {
            setLoading(false);
        }
    }, []);

    function login(token, username) {
        localStorage.setItem("jwt", token);
        localStorage.setItem("username", username);
        setUser({ username, token });
    }

    function logout() {
        localStorage.removeItem("jwt");
        localStorage.removeItem("username");
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
}
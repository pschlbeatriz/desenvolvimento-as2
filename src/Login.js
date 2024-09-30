// src/Login.js
import React, { useState } from "react";
import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, senha);
            navigate("/principal");
        } catch (error) {
            alert("Usuário não cadastrado: " + error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder="Senha" onChange={(e) => setSenha(e.target.value)} required />
            <button type="submit">Acessar</button>
        </form>
    );
};

export default Login;

// src/Principal.js
import React, { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";

const Principal = () => {
    const [usuario, setUsuario] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            if (auth.currentUser) {
                const userDoc = await getDoc(doc(db, "usuarios", auth.currentUser.uid));
                if (userDoc.exists()) {
                    setUsuario(userDoc.data());
                }
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {usuario ? (
                <div>
                    <h1>Bem-vindo, {usuario.nome} {usuario.sobrenome}</h1>
                    <p>Data de Nascimento: {usuario.dataNascimento}</p>
                </div>
            ) : (
                <p>Carregando...</p>
            )}
        </div>
    );
};

export default Principal;

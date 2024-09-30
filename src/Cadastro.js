// src/Cadastro.js
import React, { useState } from "react";
import { auth, db } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const Cadastro = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [mensagem, setMensagem] = useState("");  // Estado para armazenar a mensagem de sucesso ou erro

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
      const user = userCredential.user;

      await setDoc(doc(db, "usuarios", user.uid), {
        nome,
        sobrenome,
        dataNascimento,
        email,
      });

      setMensagem("Usuário cadastrado com sucesso!");  // Exibe mensagem de sucesso
    } catch (error) {
      setMensagem("Erro ao cadastrar usuário: " + error.message);  // Exibe mensagem de erro
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Senha" onChange={(e) => setSenha(e.target.value)} required />
        <input type="text" placeholder="Nome" onChange={(e) => setNome(e.target.value)} required />
        <input type="text" placeholder="Sobrenome" onChange={(e) => setSobrenome(e.target.value)} required />
        <input type="date" onChange={(e) => setDataNascimento(e.target.value)} required />
        <button type="submit">Cadastrar</button>
      </form>

      {mensagem && <p>{mensagem}</p>}  {/* Exibe a mensagem na tela */}
    </div>
  );
};

export default Cadastro;

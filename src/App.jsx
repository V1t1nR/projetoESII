import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login"; // Componente de Login
import CadastroUsuario from "./components/cadastroUsuario"; // Componente de Cadastro de Usuário
import RecuperarSenha from "./components/recuperarSenha"; // Componente de Recuperação de Senha

function App() {
    return (
        <Router>
            <Routes>
                {/* Rota para a página de Login */}
                <Route path="/" element={<Login />} />

                {/* Rota para a página de Cadastro de Usuário */}
                <Route path="/cadastro" element={<CadastroUsuario />} />

                {/* Rota para a página de Recuperação de Senha */}
                <Route path="/recuperar" element={<RecuperarSenha />} />
            </Routes>
        </Router>
    );
}

export default App;

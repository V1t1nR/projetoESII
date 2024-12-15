import React from "react";
import "../assets/css/style_login.css"; // Importe o CSS correto
import logo from "../assets/img/logo_login.png"; // Importe a imagem

function Login() {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Login realizado com sucesso!");
    };

    return (
        <section className="area-login">
            <div className="login">
                <div>
                    <img src={logo} alt="Logo" />
                </div>
                <form id="login-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="nome"
                        placeholder="Nome de Usuário"
                        required
                        autoFocus
                    />
                    <input
                        type="password"
                        name="senha"
                        placeholder="Senha"
                        required
                    />
                    <input type="submit" value="Entrar" />
                </form>
                <div className="extra-buttons">
                    <a href="/cadastro" className="button">
                        Cadastrar
                    </a>
                    <a href="/recuperar" className="button">
                        Esqueci Minha Senha
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Login;

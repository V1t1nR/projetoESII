import React, { useState } from "react";
import "../assets/css/style.css"; // Importe o CSS correto
import formImage from "../assets/img/es2.svg"; // Importe a imagem

function CadastroUsuario() {
    const [usuario, setUsuario] = useState({
        nomeUsuario: "",
        senha: "",
        email: "",
        cpf: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUsuario({ ...usuario, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        enviarDados(usuario);
    };

    const enviarDados = (usuario) => {
        fetch("URL_DO_SEU_BACKEND", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(usuario),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        "Erro na resposta do servidor: " + response.statusText
                    );
                }
                return response.json();
            })
            .then((data) => {
                alert("Cadastro realizado com sucesso!");
                console.log("Resposta do backend:", data);
            })
            .catch((error) => {
                console.error("Erro ao enviar os dados:", error);
                alert("Ocorreu um erro ao tentar realizar o cadastro.");
            });
    };

    return (
        <div className="container">
            <div className="form-image">
                <img src={formImage} alt="Form Image"/>
            </div>
            <div className="form">
                <form id="cadastro-form" onSubmit={handleSubmit}>
                    <div className="form-header">
                        <div className="title">
                            <h1>Cadastrar Usuário</h1>
                        </div>
                    </div>
                    <div className="input-group">
                        <div className="input-box">
                            <label htmlFor="nomeUsuario">Nome de Usuário</label>
                            <input
                                id="nomeUsuario"
                                name="nomeUsuario"
                                type="text"
                                placeholder="Digite o Nome"
                                value={usuario.nomeUsuario}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="input-box">
                            <label htmlFor="senha">Senha</label>
                            <input
                                id="senha"
                                name="senha"
                                type="password"
                                placeholder="Digite a Senha"
                                value={usuario.senha}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="input-box">
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Digite o Email"
                                value={usuario.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="input-box">
                            <label htmlFor="cpf">CPF</label>
                            <input
                                id="cpf"
                                name="cpf"
                                type="text"
                                placeholder="Digite o CPF"
                                value={usuario.cpf}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="sign-button">
                        <button type="submit" className="botao">
                            Cadastrar
                        </button>
                    </div>
                    <div className="back-button">
                        <a href="/" className="button-style">
                            Voltar
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CadastroUsuario;
